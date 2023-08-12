'use client';
import { Icons } from "@/components/icons"
import { buttonVariants } from "@/components/ui/button"
import { useState } from "react";


const Footer: React.FC = () => {
  const [activeLink, setActiveLink] = useState("");

  return (
    <footer className="bg-secondary dark:bg-muted">
        <div className="mw-300 container mx-auto py-4">
        <div className="flex flex-col items-center justify-center md:flex-row md:gap-4">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-2 md:gap-2 lg:grid-cols-4">
          <div className="">
            <h3 className="text-m mb-2 scroll-m-20 font-semibold tracking-tight">
                company
            </h3>
            <ul>
              <li>
              <a
                    className={`cursor-pointer text-sm hover:text-primary ${
                      activeLink === "about" ? "text-primary" : ""
                    }`}
                    href="/"
                    onClick={() => setActiveLink("about")}
                  >
                    about us
              </a>

              </li>
              <li>
              <a
                    className={`cursor-pointer text-sm hover:text-primary ${
                      activeLink === "how-it-works" ? "text-green-500" : ""
                    }`}
                    href="/basics"
                    onClick={() => setActiveLink("how-it-works")}
                  >
                    how it works
                  </a>
              </li>
              <li>
              <a
                    className={`cursor-pointer text-sm hover:text-primary ${
                      activeLink === "contact" ? "text-green-500" : ""
                    }`}
                    href="/contact"
                    onClick={() => setActiveLink("contact")}
                  >
                    contact us
                  </a>
              </li>
              <li>
              <a
                    className={`cursor-pointer text-sm hover:text-primary ${
                      activeLink === "training" ? "text-green-500" : ""
                    }`}
                    href="https://training.iforge.shef.ac.uk/"
                    onClick={() => setActiveLink("training")}
                  >
                    training
                  </a>
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-m mb-2 scroll-m-20 font-semibold tracking-tight">
                business
            </h3>
            <ul>
              <li>
              <a
                    className={`cursor-pointer text-sm hover:text-primary ${
                      activeLink === "pricing" ? "text-green-500" : ""
                    }`}
                    href="/"
                    onClick={() => setActiveLink("pricing")}
                  >
                    pricing
                  </a>
              </li>
              <li>
              <a
                    className={`cursor-pointer text-sm hover:text-primary ${
                      activeLink === "agreement" ? "text-green-500" : ""
                    }`}
                    href="/"
                    onClick={() => setActiveLink("agreement")}
                  >
                    agreement
                  </a>
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-m mb-2 scroll-m-20 font-semibold tracking-tight">
                policies
            </h3>
            <ul>
              <li>
              <a
                className={`cursor-pointer text-sm hover:text-primary ${
                activeLink === "terms-of-service" ? "text-green-500" : ""
                }`}
                href="/"
                onClick={() => setActiveLink("terms-of-service")}
                >
                terms of service
              </a>
              </li>
              <li>
              <a
                className={`cursor-pointer text-sm hover:text-primary ${
                activeLink === "privacy" ? "text-green-500" : ""
                 }`}
                href="/"
                onClick={() => setActiveLink("privacy")}
                >
              privacy
              </a>
              </li>
              <li>
      <a
        className={`cursor-pointer text-sm hover:text-primary ${
          activeLink === "cookie-settings" ? "text-green-500" : ""
        }`}
        href="/"
        onClick={() => setActiveLink("cookie-settings")}
      >
        cookie settings
      </a>
    </li>
    <li>
      <a
        className={`cursor-pointer text-sm hover:text-primary ${
          activeLink === "guidelines" ? "text-green-500" : ""
        }`}
        href="/"
        onClick={() => setActiveLink("guidelines")}
      >
        guidelines
      </a>
    </li>
    <li>
      <a
        className={`cursor-pointer text-sm hover:text-primary ${
          activeLink === "acknowledgements" ? "text-green-500" : ""
        }`}
        href="/"
        onClick={() => setActiveLink("acknowledgements")}
      >
        acknowledgements
      </a>
    </li>
    <li>
      <a
        className={`cursor-pointer text-sm hover:text-primary ${
          activeLink === "licenses" ? "text-green-500" : ""
        }`}
        href="/"
        onClick={() => setActiveLink("licenses")}
      >
        licenses
      </a>
      </li>

            </ul>
          </div>
          <div className="">
            <h3 className="text-m mb-2 scroll-m-20 font-semibold tracking-tight">
                find us
            </h3>
            <ul>
            <li>
      <a
        className={`cursor-pointer text-sm hover:text-primary ${
          activeLink === "instagram" ? "text-green-500" : ""
        }`}
        href="/"
        onClick={() => setActiveLink("instagram")}
      >
        instagram
      </a>
    </li>
    <li>
      <a
        className={`cursor-pointer text-sm hover:text-primary ${
          activeLink === "twitter" ? "text-green-500" : ""
        }`}
        href="/"
        onClick={() => setActiveLink("twitter")}
      >
        twitter
      </a>
    </li>
    <li>
      <a
        className={`cursor-pointer text-sm hover:text-primary ${
          activeLink === "facebook" ? "text-green-500" : ""
        }`}
        href="/"
        onClick={() => setActiveLink("facebook")}
      >
        facebook
      </a>
    </li>
    <li>
      <a
        className={`cursor-pointer text-sm hover:text-primary ${
          activeLink === "youtube" ? "text-green-500" : ""
        }`}
        href="/"
        onClick={() => setActiveLink("youtube")}
      >
        youtube
      </a>
    </li>
            </ul>
          </div>
        </div>
            </div>

        <div className="container mx-auto mt-8 flex items-center justify-between py-4 gap-6 ">
            <div className = "">
                <h3 className="mb-2 scroll-m-20 text-xl font-bold tracking-tight">iForge</h3>
            </div>
            <div className="text-white hidden md:flex">
            <p className="text-sm text-muted-foreground ">iForge © {new Date().getFullYear()} All rights reserved. </p>
            </div>
            <div className="flex space-x-4">
            <a href="/">
            <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </a>
            <a href="/" className="">
            <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <Icons.twitter className="h-5 w-5 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </a>
            <a href="/" className="text-white hover:text-green-500">

            </a>
            <a href="/" className="text-white hover:text-green-500">

            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
