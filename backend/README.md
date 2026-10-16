# Optional Backend API

The HTML Learning Hub can run as a static website on GitHub Pages. This optional backend is a small Node.js and Express learning example that exposes a JSON catalogue of the HTML chapters.

## Run locally

Install Node.js 18 or newer, then run:

```bash
cd backend
npm install
npm start
```

The API runs at `http://localhost:3000`.

## Routes

- `GET /api/health` returns a simple service status.
- `GET /api/topics` returns the chapter list.
- `GET /api/topics/:slug` returns one chapter or a 404 response.

This is a learning backend, not a production account or database system. It does not store submitted forms. Never put API keys, passwords, or private credentials in frontend files or commit them to GitHub.
