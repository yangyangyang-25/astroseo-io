---
title: "Add Breadcrumb SEO to an Astro Blog"
description: "Use breadcrumb navigation to improve crawl paths and make article hierarchies clearer for readers and search engines."
pubDate: 2026-06-02
modDate: 2026-06-07
author: "Jun Yang"
category: "SEO Fundamentals"
tags: ["Astro", "Breadcrumbs", "Technical SEO"]
draft: false
seoTitle: "Astro Breadcrumb SEO"
seoDescription: "Add breadcrumb navigation to an Astro content site."
---

## Why this matters

Breadcrumbs improve orientation for humans and provide clearer structure for
search engines, especially when your site has categories and topic clusters.

## Setup

Start with a simple UI breadcrumb component before adding structured data.

```astro
<nav aria-label="Breadcrumb">
  <a href="/">Home</a> / <a href="/blog/">Blog</a>
</nav>
```

## Implementation notes

Use the post category to build the last ancestor link. This pattern works well
with [Astro Table of Contents for Long Posts](/astroseo-io/blog/astro-table-of-contents-blog/).

## Final checklist

- Home and archive are always linked
- Category slug stays stable
- Breadcrumbs render on every post page
