# Screenshot Capture Scripts

## Quick Start - Manual Method (Easiest)

1. **Visit your live websites:**
   - SmartBuy: https://smart-buy-v2.vercel.app
   - Blinds: https://blinds-boundaries-online.vercel.app
   - Auto Loan: https://auto-loan-processing.vercel.app

2. **Take screenshots using browser:**
   - Chrome: `F12` → `Cmd+Shift+P` → "Capture full size screenshot"
   - Or use browser extension like "Full Page Screen Capture"

3. **Save to appropriate folders:**
   ```
   public/projects/smartbuy/homepage.png
   public/projects/blinds/homepage.png
   public/projects/autoloan/homepage.png
   ```

## Automated Method (Advanced)

If you want to automate screenshot capture:

1. **Install Puppeteer:**
   ```bash
   npm install puppeteer --save-dev
   ```

2. **Run the script:**
   ```bash
   node scripts/capture-screenshots.js
   ```

3. **Screenshots will be saved** to `public/projects/[project-name]/`

## What Screenshots to Capture

For each project, capture:

1. **Homepage** - Main landing page
2. **Key Features** - Important functionality screens
3. **Performance Metrics** - Lighthouse scores, analytics
4. **Dashboards** - Admin panels or user dashboards (if applicable)

## Image Optimization

After capturing, optimize images:
- Use [TinyPNG](https://tinypng.com/) to compress
- Target: Under 500KB per image
- Format: PNG for screenshots, JPG for photos

