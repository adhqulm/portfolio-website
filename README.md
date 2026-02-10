# kristinaganina.com

My personal portfolio website built with Next.js 15, React 19, and TypeScript.

**Live:** [kristinaganina.com](https://kristinaganina.com/)

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)

## Features

- **Responsive design** — fully functional across desktop, tablet, and mobile
- **Smooth animations** — scroll-triggered transitions powered by Framer Motion
- **Dark theme** — clean dark UI with cyan accents
- **Fast** — built on Turbopack for optimized dev and production builds
- **Single-page layout** — Hero, About, Experience, Projects, Skills, and Contact sections

## Tech Stack

| Category   | Technologies                                    |
| ---------- | ----------------------------------------------- |
| Framework  | Next.js 15 (App Router)                         |
| Language   | TypeScript                                      |
| Styling    | Tailwind CSS 4, PostCSS                         |
| Animations | Framer Motion                                   |
| Font       | Geist (Sans + Mono)                             |
| Deployment | Vercel                                          |

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# Clone the repo
git clone https://github.com/your-username/portfolio-site.git
cd portfolio-site

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout & metadata
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/
│   ├── Navbar.tsx         # Fixed nav with scroll tracking
│   ├── Hero.tsx           # Landing section
│   ├── About.tsx          # Bio & background
│   ├── Experience.tsx     # Work timeline
│   ├── Projects.tsx       # Project showcase grid
│   ├── Skills.tsx         # Technical skills
│   ├── Contact.tsx        # CTA & footer
│   └── AnimatedSection.tsx # Reusable scroll animation wrapper
├── constants.ts           # All site content & data
└── types/
    └── types.ts           # TypeScript interfaces
```

## Scripts

| Command           | Description                  |
| ----------------- | ---------------------------- |
| `npm run dev`     | Start dev server (Turbopack) |
| `npm run build`   | Production build             |
| `npm run start`   | Start production server      |
| `npm run lint`    | Run ESLint                   |

## Customization

All site content (profile info, experience, projects, skills) lives in [`src/constants.ts`](src/constants.ts). Update that file to make the portfolio your own.

## License

MIT
