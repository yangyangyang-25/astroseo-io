---
title: "Custom Domain Setup for Astro on GitHub Pages"
description: "Connect a custom domain to an Astro GitHub Pages site and keep canonical URLs consistent."
pubDate: 2026-06-07
modDate: 2026-06-07
author: "Jun Yang"
category: "Deployment"
tags: ["GitHub Pages", "Custom Domain", "Astro"]
draft: false
seoTitle: "Astro Custom Domain on GitHub Pages"
seoDescription: "Set up a custom domain for an Astro site hosted on GitHub Pages."
---

## Why this matters

When a site moves from a GitHub Pages URL to a custom domain, canonical URLs and
metadata need to move too.

## Setup

Configure the domain in GitHub Pages settings and add the required DNS records
with your domain provider.

## Implementation notes

After the domain is active, update the Astro site URL and rebuild. Check that
canonical tags, Open Graph URLs, RSS, and sitemap entries use the custom domain.

## Final checklist

- DNS points to GitHub Pages
- Site config uses the custom domain
- Sitemap URLs are updated
