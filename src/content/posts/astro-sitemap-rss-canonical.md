---
title: "Astro Sitemap, RSS, and Canonical URLs for Content Sites"
description: "Set up the three technical SEO outputs every Astro content site should generate before launch."
pubDate: 2026-06-03
modDate: 2026-06-07
author: "Jun Yang"
category: "SEO Fundamentals"
tags: ["Astro", "Sitemap", "RSS"]
draft: false
seoTitle: "Astro Sitemap RSS Canonical Guide"
seoDescription: "Generate sitemap, RSS, and canonical URLs in Astro."
---

## Why this matters

Search engines need discovery files and canonical signals to understand your
content structure. Readers and aggregators still benefit from RSS.

## Setup

Astro can generate feeds and sitemaps during build, which keeps the site fully
static.

```ts
integrations: [mdx(), sitemap()]
```

## Implementation notes

Robots and canonical URLs should agree with the same site URL and base path.
Pair this with the breadcrumb structure in
[Astro Breadcrumb SEO](/blog/astro-breadcrumb-seo/).

## Final checklist

- Sitemap exists after build
- RSS includes recent posts
- Canonical URLs match the production hostname
