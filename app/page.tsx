"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import figlet from "figlet"
// @ts-ignore
import standard from "figlet/importable-fonts/Standard.js"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import Seperator from "@/components/Seperator"

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
    <section className=" grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="container">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          iForge <br className="hidden sm:inline" />
          3D Printing Service
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl pb-2">
          Go away nerds
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href="/submit"
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
      </div>
     
      <div className="flex items-center py-20">
        <div className="w-1/3">
          {/* https://undraw.co/search */}
          {/* <Image src="" className="w-500 h-auto" alt="homepage image" placeholder="blur"></Image> */}
        </div>
        <div className=" pl-20">
          <div className="max-w-xl">
            <p className="text-sm font-extrabold text-muted-foreground">
              /
            </p>
            <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
              Quickly <span className="text-primary">create anything</span> with our 3D printers.
            </h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              sodales porttitor purus, nec elementum neque malesuada in.
              Suspendisse potenti. Proin non dolor eu leo fermentum elementum ac
              nec sem. Suspendisse vehicula sit amet urna ut cursus. consectetur
              adipiscing elit.
            </p>
            <div className="pt-5">
              <Link
                href="/submit"
                rel="noreferrer"
                className={buttonVariants({ size: "lg" })}
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Seperator />

      <div className="flex items-center py-20 container">
        
        <div className="pl-20">
          <div className="max-w-xl">
            <p className="text-sm font-extrabold text-muted-foreground">
              /
            </p>
            <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
              <span className="text-primary">Be a part of</span> the 3D print team
            </h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              The 3D printing team is responsible for maintaining and managing the 3D prints and printers we have available at the iForge. 
              If a 3D printer or print misbehaves, the 3DP team is the first to be notified. Find out more about how we keep the iForge running here.
            </p>
            <div className="pt-5">
              <Link
                href="/hiring"
                rel="noreferrer"
                className={buttonVariants({ size: "lg" })}
              >
                Register interest
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
