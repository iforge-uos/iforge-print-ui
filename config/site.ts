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
    {
      title: "Prints",
      href: "/printjobs",
    },
    {
      title: "Users",
      href: "/users",
    },
    {
      title: "Profile",
      href: "/profile",
    },
    {
      title: "Admin",
      href: "/admin",
    },
  ],
  links: {
    twitter: "https://twitter.com/iforgeuos",
    github: "https://github.com/iforge-uos",
    main_site: "https://iforgesheffield.org",
    internal_site: "https://iforge.sheffield.ac.uk",
  },
  easterEggs: {
    message: "Check back later for more info!",
  },
  api: {
    url: "http://127.0.0.1:5000/api/v1",
    refresh_endpoint: "/auth/refresh",
    login_endpoint: "/auth/login",
  },
}
