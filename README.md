# Personal Portfolio — Edward Barrios

A personal portfolio website built as a class project for a software development course. It showcases who I am, my projects, a pets gallery, and a contact form. The site is fully responsive and includes basic JavaScript interactivity.

## Preview

The portfolio has three main pages:
- **Home (`index.html`)** — about me, projects grid, and contact form
- **Pets (`mascotas.html`)** — photo gallery of my six cats
- Both pages share a single stylesheet and the same overall design

## File Structure

```
portfolio/
├── index.html          # Main page
├── mascotas.html       # Pets gallery page
├── styles.css          # Main stylesheet
├── style.min.css       # Minified version of the stylesheet
├── script.js           # JavaScript interactions
├── README.md           # This file
└── fotos de las mascotas/
    └── *.jpg / *.jpeg  # Pet photos
```

## Features

### Responsive Design
The layout adapts to three screen sizes using CSS media queries:
- **Mobile (≤ 600px)** — stacked navigation, single-column project grid, 2-column gallery
- **Tablet (≤ 900px)** — 2-column project grid, 3-column gallery
- **Desktop** — 3-column project grid, 3-column gallery

### CSS
- Global color and typography variables defined in `:root`
- Shared rules for cards and gallery articles to avoid repetition
- All images use `max-width: 100%` and `height: auto` for responsiveness
- Font sizes use `rem` units for better scaling across devices
- A minified copy (`style.min.css`) is included for production use

### JavaScript
Three interactions handled in `script.js`:
1. **Welcome banner** — appears on page load and disappears after 3 seconds
2. **Toggle text** — a button alternates the "About me" paragraph between two messages
3. **Show/hide content** — a button reveals or hides an extra info block

## Technologies

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## How to Run

No build tools or dependencies needed. Just open `index.html` in any modern browser.

```bash
# Option 1 — open directly
open index.html

# Option 2 — use a local server (e.g. VS Code Live Server extension)
```

## Author

**Edward Barrios** — software development student, pianist and music producer from Barranquilla, Colombia.