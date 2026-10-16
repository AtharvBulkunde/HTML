const express = require("express");
const path = require("path");

const app = express();
const port = Number(process.env.PORT) || 3000;

// Keep the API catalogue small and easy to update as new lessons are added.
const topics = [
  ["01-html-basics", "HTML Basics"],
  ["02-text-and-content", "Text & Content"],
  ["03-links", "Links"],
  ["04-images", "Images"],
  ["05-lists", "Lists"],
  ["06-tables", "Tables"],
  ["07-forms", "Forms"],
  ["08-multimedia", "Multimedia"],
  ["09-html-layout", "HTML Layout"],
  ["10-semantic-html", "Semantic HTML"],
  ["11-html-graphics", "HTML Graphics"],
  ["12-html-apis", "HTML APIs"],
  ["13-metadata", "Metadata"],
  ["14-html-entities", "HTML Entities"],
  ["15-html-scripting", "HTML Scripting"],
  ["16-computer-code-elements", "HTML Computer Code Elements"],
  ["17-html-quotations", "HTML Quotations"],
  ["18-file-paths", "HTML File Paths"],
  ["19-classes-and-ids", "HTML Classes & IDs"],
  ["20-html-colors", "HTML Colors"],
  ["21-html-comments", "HTML Comments"],
  ["22-accessibility", "HTML Accessibility"],
  ["23-best-practices", "HTML Best Practices"],
  ["24-responsive-design", "Responsive Design Basics"],
  ["25-html-seo-basics", "HTML SEO Basics"],
  ["26-html-templates", "HTML Templates"],
  ["27-data-attributes", "Custom Data Attributes"],
  ["28-dialog-element", "HTML Dialog Element"],
  ["29-progress-and-meter", "HTML Progress & Meter"]
].map(([slug, title], index) => ({
  number: index + 1,
  slug,
  title,
  notesPath: `/notes/${slug}/README.md`
}));

app.disable("x-powered-by");
app.use(express.json({ limit: "20kb" }));

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "html-learning-hub" });
});

app.get("/api/topics", (_req, res) => {
  res.json({ count: topics.length, topics });
});

app.get("/api/topics/:slug", (req, res) => {
  const topic = topics.find((item) => item.slug === req.params.slug);

  if (!topic) {
    return res.status(404).json({ error: "Topic not found" });
  }

  return res.json(topic);
});

// Serve the static website when running the project locally.
app.use(express.static(path.join(__dirname, "..")));

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(port, () => {
  console.log(`HTML Learning Hub is running at http://localhost:${port}`);
});
