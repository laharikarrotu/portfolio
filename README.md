# Portfolio – Lahari Karrotu
Personal portfolio built with Next.js, TypeScript, Tailwind, and Framer Motion. It highlights AI agents, full-stack builds, data systems, and live project demos.

## Quick Start
```bash
npm install
npm run dev      # http://localhost:3000

npm run lint     # lint check
npm run build    # production build
```

## Live Projects (selected)
- SmartBuy AI: https://smart-buy-v2.vercel.app
- ScanX / ScanToActionAI: https://scan-to-action-ai-scanx-s14g.vercel.app
- Blinds & Boundaries: https://blinds-boundaries-online.vercel.app
- Auto Loan AI: https://auto-loan-processing.vercel.app
- ATS Resume Parser: https://web-production-dc67.up.railway.app/

## Structure
- `src/app/page.tsx` — main landing page and sections
- `src/data/projects.ts` — project cards (titles, links, screenshots)
- `src/components/*` — shared UI components
- `public/projects/*` — project screenshots
- `public/LahariKarrotuResumeSDE-*.pdf` — current resume file

## Updating Content
- Projects: edit `src/data/projects.ts`; add screenshots under `public/projects/<project>/`.
- Certifications/skills: update lists in `src/app/page.tsx`.
- Resume download: point the footer button to the latest PDF in `public/`.

## Deployment
Target: Vercel (Next.js app router). Build command: `npm run build`. If a service needs environment variables (e.g., API keys), set them in Vercel project settings.

## Contact
Email: laharikarrotu24@gmail.com  
GitHub: https://github.com/laharikarrotu  
LinkedIn: https://www.linkedin.com/in/laharikarrotu/
