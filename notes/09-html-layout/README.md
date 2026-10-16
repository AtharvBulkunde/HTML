# HTML Layout

These notes are written as a practical study guide. Read the short explanation, try the example in your own file, and then change the code to see how the browser responds.

## Topics in this chapter

- [Div](#div)
- [Span](#span)
- [Header](#header)
- [Nav](#nav)
- [Main](#main)
- [Section](#section)
- [Article](#article)
- [Aside](#aside)
- [Footer](#footer)

---

## Div

Div is a generic block container. Use it when no more meaningful semantic element fits, and use CSS classes for styling.

```html
<div class="card"><h2>Course</h2><p>HTML fundamentals</p></div>
```

## Span

Span is a generic inline container, useful when a small part of text needs a class or styling hook.

```html
<p>Status: <span class="status">In progress</span></p>
```

## Header

Header usually contains introductory content for a page or section, such as a title, logo, or introductory links.

```html
<header><a href="index.html">My site</a><p>Learning journal</p></header>
```

## Nav

Nav groups major navigation links. Not every collection of links needs a nav element; reserve it for navigation blocks.

```html
<nav aria-label="Main"><a href="index.html">Home</a><a href="lessons.html">Lessons</a></nav>
```

## Main

Main contains the dominant content of the page. A typical page has one visible main element.

```html
<main><h1>HTML lessons</h1><p>Choose a topic to begin.</p></main>
```

## Section

Section groups content around a theme and normally has a heading.

```html
<section><h2>Getting started</h2><p>Begin with document structure.</p></section>
```

## Article

Article is appropriate for self-contained content that could stand on its own, such as a post or lesson.

```html
<article><h2>Lesson 1</h2><p>HTML describes page structure.</p></article>
```

## Aside

Aside holds related but secondary information, such as a tip, glossary, or sidebar.

```html
<aside><h2>Tip</h2><p>Keep filenames simple.</p></aside>
```

## Footer

Footer often contains author details, related links, or copyright information for a page or section.

```html
<footer><p>Learning notes · Updated 2026</p></footer>
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

