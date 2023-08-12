"use client";
import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { useAuth } from "@/lib/auth-context";
import { buttonVariants } from "@/components/ui/button";
import { LoginForm } from "@/components/auth/login";
import { UserNav } from "@/components/auth/user-nav";
import { Icons } from "@/components/icons";
import { MainNav } from "@/components/main-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { NavItem } from "@/types/nav"

interface MainNavProps {
  items?: NavItem[]
}

export function SiteHeader({ items }: MainNavProps) {
  const { isLoggedIn } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <MainNav items={siteConfig.mainNav} />

        {/* mobile navbar */}
        <div className="md:hidden flex items-center">
          <button
            onClick={handleNav}
            className="p-2 rounded-md focus:outline-none focus:bg-gray-300"
          >
            <Icons.menu className="h-6 w-6" />
          </button>
        </div>

        {/* desktop navbar */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
            <div className={buttonVariants({ size: "sm", variant: "ghost" })}>
              <Icons.gitHub className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </div>
          </Link>
          <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
            <div className={buttonVariants({ size: "sm", variant: "ghost" })}>
              <Icons.twitter className="h-5 w-5 fill-current" />
              <span className="sr-only">Twitter</span>
            </div>
          </Link>
          <ThemeToggle />
          {isLoggedIn ? <UserNav /> : <LoginForm />}
        </div>

        {/* mobile menu */}
        <div
          className={`fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] dark:bg-neutral-700 p-10 ease-in duration-300 ${
            menuOpen ? "fixed right-[65%] top-0 p-10 ease-in duartion-300" : "fixed left-[-100%] top-0 p-10 ease-in duartion-300"
          }`}
        >
          <div className = "flex-col py-4">
            <ul>
              <Link href="/">
                <li onClick = {() => setMenuOpen(false)}
                className = "py-4 cursor-pointer"
                >
                  Home
                </li>
              </Link>
              <Link href="/printers">
                <li onClick = {() => setMenuOpen(false)}
                className = "py-4 cursor-pointer"
                >
                  Printers
                </li>
              </Link>
              <Link href="/prints">
                <li onClick = {() => setMenuOpen(false)}
                className = "py-4 cursor-pointer"
                >
                  Prints
                </li>
              </Link>

              <Link href="/users">
                <li onClick = {() => setMenuOpen(false)}
                className = "py-4 cursor-pointer"
                >
                  Users
                </li>
              </Link>

              <Link href="/profile">
                <li onClick = {() => setMenuOpen(false)}
                className = "py-4 cursor-pointer"
                >
                  Profile
                </li>
              </Link>
              <Link href="/admin">
                <li onClick = {() => setMenuOpen(false)}
                className = "py-4 cursor-pointer"
                >
                  Admin
                </li>
              </Link>
            </ul>
            <div className="flex gap-5">
        <Icons.twitter className="h-5 w-5 fill-current" />
        <Icons.gitHub className="h-5 w-5" />

        </div>
        </div>
        </div>
      </div>
    </header>
  );
}
