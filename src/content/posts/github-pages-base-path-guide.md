---
title: "GitHub Pages Base Path Guide for Astro Sites"
description: "Avoid broken links on GitHub Pages project sites by handling Astro base paths consistently."
pubDate: 2026-06-07
modDate: 2026-06-07
author: "Jun Yang"
category: "Deployment"
tags: ["GitHub Pages", "Base Path", "Astro"]
draft: false
seoTitle: "GitHub Pages Base Path for Astro"
seoDescription: "Configure Astro base paths correctly for GitHub Pages project sites."
---

## Why this matters

GitHub Pages project sites live under a repository path. Links that work at the
domain root can break when the base path is missing or malformed.

## Setup

Set the Astro base path to the repository name and generate internal links from
a helper that normalizes trailing slashes.

## Implementation notes

Check built HTML for paths that accidentally concatenate strings, such as a base
path joined directly to `blog/` without a slash.

## Final checklist

- Base path matches repository
- Internal links include the base path
- Built HTML has no malformed routes
