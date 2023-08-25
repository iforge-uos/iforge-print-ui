import React from 'react'
import { Icons } from "@/components/icons"
import Link from "next/link"


const page = () => {
  return (
    <section className="max-w-2xl px-6 py-8 mx-auto bg-neutral-50 dark:bg-gray-900 mt-20">
    <header className="flex">
        <Link href="/" className="items-center space-x-2 md:flex">
            <Icons.logo className="hidden h-6 w-6 md:flex" />
                <span className="font-proto-mono  font-bold sm:inline-block ">
                    iForge Print Service
                </span>
        </Link>
    </header>

    <main className="mt-8">
        <h2 className="text-gray-700 dark:text-gray-200">Hi John,</h2>

        <p className="mt-2 leading-loose text-gray-600 dark:text-gray-300">
            Alicia has invited you to join the team on <span className="font-semibold ">iForge</span>.
        </p>
        
        <button className="px-6 py-2 mt-4 text-sm font-medium tracking-wider text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            Accept the invite
        </button>
        
        <p className="mt-8 text-gray-600 dark:text-gray-300">
            Thanks, <br />
            iForge print team
        </p>
    </main>
    

    <footer className="mt-8">
        <p className="text-gray-500 dark:text-gray-400">
            If you'd rather not receive this kind of email, you can <a href="#" className="text-blue-600 hover:underline dark:text-blue-400">unsubscribe</a> or <a href="#" className="text-blue-600 hover:underline dark:text-blue-400">manage your email preferences</a>.
        </p>

        <p className="mt-3 text-sm text-muted-foreground ">
            iForge © {new Date().getFullYear()} All rights reserved.{" "}
        </p>
    </footer>

    
</section>


  )
}

export default page