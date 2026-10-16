# Text & Content

These notes are written as a practical study guide. Read the short explanation, try the example in your own file, and then change the code to see how the browser responds.

## Topics in this chapter

- [Headings](#headings)
- [Paragraphs](#paragraphs)
- [Line breaks (br)](#line-breaks-br)
- [Horizontal rules (hr)](#horizontal-rules-hr)
- [Text formatting](#text-formatting)
- [Bold (b)](#bold-b)
- [Strong (strong)](#strong-strong)
- [Italic (i)](#italic-i)
- [Emphasis (em)](#emphasis-em)
- [Mark](#mark)
- [Small](#small)
- [Delete (del)](#delete-del)
- [Insert (ins)](#insert-ins)
- [Subscript (sub)](#subscript-sub)
- [Superscript (sup)](#superscript-sup)

---

## Headings

Use h1 through h6 to show the hierarchy of a page. Choose heading levels for structure, not just for their default size.

```html
<h1>Page title</h1>
<h2>First section</h2>
<h3>Section detail</h3>
```

## Paragraphs

The p element groups a paragraph of text. Browsers add default spacing around paragraphs, but CSS should be used when you need to adjust that spacing.

```html
<p>HTML gives content a useful structure.</p>
<p>Keep separate ideas in separate paragraphs.</p>
```

## Line breaks (br)

The br element creates a line break inside text where the line break is meaningful, such as an address or a poem. Do not use repeated br elements to create page spacing.

```html
<p>12 College Road<br>Nashik, Maharashtra</p>
```

## Horizontal rules (hr)

The hr element represents a thematic break between parts of the content. Its appearance can be changed with CSS.

```html
<p>First topic</p>
<hr>
<p>Next topic</p>
```

## Text formatting

HTML offers elements that communicate meaning as well as elements that change how text is presented. Prefer semantic elements when the meaning matters.

```html
<p><strong>Important:</strong> save your work.</p>
<p><em>Remember</em> to test the page.</p>
```

## Bold (b)

The b element draws attention to text without adding extra importance. If the content is important, strong is usually a better choice.

```html
<p>Try the <b>new feature</b> today.</p>
```

## Strong (strong)

The strong element marks content with strong importance, seriousness, or urgency. Browsers commonly display it in bold by default.

```html
<p><strong>Warning:</strong> back up your files first.</p>
```

## Italic (i)

The i element marks text in an alternate voice or mood, such as a technical term or a phrase from another language. It is not a general-purpose styling tool.

```html
<p>The word <i>déjà vu</i> comes from French.</p>
```

## Emphasis (em)

The em element adds stress emphasis. Nested em elements can change which part of a sentence receives emphasis.

```html
<p>I <em>really</em> wanted to learn HTML.</p>
```

## Mark

The mark element highlights text relevant to the current context, much like a search result highlight.

```html
<p>Search result: learn <mark>HTML forms</mark> next.</p>
```

## Small

The small element represents side comments or fine print, such as copyright information or terms.

```html
<p>Free starter guide <small>Terms apply.</small></p>
```

## Delete (del)

The del element represents content that has been removed from a document. Use ins for added replacement text when that history matters.

```html
<p>Price: <del>₹500</del> ₹350</p>
```

## Insert (ins)

The ins element represents content added to a document. The datetime attribute can record when the change was made.

```html
<p>Meeting: <del>Monday</del> <ins datetime="2026-10-16">Friday</ins></p>
```

## Subscript (sub)

The sub element lowers text for notation such as chemical formulas. Use it only when the subscript is part of the meaning.

```html
<p>Water is H<sub>2</sub>O.</p>
```

## Superscript (sup)

The sup element raises text, often for exponents or footnote markers.

```html
<p>Two squared is 2<sup>2</sup> = 4.</p>
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

