export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "iForge Print Service",
  description: "Web Application to support iForge 3DPrinting",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Printers",
      href: "/printers",
    },
  ],
  links: {
    twitter: "https://twitter.com/iforgeuos",
    github: "https://github.com/iforge-uos",
    main_site: "https://iforgesheffield.org",
    internal_site: "https://iforge.sheffield.ac.uk",
  },
}
