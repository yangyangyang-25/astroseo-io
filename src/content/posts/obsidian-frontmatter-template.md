---
title: "Obsidian Frontmatter Template for Astro Posts"
description: "Create an Obsidian note template that exports clean frontmatter for Astro content collections."
pubDate: 2026-06-07
modDate: 2026-06-07
author: "Jun Yang"
category: "Content Workflow"
tags: ["Obsidian", "Frontmatter", "Astro"]
draft: false
seoTitle: "Obsidian Frontmatter Template for Astro"
seoDescription: "Draft Astro posts in Obsidian with clean frontmatter templates."
---

## Why this matters

Obsidian is good for drafting, but static site builds need strict frontmatter.
A template keeps both workflows aligned.

## Setup

Create fields for title, description, publish date, category, tags, draft,
SEO title, and SEO description.

## Implementation notes

Use exact category names from the Astro config. A small mismatch can fail the
content schema or remove a post from the expected archive.

## Final checklist

- Template matches Astro schema
- Category values are fixed
- Draft state is explicit
