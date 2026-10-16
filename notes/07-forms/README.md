# Forms

These notes are written as a practical study guide. Read the short explanation, try the example in your own file, and then change the code to see how the browser responds.

## Topics in this chapter

- [Form element](#form-element)
- [Input types](#input-types)
- [Labels](#labels)
- [Buttons](#buttons)
- [Select menu](#select-menu)
- [Option groups](#option-groups)
- [Textarea](#textarea)
- [Fieldset](#fieldset)
- [Legend](#legend)
- [Datalist](#datalist)
- [Output](#output)
- [Form validation](#form-validation)

---

## Form element

A form groups controls that collect input. The action is the destination and method describes how the browser submits the data; server-side code must validate it again.

```html
<form action="/contact" method="post"><label for="name">Name</label><input id="name" name="name" required><button type="submit">Send</button></form>
```

## Input types

Choose an input type that matches the data, such as email, password, number, date, checkbox, or radio. The type provides useful browser behaviour but does not replace server validation.

```html
<label for="email">Email</label><input id="email" name="email" type="email" required>
```

## Labels

A label makes a form control easier to identify. Connect a label's for value to the control's id.

```html
<label for="city">City</label><input id="city" name="city">
```

## Buttons

Use button for actions. Set type explicitly so a button inside a form does not submit by accident.

```html
<button type="button">Show details</button>
<button type="submit">Submit form</button>
```

## Select menu

A select element lets the visitor choose from a list of options. Add a label and a meaningful name.

```html
<label for="course">Course</label><select id="course" name="course"><option value="html">HTML</option><option value="css">CSS</option></select>
```

## Option groups

optgroup groups related options under a label.

```html
<select name="course"><optgroup label="Frontend"><option>HTML</option><option>CSS</option></optgroup></select>
```

## Textarea

Textarea accepts multi-line text. Use rows to set a starting height and give it a label.

```html
<label for="message">Message</label><textarea id="message" name="message" rows="4"></textarea>
```

## Fieldset

Fieldset groups related controls, especially in longer forms.

```html
<fieldset><legend>Contact preference</legend><label><input type="radio" name="contact" value="email"> Email</label></fieldset>
```

## Legend

Legend supplies the caption for a fieldset and helps explain what its grouped controls are about.

```html
<fieldset><legend>Choose your level</legend><label><input type="radio" name="level" value="beginner"> Beginner</label></fieldset>
```

## Datalist

Datalist provides suggestions for an input while still allowing visitors to type a value that is not listed.

```html
<label for="browser">Browser</label><input id="browser" list="browsers"><datalist id="browsers"><option value="Firefox"><option value="Chrome"></datalist>
```

## Output

Output represents the result of a calculation or user action. JavaScript is commonly used to update it.

```html
<output id="total" for="quantity price">Total appears here</output>
```

## Form validation

Attributes such as required, min, max, minlength, and type provide helpful client-side checks. Validate all submitted values on the server too.

```html
<input type="email" name="email" required>
<input type="number" name="age" min="1" max="120">
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

