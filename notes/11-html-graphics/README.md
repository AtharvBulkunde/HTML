# HTML Graphics

These notes are written as a practical study guide. Read the short explanation, try the example in your own file, and then change the code to see how the browser responds.

## Topics in this chapter

- [Canvas](#canvas)
- [SVG](#svg)

---

## Canvas

Canvas provides a drawing surface controlled by JavaScript. Use fallback text and provide equivalent information for important graphics.

```html
<canvas id="chart" width="320" height="160">A chart showing monthly results.</canvas>
```

## SVG

SVG describes scalable vector graphics in markup. It is useful for icons, diagrams, and shapes that stay sharp at different sizes.

```html
<svg viewBox="0 0 120 60" role="img" aria-label="Blue circle"><circle cx="30" cy="30" r="20" fill="steelblue"/></svg>
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

