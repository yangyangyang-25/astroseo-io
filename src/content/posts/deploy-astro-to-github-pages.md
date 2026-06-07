---
title: "Deploy Astro to GitHub Pages with GitHub Actions"
description: "Publish an Astro project to GitHub Pages using the official GitHub Actions workflow and project-site base paths."
pubDate: 2026-06-04
modDate: 2026-06-07
author: "Jun Yang"
category: "Deployment"
tags: ["Astro", "GitHub Pages", "GitHub Actions"]
draft: false
seoTitle: "Deploy Astro to GitHub Pages"
seoDescription: "How to publish Astro on GitHub Pages with GitHub Actions."
---

## Why this matters

GitHub Pages is an easy first production target for template sites, especially
when you want low-friction repo-based publishing.

## Setup

Set a project-site base path in `astro.config.mjs`.

```js
export default defineConfig({
  site: "https://yangjun.github.io",
  base: "/astroseo-io"
});
```

## Implementation notes

The workflow should build `dist/` and upload it as a Pages artifact. Once the
site is live, validate feed and sitemap using
[Astro Sitemap, RSS, and Canonical URLs](/blog/astro-sitemap-rss-canonical/).

## Final checklist

- `base` matches the repo name
- Pages source is GitHub Actions
- Workflow builds and deploys without manual steps
