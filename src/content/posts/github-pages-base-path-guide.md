---
title: "Fix Astro Base-Path 404s on GitHub Pages and Custom Domains"
description: "Diagnose broken assets and routes caused by project subpaths, root custom domains, and stale Astro base configuration."
pubDate: 2026-06-07
modDate: 2026-06-11
author: "Jun Yang"
category: "Deployment"
tags: ["Astro", "Base Path", "404"]
draft: false
seoTitle: "Fix Astro Base-Path 404s on GitHub Pages and Custom Domains"
seoDescription: "Diagnose broken assets and routes caused by project subpaths, root custom domains, and stale Astro base configuration."
---

The same build cannot assume both /repository-name/ and / when every asset and internal link is prefixed at compile time. Binding a root custom domain exposes that mismatch immediately.

## The implementation boundary

For a project Pages URL, use the repository subpath consistently. For a root custom domain or Cloudflare Pages domain, build with base '/'. Rebuild and inspect generated href and src attributes.

For Fix Astro Base-Path 404s on GitHub Pages and Custom Domains, the useful boundary is the smallest complete result that the repository can demonstrate. Supporting details stay in this guide when separating them would create a weaker URL, and claims stop where the saved output stops.

## Reproducible example

Run the following command from the repository root with the supported Node runtime:

```bash
grep -nE 'site:|base:' astro.config.mjs
```

The evidence directory for github-pages-base-path-guide stores this exact command and its result beside the image. An editor can therefore rerun grep after a dependency, route, or hosting change and compare like with like.

<figure class="evidence-figure"><img src="/images/evidence/github-pages-base-path-guide/evidence.png" alt="Recorded command and result for Fix Astro Base-Path 404s on GitHub Pages and Custom Domains"><figcaption>Repository evidence captured on 2026-06-11. The upper block records the command or inspected configuration; the lower block records the actual local result.</figcaption></figure>

## What happened in this site

This project previously served under a second-level repository path and then moved to a root domain. The corrected configuration now emits root-relative routes and the production build no longer nests the site.

The github-pages-base-path-guide case records what happened in AstroSEO.io rather than presenting one repository as a universal benchmark. Apply this deployment check to your own URL model and compare the observed output before adopting the recommendation.

## A reliable working sequence

1. Define what a successful Fix Astro Base-Path 404s on GitHub Pages and Custom Domains result should contain.
2. Run `grep -nE 'site:|base:' astro.config.mjs` against the current production build.
3. Save only the output relevant to github-pages-base-path-guide and redact private account data.
4. Compare the observed deployment artifact with the intended inventory.
5. Make one focused correction, rebuild, and repeat this github-pages-base-path-guide check.

Using the same github-pages-base-path-guide measurement before and after a change separates diagnosis from guesswork and leaves a defensible rollback point.

## Verification

Repeat the displayed command for Fix Astro Base-Path 404s on GitHub Pages and Custom Domains, confirm its exit status, and compare the current output with the saved result. Open the generated route afterward and inspect its canonical URL, contextual links, evidence image, and narrow-screen layout. For this topic, a green build is not sufficient when the inspected artifact is wrong.

Continue with [the next implementation guide](/blog/deploy-astro-to-github-pages/) and [the related verification guide](/blog/astro-blog-seo-tutorial/).

## Limitations and recommendation

Do not patch individual links after a base-path failure. Fix the single configuration source, rebuild everything, and clear assumptions from deployment settings.

For github-pages-base-path-guide, automate the objective check shown above and keep the final usefulness decision with an editor. Static generation makes this deployment output inspectable, but it cannot decide whether the explanation is distinct enough to deserve its URL.
