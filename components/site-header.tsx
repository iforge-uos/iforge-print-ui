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
          className={`fixed right-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] dark:bg-neutral-700 p-10 ease-in-out duration-300 ${
          menuOpen ? "right-0 p-10" : "-right-[65%] p-10"
          }`}
          >
          <div className="flex w-full items-center justify-end gap-3">\
            <div className="">
              <ThemeToggle/>
            </div>
            <div onClick = {handleNav} className = "cursor-pointer">
              <Icons.x  size={25}/>
            </div>
            
          </div>
          <div className = "flex-col py-4 ">
            <ul>
              <Link href="/">
                <li onClick = {() => setMenuOpen(false)}
                className = "py-4 cursor-pointer font-proto-mono"
                >
                  Home
                </li>
              </Link>
              <Link href="/printers">
                <li onClick = {() => setMenuOpen(false)}
                className = "py-4 cursor-pointer font-proto-mono"
                >
                  Printers
                </li>
              </Link>
              <Link href="/prints">
                <li onClick = {() => setMenuOpen(false)}
                className = "py-4 cursor-pointer font-proto-mono"
                >
                  Prints
                </li>
              </Link>

              <Link href="/users">
                <li onClick = {() => setMenuOpen(false)}
                className = "py-4 cursor-pointer font-proto-mono"
                >
                  Users
                </li>
              </Link>

              <Link href="/profile">
                <li onClick = {() => setMenuOpen(false)}
                className = "py-4 cursor-pointer font-proto-mono"
                >
                  Profile
                </li>
              </Link>
              <Link href="/admin">
                <li onClick = {() => setMenuOpen(false)}
                className = "py-4 cursor-pointer font-proto-mono"
                >
                  Admin
                </li>
              </Link>
              
            </ul>
            <div className="flex gap-5">
              <Icons.twitter className="h-5 w-5 fill-current" />
              <Icons.gitHub className="h-5 w-5" />
            </div>
            <span className="font-proto-mono font-bold sm:inline-block fixed bottom-5 ">
              IFORGE \
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
