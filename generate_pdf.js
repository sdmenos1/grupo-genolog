const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  console.log('Starting puppeteer...');
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  
  // Set viewport for a better layout if necessary
  await page.setViewport({ width: 1200, height: 1600 });
  
  const targetUrl = 'http://[::1]:3002/brochure-print';
  console.log(`Navigating to ${targetUrl} ...`);
  
  try {
    await page.goto(targetUrl, { waitUntil: 'networkidle0', timeout: 60000 });
  } catch (err) {
    console.log('Failed with [::1], trying 127.0.0.1...');
    await page.goto('http://127.0.0.1:3002/brochure-print', { waitUntil: 'networkidle0', timeout: 60000 });
  }
  
  console.log('Page loaded, waiting for 8 seconds to let React hydrate and images load completely...');
  await new Promise(r => setTimeout(r, 8000));

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
