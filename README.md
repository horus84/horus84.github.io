# Portfolio

The design is structured to emulate traditional academic journals and typesetting layouts, avoiding typical developer portfolio templates.

## Technologies

- **Framework:** Astro 7
- **Styling:** Tailwind CSS 4 (using CSS variables, `@theme`, and `@layer`)
- **Language:** TypeScript
- **Content:** Astro Content Collections (type-safe JSON schema validators)
- **Features:** Auto-generated RSS feeds, Sitemap XML, accessible responsive navigation, printable styles, and custom 404 page.

---

## Project Structure

```text
/
├── public/
│   ├── favicon.svg               # Custom typographical monogram favicon
│   ├── robots.txt                # Search engine crawlers routing
│   └── cv/
│       └── tanishk_tiwari_cv.pdf # Downloadable PDF Curriculum Vitae
├── src/
│   ├── components/
│   │   ├── Navbar.astro          # Responsive header with Lora TT Monogram
│   │   ├── Footer.astro          # Minimal footer with RSS, sitemap, contacts
│   │   ├── PublicationCard.astro # Interactive cards with abstract slide-outs
│   │   ├── ProjectCard.astro     # Project visual tracks (LLM vs. Indus)
│   │   └── TalkCard.astro        # Presentations and invited lectures listings
│   ├── content/                  # Structured Content Collections data
│   │   ├── config.ts             # Schemas for publications, projects, talks
│   │   ├── publications/         # JSON entries for publications
│   │   ├── projects/             # JSON entries for projects
│   │   └── talks/                # JSON entries for invited talks
│   ├── layouts/
│   │   └── Layout.astro          # SEO metadata, Open Graph tags, viewport layout
│   ├── pages/
│   │   ├── index.astro           # Editorial homepage
│   │   ├── research.astro        # Deep-dive on Track A, B, and QML
│   │   ├── publications.astro     # Listings of all academic papers
│   │   ├── projects.astro        # Project portfolio with live client-side filters
│   │   ├── talks.astro           # Timeline of workshop/library talks
│   │   ├── about.astro           # Academic biography
│   │   ├── cv.astro              # Printable HTML CV sheet
│   │   ├── contact.astro         # Direct correspondence contact options
│   │   ├── 404.astro             # Custom 404 "Sequence Not Found" page
│   │   └── rss.xml.ts            # RSS feed generation endpoint
│   └── styles/
│       └── global.css            # Google Font imports & Tailwind CSS 4 variables
└── package.json
```

---

## Local Development & Setup

### 1. Install Dependencies
Run the installation command from the project root:
```sh
npm install
```

### 2. Start the Development Server
Starts the hot-reloading development server at `http://localhost:4321`:
```sh
npm run dev
```

### 3. Build for Production
Compiles the static assets and builds the production bundle in the `./dist/` directory:
```sh
npm run build
```

---

## 📝 Modifying Content (Publications, Projects, Talks)

The website uses **Astro Content Collections** to keep data separated from page layout logic.

- **To add a Publication:** Create a new JSON file in `src/content/publications/` following the schema defined in `src/content/config.ts`.
- **To add a Project:** Create a new JSON file in `src/content/projects/`.
- **To add a Presentation:** Create a new JSON file in `src/content/talks/`.

Validation schemas will throw compilation errors if links are malformed or required keys are missing, ensuring high-quality production releases.

---

## 🌐 Deployment

The site is pre-configured with `@astrojs/sitemap`. Set your custom domain in `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://your-custom-domain.com',
  // ...
});
```

The output build in `./dist/` is pure static HTML, CSS, and lightweight JS, making it perfectly suited for:
- **GitHub Pages**
- **Vercel / Netlify**
- **Cloudflare Pages**
