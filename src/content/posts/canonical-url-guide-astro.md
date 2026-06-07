---
title: "Canonical URL Guide for Astro Content Sites"
description: "Set canonical URLs in Astro so project-site paths, blog posts, and archive pages point to the right address."
pubDate: 2026-06-07
modDate: 2026-06-07
author: "Jun Yang"
category: "SEO Fundamentals"
tags: ["Canonical URL", "Astro", "Technical SEO"]
draft: false
seoTitle: "Canonical URLs in Astro"
seoDescription: "Configure canonical URLs for Astro posts and archive pages."
---

## Why this matters

Canonical URLs tell search engines which page address should be treated as the
preferred version.

## Setup

Build canonical URLs from the production site URL plus the current pathname.
Include the GitHub Pages repository path when publishing as a project site.

## Implementation notes

Do not hard-code one canonical for every page. Each post and archive needs its
own canonical URL that matches the deployed route.

## Final checklist

- Canonicals include the base path
- Each page has a unique canonical
- Local and production paths are not mixed
