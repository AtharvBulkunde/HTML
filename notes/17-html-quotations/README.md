# HTML Quotations

These notes are written as a practical study guide. Read the short explanation, try the example in your own file, and then change the code to see how the browser responds.

## Topics in this chapter

- [Blockquote](#blockquote)
- [Quote (q)](#quote-q)
- [Abbreviation (abbr)](#abbreviation-abbr)
- [Address](#address)
- [Citation (cite)](#citation-cite)
- [Bidirectional override (bdo)](#bidirectional-override-bdo)

---

## Blockquote

Blockquote represents a longer quotation from another source. Include attribution near the quote when useful.

```html
<blockquote cite="https://example.com/source"><p>Learning improves with practice.</p></blockquote>
```

## Quote (q)

Q represents a short inline quotation. Browsers usually add quotation marks automatically.

```html
<p>The guide says <q>keep practising</q>.</p>
```

## Abbreviation (abbr)

Abbr marks an abbreviation or acronym. A title attribute may explain it, but visible explanation is often better for important terms.

```html
<p><abbr title="HyperText Markup Language">HTML</abbr> structures web pages.</p>
```

## Address

Address represents contact information for the nearest article or page. It is not meant for every ordinary postal address in body text.

```html
<address>Contact the author at <a href="mailto:hello@example.com">hello@example.com</a></address>
```

## Citation (cite)

Cite identifies the title of a cited creative work, such as a book, article, or film. It is not a general styling element for a person's name.

```html
<p>Reference: <cite>Learning Web Design</cite>.</p>
```

## Bidirectional override (bdo)

Bdo overrides text direction. Use it only when a genuine direction override is required; incorrect direction changes can make text confusing.

```html
<p><bdo dir="rtl">This text runs right to left.</bdo></p>
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

