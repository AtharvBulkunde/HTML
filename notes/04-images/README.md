# Images

These notes are written as a practical study guide. Read the short explanation, try the example in your own file, and then change the code to see how the browser responds.

## Topics in this chapter

- [Image tag](#image-tag)
- [Image attributes](#image-attributes)
- [Image maps](#image-maps)
- [Responsive images](#responsive-images)
- [Picture element](#picture-element)

---

## Image tag

Use img to embed an image. The src identifies the file and alt gives an appropriate text alternative. Decorative images should usually use alt="".

```html
<img src="images/campus.jpg" alt="Students walking across campus">
```

## Image attributes

Common image attributes include src, alt, width, height, loading, and decoding. Supplying dimensions helps the browser reserve space before the image loads.

```html
<img src="photo.jpg" alt="Mountain trail" width="800" height="500" loading="lazy">
```

## Image maps

An image map uses map and area elements to define clickable regions. For complex interfaces, ordinary links or buttons are often easier to use and make accessible.

```html
<img src="plan.png" alt="Campus plan" usemap="#campus">
<map name="campus"><area shape="rect" coords="0,0,100,80" href="library.html" alt="Library"></map>
```

## Responsive images

CSS can let images scale with their container. A common rule is max-width: 100% and height: auto so images do not overflow small screens.

```html
<img class="responsive" src="photo.jpg" alt="A sample landscape">
<style>.responsive { max-width: 100%; height: auto; }</style>
```

## Picture element

The picture element lets the browser choose between image sources, for example different formats or crops for different viewport widths. Keep an img fallback inside it.

```html
<picture>
  <source srcset="photo.avif" type="image/avif">
  <source srcset="photo.webp" type="image/webp">
  <img src="photo.jpg" alt="Sunlight over the hills">
</picture>
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

