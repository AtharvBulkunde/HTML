# HTML Learning Hub

A beginner-friendly HTML learning repository with a responsive landing page, organised chapter notes, code examples, and an optional Express API.

<p align="center">
  <img src="https://img.icons8.com/?size=100&id=20909&format=png&color=E34F26" width="72" alt="HTML5 logo">
</p>

<p align="center"><strong>Learn the web · Practise the basics · Build better pages</strong></p>

<p align="center">
  <a href="https://github.com/AtharvBulkunde/HTML/blob/main/index.html">Website source</a> ·
  <a href="https://github.com/AtharvBulkunde/HTML/tree/main/notes">All notes</a> ·
  <a href="https://github.com/AtharvBulkunde/HTML/tree/main/backend">Optional backend</a>
</p>

## What's inside

- **Responsive frontend:** the landing page includes a curriculum overview and learning links.
- **29 topic chapters:** notes for HTML basics, text, links, images, lists, tables, forms, multimedia, layout, semantics, APIs, metadata, accessibility, SEO, and more.
- **Code examples:** small snippets that are easy to type, test, and adapt.
- **Optional backend:** a simple Express API that returns the topic catalogue as JSON.
- **Beginner workflow:** no build step is needed to open the static website.

## Folder structure

```text
HTML/
├── index.html
├── README.md
├── notes/
│   ├── README.md
│   ├── 01-html-basics/
│   ├── 02-text-and-content/
│   ├── ...
│   └── 29-progress-and-meter/
└── backend/
    ├── README.md
    ├── server.js
    ├── package.json
    └── .gitignore
```

Open the [complete chapter index](notes/README.md) to choose a topic.

## Open the website locally

1. Download or clone this repository.
2. Open `index.html` in a browser, or use VS Code Live Server.
3. Select a topic and follow its notes.

```bash
git clone https://github.com/AtharvBulkunde/HTML.git
cd HTML
```

## Run the optional backend

Install Node.js 18 or newer, then run:

```bash
cd backend
npm install
npm start
```

The API starts at `http://localhost:3000`.

- `GET /api/health`
- `GET /api/topics`
- `GET /api/topics/01-html-basics`

The backend is a learning example. It does not implement user accounts, a database, or form submission storage. Do not commit passwords, API keys, or other secrets.

## Learning approach

HTML provides structure, CSS controls visual presentation, and JavaScript adds browser-side behaviour. A server-side backend is only needed when a project requires server processing, database access, or similar functionality.

## Author

**Atharv Bulkunde** · [GitHub profile](https://github.com/AtharvBulkunde)
