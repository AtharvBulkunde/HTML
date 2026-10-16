# HTML Scripting

These notes are written as a practical study guide. Read the short explanation, try the example in your own file, and then change the code to see how the browser responds.

## Topics in this chapter

- [Script tag](#script-tag)
- [Noscript tag](#noscript-tag)

---

## Script tag

Script loads or contains JavaScript. A deferred external script is a useful default for scripts that need the parsed document.

```html
<script src="app.js" defer></script>
```

## Noscript tag

Noscript provides fallback content when scripting is disabled or unsupported in the relevant context. It does not replace testing the site without JavaScript.

```html
<noscript><p>Some interactive features need JavaScript enabled.</p></noscript>
```

## Practice checklist

- [ ] Type at least one example yourself.
- [ ] Change a tag, attribute, or value and preview the result.
- [ ] Check the page at a narrow viewport if the topic affects layout.
- [ ] Check keyboard access and text alternatives when the topic involves interaction or media.
- [ ] Explain the main idea in your own words before moving on.

## Related reading

- [HTML Basics](../01-html-basics/README.md)
- [HTML Accessibility](../22-accessibility/README.md)
- [HTML Best Practices](../23-best-practices/README.md)

