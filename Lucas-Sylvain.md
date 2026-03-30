---
outline: deep
---

# Code review TP1 Lucas sylvain
self review

This page demonstrates usage of some of the runtime APIs provided by VitePress.

The main `useData()` API can be used to access site, theme, and page data for the current page. It works in both `.md` and `.vue` files:

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

## Results

### Bonne pratiques
<pre>{{ theme }}</pre>

### Normes et standards
<pre>{{ page }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>
```

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

## Results

## Bonne pratiques
<pre>L'encapsulation des fonction n'est pas bien respecter</pre>

## Normes et standards
<pre>{{ page }}</pre>

## More

Check out the documentation for the [full list of runtime APIs](https://vitepress.dev/reference/runtime-api#usedata).
