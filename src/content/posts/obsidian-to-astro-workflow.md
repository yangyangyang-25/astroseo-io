---
title: "Create an Obsidian to Astro Workflow for SEO Publishing"
description: "Use Obsidian for drafting and Astro for publishing without losing metadata discipline or deployment consistency."
pubDate: 2026-05-30
modDate: 2026-06-07
author: "Jun Yang"
category: "Content Workflow"
tags: ["Obsidian", "Astro", "Publishing Workflow"]
draft: false
seoTitle: "Obsidian to Astro Workflow"
seoDescription: "A practical workflow from Obsidian drafts to Astro publishing."
---

## Why this matters

Writers want a flexible editor. Publishers need consistent metadata, filenames,
and deployment rules. Obsidian plus Astro can satisfy both if the boundaries are
clear.

## Setup

Draft in Obsidian, then move or sync validated Markdown into `src/content/posts/`.

```text
Obsidian draft -> frontmatter check -> repo content folder -> build -> deploy
```

## Implementation notes

Do not let free-form note structure leak into production content. Use the content
schema from
[Astro Content Collections Tutorial](/blog/astro-content-collections-tutorial/).

## Final checklist

- Shared frontmatter template
- Consistent slugs before publish
- Deployment only from repository content
