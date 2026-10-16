# HTML Entities

These notes are written as a practical study guide. Read the short explanation, try the example in your own file, and then change the code to see how the browser responds.

## Topics in this chapter

- [Character entities](#character-entities)
- [Symbols](#symbols)
- [Emojis](#emojis)

---

## Character entities

Character references display reserved characters or characters that are difficult to type directly. For example, use &amp; for an ampersand when writing HTML markup.

```html
<p>Tom &amp; Jerry</p>
<p>Use &lt;code&gt; for code examples.</p>
```

## Symbols

HTML supports named and numeric character references for symbols. Use readable text and make sure the chosen symbol is appropriate for the content.

```html
<p>Copyright &copy; 2026</p>
<p>Arrow: &rarr;</p>
```

## Emojis

Emoji can usually be included directly in UTF-8 HTML. Use them sparingly when they add meaning, and do not rely on an emoji alone to communicate important instructions.

```html
<meta charset="UTF-8">
<p>Learning HTML 💻</p>
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

