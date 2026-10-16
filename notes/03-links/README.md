# Links

These notes are written as a practical study guide. Read the short explanation, try the example in your own file, and then change the code to see how the browser responds.

## Topics in this chapter

- [Hyperlinks](#hyperlinks)
- [Absolute and relative URLs](#absolute-and-relative-urls)
- [Email links](#email-links)
- [Bookmark links](#bookmark-links)
- [Download links](#download-links)

---

## Hyperlinks

The a element creates a link when it has an href. Use link text that makes sense out of context, rather than writing 'click here' everywhere.

```html
<a href="about.html">Read about this project</a>
```

## Absolute and relative URLs

An absolute URL includes the full address. A relative URL is resolved from the current document's location and is useful for links inside a project.

```html
<a href="https://developer.mozilla.org/">MDN Web Docs</a>
<a href="./contact.html">Contact</a>
```

## Email links

A mailto URL opens the visitor's configured email application. It does not send mail directly from the webpage.

```html
<a href="mailto:hello@example.com">Email the team</a>
```

## Bookmark links

Give a section a unique id and link to it with a fragment such as #contact. IDs should be unique within a page.

```html
<a href="#contact">Jump to contact</a>
<section id="contact"><h2>Contact</h2></section>
```

## Download links

The download attribute suggests that a linked same-origin resource should be downloaded. Browser behaviour can vary depending on the server and file type.

```html
<a href="files/guide.pdf" download>Download the guide</a>
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

