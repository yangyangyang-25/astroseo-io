export const siteConfig = {
  name: "AstroSEO.io",
  title: "AstroSEO.io",
  description:
    "Practical Astro guides for SEO blogs, content workflows, and static deployment.",
  repo: "astroseo-io",
  author: "Jun Yang",
  repositoryUrl: "https://github.com/yangyangyang-25/astroseo-io",
  issuesUrl: "https://github.com/yangyangyang-25/astroseo-io/issues",
  lastPolicyUpdate: "2026-06-11",
  basePath: "",
  siteUrl: "https://astroseo-io.pages.dev",
  nav: [
    { href: "/", label: "Home" },
    { href: "/blog/", label: "Blog" },
    { href: "/about/", label: "About" }
  ],
  categories: [
    "Astro Guides",
    "SEO Fundamentals",
    "Deployment",
    "Content Workflow",
    "Templates"
  ] as const
};

export type SiteCategory = (typeof siteConfig.categories)[number];
