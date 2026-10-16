# Lists

These notes are written as a practical study guide. Read the short explanation, try the example in your own file, and then change the code to see how the browser responds.

## Topics in this chapter

- [Ordered lists](#ordered-lists)
- [Unordered lists](#unordered-lists)
- [Description lists](#description-lists)
- [Nested lists](#nested-lists)

---

## Ordered lists

Use ol when order matters, such as steps in a process. Each item belongs in an li element.

```html
<ol><li>Open the editor</li><li>Write HTML</li><li>Preview the page</li></ol>
```

## Unordered lists

Use ul for a group of related items where the sequence is not important.

```html
<ul><li>HTML</li><li>CSS</li><li>JavaScript</li></ul>
```

## Description lists

Use dl with dt terms and dd descriptions for glossaries or name-and-value groups.

```html
<dl><dt>HTML</dt><dd>Markup for web content.</dd></dl>
```

## Nested lists

A nested list belongs inside an li element when a list item has its own sub-items. Keep the indentation consistent.

```html
<ul><li>Frontend<ul><li>HTML</li><li>CSS</li></ul></li></ul>
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

