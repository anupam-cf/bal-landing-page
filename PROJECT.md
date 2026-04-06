# Personal Website — Anupam

## Objective

Build a modern, elegant personal website and deploy it to **GitHub Pages**. The site should be clean, minimal, and professional.

---

## Tech Stack

- **HTML5** / **CSS3** / **Vanilla JavaScript**
- Hosted on **GitHub Pages**
- No frameworks — lightweight and fast

---

## Pages

### 1. Home (`index.html`)

- Hero section with name **"Anupam"** and a short tagline
- Smooth scroll navigation
- Clean typography and whitespace-driven layout
- Subtle animations on load (fade-in, slide-up)

### 2. About (`about.html`)

- Profile photo (`66c50142-a33f-49bd-bb61-e3b0fd73fc98.jpg`)
- Bio section with placeholder text (to be personalized)
- Skills or interests section

---

## Features

### Dark / Light Mode Toggle

- Toggle button in the navigation bar (sun/moon icon)
- Saves preference in `localStorage` so it persists across visits
- Smooth transition between themes

### Design Principles

- **Modern & Elegant**: Generous whitespace, refined color palette, smooth transitions
- **Responsive**: Mobile-first, works on all screen sizes
- **Accessible**: Semantic HTML, sufficient color contrast, keyboard-navigable
- **Fast**: No external frameworks, minimal assets

---

## Color Palette

| Mode  | Background | Text      | Accent    |
|-------|-----------|-----------|-----------|
| Light | `#fafafa` | `#1a1a1a` | `#4f46e5` |
| Dark  | `#0f0f0f` | `#e5e5e5` | `#818cf8` |

---

## Typography

- **Headings**: `Inter` (Google Fonts)
- **Body**: `Inter` — clean, modern sans-serif

---

## File Structure

```
hackathon-test/
├── index.html          # Home page
├── about.html          # About page with photo & bio
├── css/
│   └── style.css       # All styles + dark/light themes
├── js/
│   └── main.js         # Theme toggle + animations
├── assets/
│   └── photo.jpg       # Profile photo (renamed for clarity)
└── PROJECT.md          # This file
```

---

## Deployment

1. Initialize git repo
2. Push to GitHub
3. Enable GitHub Pages (from `main` branch)
4. DM Sai the live link

---

## Status

- [ ] Create project structure
- [ ] Build Home page
- [ ] Build About page with photo & bio
- [ ] Implement dark/light mode toggle
- [ ] Make responsive
- [ ] Deploy to GitHub Pages
