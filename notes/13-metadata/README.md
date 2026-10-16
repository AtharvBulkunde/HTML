# Metadata

These notes are written as a practical study guide. Read the short explanation, try the example in your own file, and then change the code to see how the browser responds.

## Topics in this chapter

- [Meta tags](#meta-tags)
- [Character encoding](#character-encoding)
- [Viewport](#viewport)
- [Description](#description)
- [Keywords](#keywords)
- [Author](#author)
- [Favicon](#favicon)

---

## Meta tags

Meta elements describe information about a document, such as character encoding, viewport behaviour, and a short description.

```html
<meta charset="UTF-8">
<meta name="description" content="Beginner-friendly HTML notes.">
```

## Character encoding

UTF-8 supports a broad range of characters and is the usual choice for modern HTML pages. Put the charset declaration near the start of head.

```html
<meta charset="UTF-8">
```

## Viewport

The viewport meta tag helps mobile browsers use the device width when laying out a page. Avoid disabling zoom because it makes pages harder to use.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## Description

A meta description is a short summary that search engines may use in a result snippet. Write a natural, accurate summary for each important page.

```html
<meta name="description" content="Learn HTML elements, forms, tables, and accessibility with practical examples.">
```

## Keywords

The meta keywords tag is ignored by major search engines for ranking. Spend effort on useful page content, titles, and descriptions instead.

```html
<!-- Focus on helpful content; meta keywords are not needed. -->
```

## Author

A meta author tag can name the author, but it is optional and does not replace visible attribution when that matters.

```html
<meta name="author" content="Atharv Bulkunde">
```

## Favicon

A favicon is a small site icon shown in browser tabs and other browser UI. Keep the file path correct and provide a suitable image format.

```html
<link rel="icon" href="/favicon.ico">
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

