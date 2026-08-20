const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  console.log('Starting puppeteer...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  
  await page.setViewport({ width: 1200, height: 1600, deviceScaleFactor: 2 });
  
  const ports = [3000, 3001, 3002, 3003, 3004];
  let loaded = false;

  for (const port of ports) {
    const urls = [
      `http://localhost:${port}/brochure-print`,
      `http://127.0.0.1:${port}/brochure-print`
    ];

    for (const targetUrl of urls) {
      try {
        console.log(`Trying ${targetUrl} ...`);
        const response = await page.goto(targetUrl, { waitUntil: 'networkidle0', timeout: 15000 });
        
        // Verify response status
        if (response && response.status() === 200) {
          // Check if page has error overlay
          const hasError = await page.evaluate(() => {
            const bodyText = document.body.innerText || '';
            return bodyText.includes('Cannot find module') || 
                   bodyText.includes('Failed to compile') || 
                   bodyText.includes('Server Error') ||
                   Boolean(document.querySelector('nextjs-portal'));
          });

          if (hasError) {
            console.warn(`Warning: ${targetUrl} rendered an error page. Trying next...`);
            continue;
          }

          const hasA4Pages = await page.evaluate(() => document.querySelectorAll('.a4-page').length);
          console.log(`Successfully connected to ${targetUrl} (Found ${hasA4Pages} .a4-page elements)`);
          
          if (hasA4Pages > 0) {
            loaded = true;
            break;
          }
        }
      } catch (err) {
        console.log(`Failed connecting to ${targetUrl}: ${err.message}`);
      }
    }
    if (loaded) break;
  }

  if (!loaded) {
    console.error('Could not connect to any port with a valid brochure-print page!');
    await browser.close();
    process.exit(1);
  }
  
  console.log('Page loaded, waiting for React hydration, images, and fonts...');
  await page.evaluate(async () => {
    // Wait for all images
    const images = Array.from(document.querySelectorAll('img'));
    await Promise.all(images.map(img => {
      if (img.complete) return Promise.resolve();
      return new Promise(resolve => {
        img.onload = resolve;
        img.onerror = resolve;
      });
    }));
    // Wait for all web fonts
    if (document.fonts) {
      await document.fonts.ready;
    }
  });

  await new Promise(r => setTimeout(r, 4000));

  const outputPath = path.join(__dirname, 'public', 'documentos', 'BROCHURE.pdf');
  console.log(`Generating PDF at ${outputPath} ...`);
  
  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '0px',
      bottom: '0px',
      left: '0px',
      right: '0px'
    }
  });

  console.log('PDF generated successfully!');
  await browser.close();
})();
