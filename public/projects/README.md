# Project Screenshots Directory

This directory contains screenshots and visual assets for portfolio projects.

## Directory Structure

Each project has its own subdirectory:
- `smartbuy/` - SmartBuy AI eCommerce Platform screenshots
- `ats/` - ATS Resume Generator screenshots
- `blinds/` - Blinds & Boundaries screenshots
- `blinds-pro/` - Blinds Pro screenshots
- `railway/` - Railway Predictive Maintenance screenshots
- `autoloan/` - Auto Loan Processing screenshots
- `fitness/` - Fitness Transformation App screenshots
- `jobhunter/` - AI Job Hunter screenshots
- `taskify/` - Taskify Pro screenshots
- `portfolio/` - Personal Portfolio screenshots

## Screenshot Types

For each project, add screenshots with the following naming conventions:

1. **Product Screenshots**: `product-*.png` or `interface-*.png`
   - Main application interface
   - Key features and functionality
   - User interactions

2. **Website Screenshots**: `homepage.png`, `landing.png`
   - Landing pages
   - Public-facing pages
   - Marketing pages

3. **Performance Screenshots**: `performance.png`, `metrics.png`
   - Lighthouse scores
   - Analytics dashboards
   - Performance metrics
   - Load time measurements

4. **Code Screenshots**: `code-sample.png`, `implementation.png`
   - Key code snippets
   - Architecture diagrams
   - Technical implementations

5. **Architecture Screenshots**: `architecture.png`, `diagram.png`
   - System architecture
   - Data flow diagrams
   - Infrastructure diagrams

6. **Dashboard Screenshots**: `dashboard.png`, `admin.png`
   - Admin panels
   - Analytics dashboards
   - Monitoring interfaces

## Image Requirements

- **Format**: PNG or JPG
- **Recommended Size**: 1200x800px or larger
- **Optimization**: Compress images for web (use tools like ImageOptim or TinyPNG)
- **Naming**: Use descriptive, lowercase names with hyphens (e.g., `homepage.png`, `ai-agent-interface.png`)

## Adding Screenshots

1. Take screenshots of your projects
2. Optimize them for web
3. Place them in the appropriate project directory
4. Update the `projects.ts` file with the correct paths

Example:
```typescript
screenshots: [
  { type: 'website', url: '/projects/smartbuy/homepage.png', alt: 'SmartBuy Homepage', caption: 'Modern eCommerce homepage' },
  { type: 'product', url: '/projects/smartbuy/ai-agent.png', alt: 'AI Assistant', caption: 'AI-powered shopping assistant' }
]
```

