# AdGenie Landing Page

AdGenie Landing Page is a full-stack web application showcasing **AdGenie AI**, a tool for creating high performing ads for Shopify stores.  It features a React front‑end powered by Vite and Tailwind CSS with an Express backend that exposes simple API routes and a blog system.

## Features
- **AI-Powered Ad Generation** – generate compelling copy and creatives for multiple platforms using advanced AI.
- **Multilingual Support** – create ads in over 30 languages.
- **Smart Tone Customization** – match your brand voice with several tone presets.
- **Campaign Planning** – get tailored strategies to boost advertising performance.
- **One-Click Shopify Integration** – sync products and launch ads directly from Shopify.
- **Customizable Templates** – choose from professional designs to match your brand.

These features are defined in [`client/src/lib/constants.ts`](client/src/lib/constants.ts) and drive the UI content.

## Development Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
   This runs the Express server with Vite in middleware mode for hot reloading.
   The app is available at `http://localhost:5000`.

## Building & Deploying to GitHub Pages
The project can be built and deployed to GitHub Pages using the provided scripts in `package.json`:

```json
"scripts": {
  "dev": "NODE_ENV=development tsx server/index.ts",
  "build": "vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist",
  "deploy": "gh-pages -d dist"
}
```

1. Ensure the `homepage` field in `package.json` points to your repository URL:
   ```json
   "homepage": "https://<username>.github.io/AdGenieLandingPage/"
   ```
2. Build the project:
   ```bash
   npm run build
   ```
3. Deploy the contents of the `dist` directory to GitHub Pages:
   ```bash
   npm run deploy
   ```
After deployment, your site will be available at the URL specified in the `homepage` field.
The Vite configuration automatically uses `/AdGenieLandingPage/` as the base
path when building for production, while local development runs from the root
path.
