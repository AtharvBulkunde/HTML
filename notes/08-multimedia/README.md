# Multimedia

These notes are written as a practical study guide. Read the short explanation, try the example in your own file, and then change the code to see how the browser responds.

## Topics in this chapter

- [Audio](#audio)
- [Video](#video)
- [Embed](#embed)
- [Object](#object)
- [Iframe](#iframe)

---

## Audio

Audio embeds sound. Provide controls and, when practical, captions or a text alternative to the information in the recording.

```html
<audio controls src="audio/lesson.mp3">Your browser cannot play this audio.</audio>
```

## Video

Video can provide controls, dimensions, and captions through track. Avoid autoplay with sound and provide a useful fallback.

```html
<video controls width="640" poster="cover.jpg"><source src="lesson.mp4" type="video/mp4"><track kind="captions" src="captions.vtt" srclang="en" label="English"><p>Your browser cannot play this video.</p></video>
```

## Embed

Embed can display external content such as certain media files. Check the source and make sure visitors know what the embedded content is.

```html
<embed src="diagram.pdf" type="application/pdf" width="600" height="400">
```

## Object

Object can embed an external resource and can include fallback content if the resource cannot be displayed.

```html
<object data="guide.pdf" type="application/pdf" width="600" height="400"><a href="guide.pdf">Open the guide</a></object>
```

## Iframe

An iframe embeds another browsing context. Give it a title, use a trusted source, and limit permissions when embedding external content.

```html
<iframe src="https://example.com" title="Example page" loading="lazy" sandbox></iframe>
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

