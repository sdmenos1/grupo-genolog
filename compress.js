const fs = require('fs');
const path = require('path');
const Jimp = require('jimp');

const directoryPath = path.join(__dirname, 'public/images');

async function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            await processDirectory(fullPath);
        } else if (/\.(jpg|jpeg|png)$/i.test(fullPath)) {
            const stats = fs.statSync(fullPath);
            // Process images larger than 150KB
            if (stats.size > 150 * 1024) { 
                console.log(`Compressing ${fullPath} (${(stats.size/1024/1024).toFixed(2)} MB)`);
                try {
                    const image = await Jimp.read(fullPath);
                    // Resize to max width 1920 to save huge amounts of space
                    if (image.bitmap.width > 1920) {
                        image.resize(1920, Jimp.AUTO);
                    }
                    // Compress quality
                    image.quality(70); 
                    await image.writeAsync(fullPath);
                    const newStats = fs.statSync(fullPath);
                    console.log(` -> Done: ${(newStats.size/1024/1024).toFixed(2)} MB`);
                } catch (e) {
                    console.error(`Error on ${fullPath}:`, e.message);
                }
            }
        }
    }
}

console.log('Starting image compression...');
processDirectory(directoryPath).then(() => console.log('Compression complete!'));
