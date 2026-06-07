---
title: "Add a Table of Contents to Long Astro Blog Posts"
description: "Improve scanning and internal navigation with a generated table of contents for long-form Astro content."
pubDate: 2026-06-01
modDate: 2026-06-07
author: "Jun Yang"
category: "Templates"
tags: ["Astro", "Table of Contents", "UX"]
draft: false
seoTitle: "Astro Table of Contents Blog"
seoDescription: "Generate a table of contents for long Astro articles."
---

## Why this matters

Long-form posts often rank because they cover a topic deeply, but they are harder
to scan. A table of contents helps users jump to the exact section they need.

## Setup

Use the headings returned by `post.render()` and map them into anchor links.

```ts
const { Content, headings } = await post.render();
```

## Implementation notes

Keep the TOC secondary on mobile and sticky on larger screens. The next related
layer is covered in
[Astro Related Posts Tutorial](/astroseo-io/blog/astro-related-posts-tutorial/).

## Final checklist

- Heading anchors match TOC links
- TOC hides cleanly when no headings exist
- Mobile layout stays readable
