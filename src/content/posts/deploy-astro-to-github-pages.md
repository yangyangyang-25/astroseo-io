---
title: "Deploy Astro to GitHub Pages with Actions and a Custom Domain"
description: "Configure an Astro production build, GitHub Pages workflow, custom domain, HTTPS, and post-deployment verification."
pubDate: 2026-06-07
modDate: 2026-06-11
author: "Jun Yang"
category: "Deployment"
tags: ["Astro", "GitHub Pages", "GitHub Actions"]
draft: false
seoTitle: "Deploy Astro to GitHub Pages with Actions and a Custom Domain"
seoDescription: "Configure an Astro production build, GitHub Pages workflow, custom domain, HTTPS, and post-deployment verification."
---

GitHub Pages is predictable when the repository, base path, workflow artifact, and public hostname describe the same URL model. Most failures come from mixing project-site and root-domain assumptions.

## The implementation boundary

Use checkout, a supported Node release, npm ci, the production build, configure-pages, artifact upload, and deploy-pages. For a custom domain, add DNS and verify the canonical host after HTTPS is active.

For Deploy Astro to GitHub Pages with Actions and a Custom Domain, the useful boundary is the smallest complete result that the repository can demonstrate. Supporting details stay in this guide when separating them would create a weaker URL, and claims stop where the saved output stops.

## Reproducible example

Run the following command from the repository root with the supported Node runtime:

```bash
sed -n '1,160p' .github/workflows/deploy.yml
```

The evidence directory for deploy-astro-to-github-pages stores this exact command and its result beside the image. An editor can therefore rerun sed after a dependency, route, or hosting change and compare like with like.

<figure class="evidence-figure"><img src="/images/evidence/deploy-astro-to-github-pages/evidence.png" alt="Recorded command and result for Deploy Astro to GitHub Pages with Actions and a Custom Domain"><figcaption>Repository evidence captured on 2026-06-11. The upper block records the command or inspected configuration; the lower block records the actual local result.</figcaption></figure>

## What happened in this site

The checked workflow builds dist with Node 20 and publishes that exact directory. The route evidence should be compared with the Pages URL rather than inferred from the green workflow badge.

The deploy-astro-to-github-pages case records what happened in AstroSEO.io rather than presenting one repository as a universal benchmark. Apply this deployment check to your own URL model and compare the observed output before adopting the recommendation.

## A reliable working sequence

1. Define what a successful Deploy Astro to GitHub Pages with Actions and a Custom Domain result should contain.
2. Run `sed -n '1,160p' .github/workflows/deploy.yml` against the current production build.
3. Save only the output relevant to deploy-astro-to-github-pages and redact private account data.
4. Compare the observed deployment artifact with the intended inventory.
5. Make one focused correction, rebuild, and repeat this deploy-astro-to-github-pages check.

Using the same deploy-astro-to-github-pages measurement before and after a change separates diagnosis from guesswork and leaves a defensible rollback point.

## Verification

Repeat the displayed command for Deploy Astro to GitHub Pages with Actions and a Custom Domain, confirm its exit status, and compare the current output with the saved result. Open the generated route afterward and inspect its canonical URL, contextual links, evidence image, and narrow-screen layout. For this topic, a green build is not sufficient when the inspected artifact is wrong.

Continue with [the next implementation guide](/blog/github-pages-base-path-guide/) and [the related verification guide](/blog/ci-build-checks-astro/).

## Limitations and recommendation

Use GitHub Pages when repository-native deployment is the main advantage. If advanced edge redirects or header control are requirements, Cloudflare Pages is usually the cleaner fit.

For deploy-astro-to-github-pages, automate the objective check shown above and keep the final usefulness decision with an editor. Static generation makes this deployment output inspectable, but it cannot decide whether the explanation is distinct enough to deserve its URL.
