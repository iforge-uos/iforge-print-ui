"use client"

import { useRef } from "react"
import Link from "next/link"
import figlet from "figlet"
// @ts-ignore
import standard from "figlet/importable-fonts/Standard.js"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

figlet.parseFont("Standard", standard)

export default function IndexPage() {
  const isFirstLoad = useRef(true)

  if (isFirstLoad.current) {
    isFirstLoad.current = false
    figlet.text(
      "iForge",
      {
        font: "Standard",
      },
      function (err, data) {
        console.log(data)
      }
    )
    console.log(siteConfig.easterEggs.message)
  }

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          iForge <br className="hidden sm:inline" />
          3D Printing Service
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          Go away nerds
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.main_site}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({ size: "lg" })}
        >
          Submit your print?!?!?
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          GitHub
        </Link>
      </div>
    </section>
  )
}
