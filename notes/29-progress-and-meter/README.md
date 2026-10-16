# HTML Progress & Meter

These notes explain how to show task completion and measurements in HTML. The two elements look similar, but they mean different things: progress shows work being completed, while meter shows a value within a known range.

## Topics

- Progress element
- Meter element
- Value and max
- Labels and accessible meaning

## Progress element

Use progress for the completion state of a task, such as an upload or a course. Give it a value and max when the amount completed is known.

```html
<label for="course-progress">Course completion</label>
<progress id="course-progress" value="4" max="10">4 of 10</progress>
<p>4 of 10 lessons completed.</p>
```

## Meter element

Meter describes a measurement within a defined range, such as storage usage or a score. It is not intended to show the progress of a task.

```html
<label for="storage">Storage used</label>
<meter id="storage" min="0" max="100" value="72">72%</meter>
```

## Value and max

The value is the current amount and max is the upper bound. Choose values that match the real task or measurement and keep a visible label nearby.

## Accessible meaning

Associate the control with a label and provide context in nearby text. If JavaScript updates the value, update any related status text as well.

## Practice

1. Change progress from 4 of 10 to 8 of 10.
2. Make a meter that represents 25% storage usage.
3. Check that the label makes the meaning clear without relying on color alone.

## Related notes

- [HTML Basics](../01-html-basics/README.md)
- [HTML Accessibility](../22-accessibility/README.md)
- [HTML Best Practices](../23-best-practices/README.md)
