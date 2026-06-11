---
title: "Audit Markdown Links Before an Astro Deployment"
description: "Check local targets, retained slugs, redirected URLs, and external-link intent without waiting for users or crawlers to find broken paths."
pubDate: 2026-06-07
modDate: 2026-06-11
author: "Jun Yang"
category: "Content Workflow"
tags: ["Markdown", "Link Audit", "Quality Control"]
draft: false
seoTitle: "Audit Markdown Links Before an Astro Deployment"
seoDescription: "Check local targets, retained slugs, redirected URLs, and external-link intent without waiting for users or crawlers to find broken paths."
---

Link checking becomes harder after consolidation because an old URL may still return something while sending readers through an avoidable redirect.

## The implementation boundary

Extract internal Markdown links, normalize trailing slashes, compare targets with retained files, and flag links that point to redirect sources. Check external links separately because network failures need different handling.

For Audit Markdown Links Before an Astro Deployment, the useful boundary is the smallest complete result that the repository can demonstrate. Supporting details stay in this guide when separating them would create a weaker URL, and claims stop where the saved output stops.

## Reproducible example

Run the following command from the repository root with the supported Node runtime:

```bash
grep -RohE '](/blog/[^)]+)' src/content/posts | sort -u
```

The evidence directory for markdown-link-audit-workflow stores this exact command and its result beside the image. An editor can therefore rerun grep after a dependency, route, or hosting change and compare like with like.

<figure class="evidence-figure"><img src="/images/evidence/markdown-link-audit-workflow/evidence.png" alt="Recorded command and result for Audit Markdown Links Before an Astro Deployment"><figcaption>Repository evidence captured on 2026-06-11. The upper block records the command or inspected configuration; the lower block records the actual local result.</figcaption></figure>

## What happened in this site

A controlled missing target is included in the unit fixture, while the production audit uses the retained slug set. The useful result is not just zero 404s; it is zero internal redirect hops.

The markdown-link-audit-workflow case records what happened in AstroSEO.io rather than presenting one repository as a universal benchmark. Apply this content workflow check to your own URL model and compare the observed output before adopting the recommendation.

## A reliable working sequence

1. Define what a successful Audit Markdown Links Before an Astro Deployment result should contain.
2. Run `grep -RohE '](/blog/[^)]+)' src/content/posts | sort -u` against the current production build.
3. Save only the output relevant to markdown-link-audit-workflow and redact private account data.
4. Compare the observed content workflow artifact with the intended inventory.
5. Make one focused correction, rebuild, and repeat this markdown-link-audit-workflow check.

Using the same markdown-link-audit-workflow measurement before and after a change separates diagnosis from guesswork and leaves a defensible rollback point.

## Verification

Repeat the displayed command for Audit Markdown Links Before an Astro Deployment, confirm its exit status, and compare the current output with the saved result. Open the generated route afterward and inspect its canonical URL, contextual links, evidence image, and narrow-screen layout. For this topic, a green build is not sufficient when the inspected artifact is wrong.

Continue with [the next implementation guide](/blog/technical-seo-audit-static-site/) and [the related verification guide](/blog/astro-internal-linking-guide/).

## Limitations and recommendation

Run local internal checks on every build. Schedule external checks less aggressively and review failures manually before deleting a useful citation.

For markdown-link-audit-workflow, automate the objective check shown above and keep the final usefulness decision with an editor. Static generation makes this content workflow output inspectable, but it cannot decide whether the explanation is distinct enough to deserve its URL.
