# Rizal-Website

Rizal sa Japan is a travel-guide website about José Rizal's 45 days in Meiji Japan (28 February to 13 April 1888). It is built with Vite, React and TypeScript.

## Run the site

You need [Node.js](https://nodejs.org) 18 or newer. The project lives in the `rizal-japan` folder.

```bash
cd rizal-japan
npm install
npm run dev
```

Open http://localhost:5173/ in your browser.

## Build for production

```bash
cd rizal-japan
npm run build
npm run preview
```

The build runs a TypeScript check first, then writes the site to `rizal-japan/dist`.

## Where things are

- `rizal-japan/src/data/content.ts`: all facts, sources and image credits
- `rizal-japan/src/components/`: the page sections
- `rizal-japan/src/styles.css`: styling
- `rizal-japan/public/assets/`: images
- `rizal-japan/PLAN.md`: implementation plan and design notes
