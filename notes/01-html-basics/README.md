# HTML Basics

These notes are written as a practical study guide. Read the short explanation, try the example in your own file, and then change the code to see how the browser responds.

## Topics in this chapter

- [Introduction to HTML](#introduction-to-html)
- [HTML versions and editors](#html-versions-and-editors)
- [HTML document structure](#html-document-structure)
- [HTML elements](#html-elements)
- [HTML attributes](#html-attributes)

---

## Introduction to HTML

HTML (HyperText Markup Language) describes the meaning and structure of web content. A browser reads the markup and builds a document tree; CSS controls presentation and JavaScript can add behaviour.

```html
<h1>Welcome</h1>
<p>This is my first web page.</p>
```

## HTML versions and editors

HTML has evolved over time, and modern pages generally use the HTML Living Standard. You can write HTML in VS Code, another text editor, or a simple editor. Save files with the .html extension.

```html
<!doctype html>
<html lang="en">
  <head><title>My page</title></head>
  <body><p>Written in a text editor.</p></body>
</html>
```

## HTML document structure

A typical document starts with a doctype, then an html element containing head and body. The head stores page information; the body contains content visitors see.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Starter page</title>
</head>
<body>
  <h1>Hello</h1>
</body>
</html>
```

## HTML elements

An element usually has an opening tag, content, and a closing tag. Some elements, such as img and br, are void elements and do not wrap content.

```html
<p>A paragraph is an element.</p>
<img src="photo.jpg" alt="A sample photo">
```

## HTML attributes

Attributes add information to an element and are written in the opening tag. Use quoted values and choose attributes that make sense for that element.

```html
<a href="about.html" title="Read about us">About</a>
<img src="cat.jpg" alt="A cat sitting by a window">
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

