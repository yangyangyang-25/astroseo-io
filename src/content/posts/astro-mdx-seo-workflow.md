---
title: "Use MDX in Astro Without Hiding the Content"
description: "Add interactive or reusable MDX elements while preserving readable HTML, metadata, and a reliable static build."
pubDate: 2026-06-07
modDate: 2026-06-11
author: "Jun Yang"
category: "Astro Guides"
tags: ["Astro", "MDX", "Components"]
draft: false
seoTitle: "Use MDX in Astro Without Hiding the Content"
seoDescription: "Add interactive or reusable MDX elements while preserving readable HTML, metadata, and a reliable static build."
---

MDX is valuable when a tutorial genuinely needs a component. Using it for ordinary prose increases the number of moving parts without improving the answer.

## The implementation boundary

Register the MDX integration, keep metadata in the same collection schema, import only presentation components, and inspect the generated HTML. The core explanation must remain available without client JavaScript.

For Use MDX in Astro Without Hiding the Content, the useful boundary is the smallest complete result that the repository can demonstrate. Supporting details stay in this guide when separating them would create a weaker URL, and claims stop where the saved output stops.

## Reproducible example

Run the following command from the repository root with the supported Node runtime:

```bash
grep -n 'mdx' astro.config.mjs package.json
```

The evidence directory for astro-mdx-seo-workflow stores this exact command and its result beside the image. An editor can therefore rerun grep after a dependency, route, or hosting change and compare like with like.

<figure class="evidence-figure"><img src="/images/evidence/astro-mdx-seo-workflow/evidence.png" alt="Recorded command and result for Use MDX in Astro Without Hiding the Content"><figcaption>Repository evidence captured on 2026-06-11. The upper block records the command or inspected configuration; the lower block records the actual local result.</figcaption></figure>

## What happened in this site

This project enables MDX at the framework level but keeps ordinary articles in Markdown. That split makes rich examples possible while leaving the default authoring path simple.

The astro-mdx-seo-workflow case records what happened in AstroSEO.io rather than presenting one repository as a universal benchmark. Apply this astro guides check to your own URL model and compare the observed output before adopting the recommendation.

## A reliable working sequence

1. Define what a successful Use MDX in Astro Without Hiding the Content result should contain.
2. Run `grep -n 'mdx' astro.config.mjs package.json` against the current production build.
3. Save only the output relevant to astro-mdx-seo-workflow and redact private account data.
4. Compare the observed astro guides artifact with the intended inventory.
5. Make one focused correction, rebuild, and repeat this astro-mdx-seo-workflow check.

Using the same astro-mdx-seo-workflow measurement before and after a change separates diagnosis from guesswork and leaves a defensible rollback point.

## Verification

Repeat the displayed command for Use MDX in Astro Without Hiding the Content, confirm its exit status, and compare the current output with the saved result. Open the generated route afterward and inspect its canonical URL, contextual links, evidence image, and narrow-screen layout. For this topic, a green build is not sufficient when the inspected artifact is wrong.

Continue with [the next implementation guide](/blog/astro-content-collections-tutorial/) and [the related verification guide](/blog/astro-blog-post-template/).

## Limitations and recommendation

Use MDX selectively for demos, diagrams, or reusable callouts. If a component merely styles text, prefer semantic HTML and CSS.

For astro-mdx-seo-workflow, automate the objective check shown above and keep the final usefulness decision with an editor. Static generation makes this astro guides output inspectable, but it cannot decide whether the explanation is distinct enough to deserve its URL.
