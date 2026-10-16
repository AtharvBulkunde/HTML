# HTML Classes & IDs

These notes are written as a practical study guide. Read the short explanation, try the example in your own file, and then change the code to see how the browser responds.

## Topics in this chapter

- [Class attribute](#class-attribute)
- [ID attribute](#id-attribute)
- [Multiple classes](#multiple-classes)
- [Unique IDs](#unique-ids)
- [CSS and JavaScript selectors](#css-and-javascript-selectors)

---

## Class attribute

A class labels one or more elements for CSS or JavaScript. Multiple elements can share the same class.

```html
<p class="notice">Remember to save your work.</p>
```

## ID attribute

An id identifies one element in a document and is useful for fragment links and scripts. Keep each id unique on the page.

```html
<section id="about"><h2>About</h2></section>
```

## Multiple classes

Separate multiple class names with spaces. Each class can contribute a different style or behaviour.

```html
<button class="button button-primary">Continue</button>
```

## Unique IDs

Do not reuse an id on the same page. Duplicate IDs can make links and scripts behave unpredictably.

```html
<label for="email">Email</label><input id="email" type="email">
```

## CSS and JavaScript selectors

CSS can select classes with a dot and IDs with a hash. JavaScript can select elements using querySelector and related methods.

```javascript
const card = document.querySelector('.card');
const heading = document.querySelector('#page-title');
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

