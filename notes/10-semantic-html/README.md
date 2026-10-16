# Semantic HTML

These notes are written as a practical study guide. Read the short explanation, try the example in your own file, and then change the code to see how the browser responds.

## Topics in this chapter

- [Semantic elements](#semantic-elements)
- [Non-semantic elements](#non-semantic-elements)
- [Figure](#figure)
- [Figcaption](#figcaption)
- [Details](#details)
- [Summary](#summary)
- [Time](#time)

---

## Semantic elements

Semantic elements describe the role of their content. Choose elements based on meaning rather than their default appearance.

```html
<main><article><h1>Lesson title</h1><p>Lesson content.</p></article></main>
```

## Non-semantic elements

Div and span do not describe a specific meaning. They are useful containers when a more specific element would be inaccurate.

```html
<div class="layout"><span class="label">Draft</span></div>
```

## Figure

Figure groups self-contained content such as an image, diagram, code sample, or illustration.

```html
<figure><img src="tree.png" alt="A simple tree diagram"><figcaption>How a page is structured.</figcaption></figure>
```

## Figcaption

Figcaption provides a caption for its parent figure and should be placed as the first or last child.

```html
<figure><img src="chart.png" alt="Bar chart of study hours"><figcaption>Study hours by day.</figcaption></figure>
```

## Details

Details creates a disclosure widget that visitors can open or close without custom JavaScript.

```html
<details><summary>Show answer</summary><p>The body contains the answer.</p></details>
```

## Summary

Summary labels the disclosure widget created by details. Keep its text descriptive so visitors know what will open.

```html
<details><summary>What is HTML?</summary><p>A markup language for web content.</p></details>
```

## Time

Time represents a date or time. The datetime attribute can provide a machine-readable value.

```html
<time datetime="2026-10-16">16 October 2026</time>
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

