/**
 * Automated Screenshot Capture Script
 * 
 * This script uses Puppeteer to automatically capture screenshots
 * from your live project URLs.
 * 
 * Installation:
 * npm install puppeteer
 * 
 * Usage:
 * node scripts/capture-screenshots.js
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const projects = [
  {
    name: 'smartbuy',
    url: 'https://smart-buy-v2.vercel.app',
    screenshots: [
      { name: 'homepage.png', wait: 4000, description: 'Main homepage' },
      { name: 'ai-assistant.png', wait: 3000, action: 'scroll', description: 'AI navigation assistant' }
    ]
  },
  {
    name: 'blinds',
    url: 'https://blinds-boundaries-online.vercel.app',
    screenshots: [
      { name: 'homepage.png', wait: 4000, description: 'Landing page' },
      { name: 'virtual-tryon.png', wait: 4000, action: 'scroll', description: 'Virtual try-on interface' }
    ]
  },
  {
    name: 'autoloan',
    url: 'https://auto-loan-processing.vercel.app',
    screenshots: [
      { name: 'homepage.png', wait: 4000, description: 'Main page' },
      { name: 'application-form.png', wait: 3000, action: 'scroll', description: 'Application interface' }
    ]
  }
];

async function captureScreenshot(browser, project, screenshot) {
  const page = await browser.newPage();
  
  try {
    console.log(`📸 Capturing ${project.name}/${screenshot.name} (${screenshot.description || 'screenshot'})...`);
    
    // Set viewport size for desktop
    await page.setViewport({ width: 1920, height: 1080 });
    
    // Set user agent to avoid bot detection
    await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
    
    // Navigate to the page
    console.log(`   Navigating to ${project.url}...`);
    await page.goto(project.url, { 
      waitUntil: 'networkidle2',
      timeout: 60000 
    });
    
    // Wait for any additional loading
    await new Promise(resolve => setTimeout(resolve, screenshot.wait || 2000));
    
    // Perform any actions if needed
    if (screenshot.action === 'scroll') {
      console.log(`   Scrolling to capture full page...`);
      await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
      });
      await new Promise(resolve => setTimeout(resolve, 2000));
      // Scroll back to top
      await page.evaluate(() => {
        window.scrollTo(0, 0);
      });
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    // Create directory if it doesn't exist
    const dir = path.join(__dirname, '../public/projects', project.name);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`   Created directory: ${dir}`);
    }
    
    // Capture screenshot
    const filePath = path.join(dir, screenshot.name);
    await page.screenshot({
      path: filePath,
      fullPage: true,
      type: 'png'
    });
    
    // Get file size
    const stats = fs.statSync(filePath);
    const fileSizeInKB = (stats.size / 1024).toFixed(2);
    
    console.log(`✅ Saved: ${filePath} (${fileSizeInKB} KB)`);
    
  } catch (error) {
    console.error(`❌ Error capturing ${project.name}/${screenshot.name}:`, error.message);
    if (error.message.includes('Navigation timeout')) {
      console.error(`   Tip: The website might be slow or unavailable. Try again later.`);
    }
  } finally {
    await page.close();
  }
}

async function main() {
  console.log('🚀 Starting screenshot capture...\n');
  console.log(`📋 Will capture screenshots for ${projects.length} projects\n`);
  
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox', 
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu'
    ]
  });
  
  try {
    for (const project of projects) {
      console.log(`\n${'='.repeat(50)}`);
      console.log(`📁 Processing: ${project.name.toUpperCase()}`);
      console.log(`🌐 URL: ${project.url}`);
      console.log(`${'='.repeat(50)}\n`);
      
      for (const screenshot of project.screenshots) {
        await captureScreenshot(browser, project, screenshot);
        // Small delay between screenshots
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
    
    console.log(`\n${'='.repeat(50)}`);
    console.log('✨ Screenshot capture completed!');
    console.log(`${'='.repeat(50)}\n`);
    console.log('📂 Screenshots saved to: public/projects/[project-name]/');
    console.log('💡 Tip: Optimize images using TinyPNG before committing\n');
    
  } catch (error) {
    console.error('\n❌ Fatal error:', error);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

// Run if executed directly
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { captureScreenshot, projects };

