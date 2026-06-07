export const siteConfig = {
  name: "AstroSEO.io",
  title: "AstroSEO.io",
  description:
    "Practical Astro guides for SEO blogs, content workflows, and static deployment.",
  repo: "astroseo-io",
  basePath: "/astroseo-io",
  siteUrl: "https://yangyangyang-25.github.io",
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
