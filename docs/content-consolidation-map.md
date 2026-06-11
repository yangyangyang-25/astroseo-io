# AstroSEO.io Content Consolidation Map

Date: 2026-06-11

This document is the source of truth for reducing the original 50 posts to 22 retained, substantially rewritten articles. Every merged URL redirects directly to its final retained article, and every absorbed intent is implemented as a named section in that article.

| Existing slug | Decision | Retained target | Reason | Absorbed sections | Redirect |
| --- | --- | --- | --- | --- | --- |
| astro-author-box-template | merge | astro-blog-post-template | Narrow component intent belongs in the complete article template. | Author identity and author-box component | yes |
| astro-blog-post-template | retain | astro-blog-post-template | Primary template pillar. | Author box, callouts, tables, resources, editorial checks, descriptions | no |
| astro-blog-seo-tutorial | retain | astro-blog-seo-tutorial | Primary technical SEO pillar. | Breadcrumbs and URL slug rules | no |
| astro-breadcrumb-seo | merge | astro-blog-seo-tutorial | Breadcrumbs are part of the complete on-page implementation. | Accessible breadcrumbs and structured data | yes |
| astro-callout-component-template | merge | astro-blog-post-template | Callouts are one reusable article block. | Callout component and usage limits | yes |
| astro-category-page-template | merge | astro-dynamic-routes-content | Categories share the archive routing implementation. | Category route implementation | yes |
| astro-comparison-table-template | merge | astro-blog-post-template | Comparison tables are one article-pattern component. | Responsive comparison table | yes |
| astro-component-layouts-for-blogs | merge | astro-static-site-architecture | Component boundaries are an architecture concern. | Layout and component responsibility map | yes |
| astro-content-collections-tutorial | retain | astro-content-collections-tutorial | Focused implementation tutorial. | Frontmatter validation and schema failures | no |
| astro-dynamic-routes-content | retain | astro-dynamic-routes-content | Focused archive routing tutorial. | Category, tag, and pagination routes | no |
| astro-faq-section-template | merge | schema-markup-static-blog | FAQ presentation and structured data must be explained together. | FAQ component and FAQPage schema limitations | yes |
| astro-frontmatter-best-practices | merge | astro-content-collections-tutorial | Frontmatter rules are enforced by collection schemas. | Required fields, validation, and migration | yes |
| astro-image-optimization-guide | retain | astro-image-optimization-guide | Focused tutorial with measurable output. | Dimensions, formats, and byte comparison | no |
| astro-internal-linking-guide | retain | astro-internal-linking-guide | Focused linking and discovery tutorial. | Related-post selection and orphan detection | no |
| astro-mdx-seo-workflow | retain | astro-mdx-seo-workflow | Focused rich-content tutorial. | Safe MDX components and rendering verification | no |
| astro-pagination-seo | merge | astro-dynamic-routes-content | Pagination is part of archive route design. | Pagination URLs, canonicals, and discovery | yes |
| astro-related-posts-tutorial | merge | astro-internal-linking-guide | Related posts are an internal-link mechanism. | Scoring, limits, and verification | yes |
| astro-resource-list-template | merge | astro-blog-post-template | Resource lists are one reusable article block. | Curated resource-list component | yes |
| astro-seo-checklist | merge | technical-seo-audit-static-site | The checklist overlaps the full audit workflow. | Pre-launch audit sequence | yes |
| astro-sitemap-rss-canonical | retain | astro-sitemap-rss-canonical | Focused discovery and canonicalization tutorial. | Sitemap, RSS, and canonical guidance | no |
| astro-static-site-architecture | retain | astro-static-site-architecture | Astro Guides pillar. | Layout boundaries and hosting decision table | no |
| astro-table-of-contents-blog | retain | astro-table-of-contents-blog | Focused accessible navigation tutorial. | Heading extraction and depth limits | no |
| astro-tag-page-template | merge | astro-dynamic-routes-content | Tags share the archive routing implementation. | Tag routes and empty-tag prevention | yes |
| canonical-url-guide-astro | merge | astro-sitemap-rss-canonical | Canonicals must be tested with sitemap and feed output. | Canonical generation and duplicate prevention | yes |
| ci-build-checks-astro | retain | ci-build-checks-astro | Focused deployment safety tutorial. | Passing and controlled failing checks | no |
| cloudflare-pages-preview-deployments | merge | deploy-astro-to-cloudflare-pages | Preview deployments belong in the Cloudflare workflow. | Preview URLs and branch verification | yes |
| content-calendar-for-seo-blog | merge | keyword-to-article-brief-workflow | Scheduling should follow intent and evidence readiness. | Brief queue and publishing cadence | yes |
| content-cluster-planning-static-site | merge | keyword-to-article-brief-workflow | Cluster planning is an article-brief input. | Cluster map and link targets | yes |
| crawl-budget-static-sites | merge | indexability-checklist-content-sites | Crawl prioritization belongs in indexability diagnosis. | Crawl priorities for a small static site | yes |
| custom-domain-github-pages-astro | merge | deploy-astro-to-github-pages | Custom domains are a deployment step. | DNS, CNAME, HTTPS, and canonical checks | yes |
| deploy-astro-to-cloudflare-pages | retain | deploy-astro-to-cloudflare-pages | Deployment pillar and production platform. | Preview deployments and cache behavior | no |
| deploy-astro-to-github-pages | retain | deploy-astro-to-github-pages | Focused alternative deployment tutorial. | Actions workflow and custom domain setup | no |
| deploy-astro-to-netlify | merge | astro-static-site-architecture | A separate shallow provider guide adds little value. | Hosting trade-off row and migration notes | yes |
| deploy-astro-to-vercel | merge | astro-static-site-architecture | A separate shallow provider guide adds little value. | Hosting trade-off row and migration notes | yes |
| editorial-checklist-astro-blog | merge | astro-blog-post-template | Editorial checks belong beside the template. | Pre-publication editorial checks | yes |
| evergreen-content-seo-plan | merge | update-old-posts-seo-workflow | Evergreen planning is part of refresh prioritization. | Decay signals and evergreen candidates | yes |
| github-pages-base-path-guide | retain | github-pages-base-path-guide | High-value troubleshooting guide. | Project subpath versus root-domain correction | no |
| indexability-checklist-content-sites | retain | indexability-checklist-content-sites | Focused indexability diagnostic. | Robots, sitemap, canonical, status, crawl priorities | no |
| keyword-to-article-brief-workflow | retain | keyword-to-article-brief-workflow | Focused editorial tutorial. | Calendar and cluster planning | no |
| markdown-link-audit-workflow | retain | markdown-link-audit-workflow | Focused reproducible quality control. | Broken and passing audit reports | no |
| meta-description-template-seo | merge | astro-blog-post-template | Descriptions are part of complete post metadata. | Description writing and uniqueness checks | yes |
| obsidian-frontmatter-template | merge | obsidian-to-astro-workflow | The template is an input to the publishing workflow. | Note properties and export mapping | yes |
| obsidian-to-astro-workflow | retain | obsidian-to-astro-workflow | Content Workflow pillar. | Frontmatter template and build verification | no |
| rollback-static-site-deployments | retain | rollback-static-site-deployments | Focused failure-recovery guide. | Commit rollback and deployment verification | no |
| schema-markup-static-blog | retain | schema-markup-static-blog | Focused structured-data tutorial. | FAQ schema limits and local extraction | no |
| seo-content-refresh-schedule | merge | update-old-posts-seo-workflow | Cadence is one step in the update workflow. | Review intervals and change triggers | yes |
| seo-friendly-url-slugs | merge | astro-blog-seo-tutorial | Slug policy belongs in the complete SEO guide. | Stable slug rules and redirect decisions | yes |
| static-site-cache-control | merge | deploy-astro-to-cloudflare-pages | Cache headers depend on the deployed platform. | Asset versus HTML caching | yes |
| technical-seo-audit-static-site | retain | technical-seo-audit-static-site | Full technical diagnostic guide. | Launch checklist and saved audit report | no |
| update-old-posts-seo-workflow | retain | update-old-posts-seo-workflow | Focused maintenance diagnostic. | Evergreen planning and refresh cadence | no |
