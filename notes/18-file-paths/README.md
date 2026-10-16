# HTML File Paths

These notes are written as a practical study guide. Read the short explanation, try the example in your own file, and then change the code to see how the browser responds.

## Topics in this chapter

- [Relative paths](#relative-paths)
- [Absolute paths](#absolute-paths)
- [Parent and child folders](#parent-and-child-folders)
- [Paths for images, CSS and JavaScript](#paths-for-images-css-and-javascript)

---

## Relative paths

Relative paths are resolved from the current file's location. They are useful for resources inside the same project.

```html
<img src="images/logo.png" alt="Site logo">
```

## Absolute paths

An absolute URL identifies a resource with its full URL. Use trusted sources and check that external resources are allowed to be embedded.

```html
<a href="https://example.com/guide">Read the online guide</a>
```

## Parent and child folders

The .. segment moves to a parent folder, while a child folder name moves down into that folder. Always test paths after moving files.

```html
<link rel="stylesheet" href="../css/style.css">
```

## Paths for images, CSS and JavaScript

Use a predictable folder layout so resource paths remain understandable. Check browser developer tools if an image, stylesheet, or script fails to load.

```html
<link rel="stylesheet" href="assets/css/style.css">
<script src="assets/js/app.js" defer></script>
<img src="assets/images/logo.png" alt="Site logo">
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

