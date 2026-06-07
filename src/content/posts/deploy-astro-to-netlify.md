---
title: "Deploy Astro to Netlify for a Static SEO Site"
description: "Publish an Astro content site to Netlify with a production build, clean routes, and deploy previews."
pubDate: 2026-06-07
modDate: 2026-06-07
author: "Jun Yang"
category: "Deployment"
tags: ["Astro", "Netlify", "Deployment"]
draft: false
seoTitle: "Deploy Astro to Netlify"
seoDescription: "Deploy an Astro static SEO site to Netlify."
---

## Why this matters

Netlify is a practical hosting option for static content sites that need simple
builds, previews, and custom domains.

## Setup

Connect the Git repository, set the build command to `npm run build`, and set
the publish directory to `dist`.

## Implementation notes

Confirm the production URL before checking canonical tags. If the site uses a
custom domain, update the Astro site configuration to match it.

## Final checklist

- Build command is configured
- `dist` is the publish directory
- Production URL matches metadata
