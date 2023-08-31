'use client'
import { SidebarNav } from "../components/sidebar-nav"
import { Separator }from "@/components/ui/separator"
import Link from 'next/link';

import { useParams } from "next/navigation";


// import { useRouter } from 'next/router'
// const router = useRouter()


import { usePathname } from "next/navigation";


  
  interface SettingsLayoutProps {
    children: React.ReactNode
  }
  
  export default function SettingsLayout({ children }: SettingsLayoutProps) {
    const pathname = usePathname();
    const slug = (pathname.split('/').pop())

    // const router = useRouter();

    const sidebarNavItems = [
      {
        title: "Overview",
        href: `/printers/${slug}/overview`,      
      },
      {
        title: "Settings",
        href: `/printers/${slug}/settings`,
          },
      {
        title: "Notifications",
        href: `/printers/${slug}/notifications`,
      },
  
    ]
    
    return (
      <>
        <div className="hidden space-y-6 p-10 pb-16 md:block">
          <div className="space-y-0.5">
            <h2 className="text-2xl font-bold tracking-tight">Printer information</h2>
            <p className="text-muted-foreground">
              View printer data and update its settings.
            </p>
          </div>
          <Separator className="my-6" />
          <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
            <aside className="-mx-4 lg:w-1/5">
              <SidebarNav items={sidebarNavItems} />
            </aside>
            <div className="flex-1 lg:max-w-2xl">{children}</div>
          </div>
        </div>
      </>
    )
}