---
title: "Astro Content Collections Tutorial for SEO Blogs"
description: "Learn how to model and validate blog content in Astro Content Collections for a scalable SEO publishing workflow."
pubDate: 2026-06-07
modDate: 2026-06-07
author: "Jun Yang"
category: "Astro Guides"
tags: ["Astro", "SEO", "Content Collections"]
draft: false
seoTitle: "Astro Content Collections Tutorial"
seoDescription: "A practical guide to Astro Content Collections for SEO-focused blogs."
---

## Why this matters

Content Collections turn Markdown files into structured content with validation.
That matters for SEO sites because a broken frontmatter field can quietly break
archive pages, metadata, or feeds.

## Setup

Put posts inside `src/content/posts/` and validate them with Zod in
`src/content/config.ts`.

```ts
const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date()
  })
});
```

## Implementation notes

Use categories and tags in the schema from day one. That will make category pages
and tag pages trivial to generate later. Pair this with the archive structure in
[Astro Blog SEO Tutorial](/blog/astro-blog-seo-tutorial/).

## Final checklist

- Validate all required frontmatter
- Keep category names consistent
- Use content collections before writing custom loaders
