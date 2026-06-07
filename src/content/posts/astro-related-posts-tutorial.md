---
title: "Build Related Posts in Astro Without a Database"
description: "Generate useful related posts for a static Astro site using categories and tag overlap instead of a server-side recommendation system."
pubDate: 2026-05-31
modDate: 2026-06-07
author: "Jun Yang"
category: "Templates"
tags: ["Astro", "Related Posts", "Content Strategy"]
draft: false
seoTitle: "Astro Related Posts Tutorial"
seoDescription: "How to build related posts in Astro for a static site."
---

## Why this matters

Related posts improve session depth and strengthen internal linking without
introducing a client-side search dependency.

## Setup

Score posts by shared category and tag overlap.

```ts
const categoryScore = post.data.category === current.data.category ? 2 : 0;
const tagScore = post.data.tags.filter((tag) => current.data.tags.includes(tag)).length;
```

## Implementation notes

Use deterministic rules so the build stays reproducible. This pairs naturally with
[Obsidian to Astro Workflow](/blog/obsidian-to-astro-workflow/).

## Final checklist

- Exclude the current post
- Prefer same-category matches
- Limit the related list to keep pages compact
