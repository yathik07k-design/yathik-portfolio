# Yathik K — Portfolio Website

A recruiter-facing personal portfolio built with React + Vite. All content is sourced from the resume and lives in one place: `src/data/content.js`.

## 1. Run the website

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

To build the production version:

```bash
npm run build
npm run preview
```

## 2. Add your profile photo

Put your photograph at:

```
public/images/profile.jpg
```

Until it's added, the hero section shows a labeled placeholder frame instead.

## 3. Add project images

Put images at:

```
public/images/projects/car-window-system.jpg
public/images/projects/intellivest.jpg
public/images/projects/steganography.jpg
```

## 4. Add AutoCAD drawings / electrical schematics

There's no dedicated CAD gallery yet since the resume doesn't list specific drawing files. The simplest option: add them to `public/images/projects/` and reference them from `src/data/content.js` (e.g. as an extra `image` on a project, or a new `drawings` array you render in `Projects.jsx`).

## 5. Add certificate images

Put images at:

```
public/images/certificates/circuit-prototyping.jpg
public/images/certificates/embedded-iot-internship.jpg
```

## 6. Add LinkedIn / GitHub

Open `src/data/content.js` and set:

```js
linkedin: "https://linkedin.com/in/your-handle",
github: "https://github.com/your-handle",
```

Until set, the Contact section shows "Add LinkedIn URL" / "Add GitHub URL".

## 7. Resume file

Your resume PDF is already placed at `public/resume.pdf`, and every "Download Resume" button links to it. Replace that file any time you update your resume — no code changes needed.

## 8. Deploy the website online

Any static host works. Two easy options:

**Vercel**
```bash
npm i -g vercel
vercel
```

**Netlify**
```bash
npm run build
# then drag-and-drop the generated `dist/` folder into Netlify's dashboard,
# or use `netlify deploy` with the Netlify CLI.
```

Both auto-detect the Vite build (`npm run build`, output folder `dist`).

## Folder structure

```
yathik-portfolio/
├─ public/
│  ├─ resume.pdf                     ← downloadable resume
│  └─ images/
│     ├─ profile.jpg                 ← your photo (add this)
│     ├─ projects/                   ← project images (add these)
│     └─ certificates/               ← certificate images (add these)
├─ src/
│  ├─ data/content.js                ← ALL resume content — edit facts here
│  ├─ hooks/                         ← scroll-reveal + active-nav-section hooks
│  ├─ components/                    ← one component per section
│  ├─ App.jsx                        ← assembles the page
│  ├─ index.css                      ← design tokens (color, type, layout)
│  └─ styles.css                     ← component styles
└─ index.html                        ← fonts, meta/SEO tags
```
