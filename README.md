# Dimitrios Studio.

My personal portfolio site, designed and built from scratch with React and TypeScript.

**idea. plan. design. build.**

---

## About

Dimitrios Studio is where my work lives: mobile apps, web projects and photography. The site is a single-page portfolio with bold, editorial typography and a minimal palette, built without a UI library or template.

---

## Tech Stack

- **React** + **TypeScript**
- **Vite**: dev server and build
- **CSS Modules**: component-scoped styling
- **Google Fonts**: Archivo Black and DM Sans

---

## Features

- **Data-driven projects:** project cards are generated from a single data file, so adding a project needs no new markup.
- **Sticky navigation** with anchor links to each section.
- **Fluid, responsive typography** using `clamp()`, scaling smoothly from phone to desktop without fixed breakpoints.
- **Responsive layouts** that stack on mobile.

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx
│   └── ProjectCard.tsx
├── sections/
│   ├── Hero.tsx
│   ├── About.tsx
│   └── Projects.tsx
├── data/
│   └── projects.ts        # all project content
├── types/
│   └── project.ts         # Project interface
└── index.css              # global styles, variables, fonts

public/
└── projects/
    └── <slug>/            # one folder per project
        ├── cover.png
        ├── 1.png
        ├── 2.png
        └── 3.png
```

Each component sits next to its own `.module.css` file.

---

## Adding a Project

1. Add an entry to `src/data/projects.ts`:
   ```ts
   {
       slug: 'sol',
       title: 'Sol',
       description: 'Mars weather, one sol at a time.',
       techStack: ['Flutter', 'Dart', 'FastAPI', 'Python'],
       githubRepo: 'https://github.com/dimitrilahanas/sol-app',
   }
   ```
2. Create `public/projects/<slug>/` with `cover.png` and `1.png`–`3.png`.

That's it. The card and its images are picked up automatically from the slug.

---

## Getting Started

```bash
git clone https://github.com/dimitrilahanas/<repo-name>.git
cd <repo-name>
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

---

## Roadmap

- [ ] Individual project pages with React Router
- [ ] Photography gallery with lightbox
- [ ] Working contact form
- [ ] Scroll and text reveal animations
- [ ] Smooth scrolling with Lenis

---

Designed and built by **Dimitrios Lahanas**.