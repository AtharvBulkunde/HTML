# HTML APIs

These notes are written as a practical study guide. Read the short explanation, try the example in your own file, and then change the code to see how the browser responds.

## Topics in this chapter

- [Drag and drop](#drag-and-drop)
- [Geolocation](#geolocation)
- [Web Storage](#web-storage)
- [Web Workers](#web-workers)
- [Server-sent events](#server-sent-events)

---

## Drag and drop

The Drag and Drop API lets users move items between targets. Keyboard alternatives should be provided because dragging is not convenient for everyone.

```html
<div draggable="true" id="item">Drag this item</div>
<div id="target">Drop target</div>
```

## Geolocation

Geolocation can request a user's location after permission. It generally requires a secure context, and the user can refuse access.

```html
<button id="locate" type="button">Find my location</button>
<p id="location" aria-live="polite"></p>
```

## Web Storage

localStorage and sessionStorage store strings in the browser. Do not store passwords, secrets, or sensitive personal information in them.

```javascript
localStorage.setItem('theme', 'dark');
const theme = localStorage.getItem('theme');
```

## Web Workers

Web Workers run JavaScript away from the main page thread for tasks that should not block the interface. A worker cannot directly manipulate the page DOM.

```javascript
const worker = new Worker('worker.js');
worker.postMessage({ count: 1000 });
worker.onmessage = event => console.log(event.data);
```

## Server-sent events

Server-sent events allow a server to stream updates to a browser through EventSource. The server must send the correct event-stream response format.

```javascript
const events = new EventSource('/events');
events.onmessage = event => console.log(event.data);
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

