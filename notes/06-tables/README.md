# Tables

These notes are written as a practical study guide. Read the short explanation, try the example in your own file, and then change the code to see how the browser responds.

## Topics in this chapter

- [Table structure](#table-structure)
- [Rows and columns](#rows-and-columns)
- [Table headers](#table-headers)
- [Captions](#captions)
- [Colspan](#colspan)
- [Rowspan](#rowspan)
- [Table styling basics](#table-styling-basics)

---

## Table structure

Use table for data that naturally belongs in rows and columns, not for page layout. Add thead and tbody when they make the table easier to understand.

```html
<table><thead><tr><th scope="col">Topic</th><th scope="col">Status</th></tr></thead><tbody><tr><td>HTML</td><td>Learning</td></tr></tbody></table>
```

## Rows and columns

A tr creates a table row. Cells are usually th for headings or td for data.

```html
<table><tr><td>Row 1, column 1</td><td>Row 1, column 2</td></tr></table>
```

## Table headers

Use th to identify column or row headings. The scope attribute can help communicate the relationship to assistive technologies.

```html
<th scope="col">Student</th><th scope="col">Score</th>
```

## Captions

A caption gives a table a visible title and should be the first child of table.

```html
<table><caption>Weekly study plan</caption><tr><th scope="col">Day</th></tr></table>
```

## Colspan

The colspan attribute makes a cell span multiple columns. Ensure the row structure remains consistent.

```html
<tr><th colspan="2">Student details</th></tr>
```

## Rowspan

The rowspan attribute makes a cell cover multiple rows. Use it only when the data relationship is clear.

```html
<tr><th rowspan="2">Monday</th><td>HTML</td></tr><tr><td>CSS</td></tr>
```

## Table styling basics

Use CSS for borders, spacing, alignment, and horizontal scrolling on narrow screens. Keep enough contrast to read the data.

```html
<style>table{border-collapse:collapse;width:100%} th,td{padding:.65rem;border:1px solid #aaa;text-align:left}</style>
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

