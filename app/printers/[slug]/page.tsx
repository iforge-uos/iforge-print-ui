import PrinterForm from "@/app/printers/[slug]/printer-form"
import { Separator }from "@/components/ui/separator"
import { SidebarNav } from "../components/sidebar-nav"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Overview } from "@/app/printers/components/overview"





function isInteger(str: string): boolean {
  return /^\d+$/.test(str)
}

export default function ManagePrinter({
  params,
}: {
  params: { slug: string }
}) {
  if (!isInteger(params.slug)) {
    return <div>Invalid slug provided.</div>
  }

  return (
    <div className="container">

      <div className="space-y-2">
        <div className="text-2xl font-semibold">Printer overview</div>
        <p className="text-sm text-muted-foreground pb-2">
          This is where you can find all the information about a printer.
        </p>
      </div>
      <Separator />
      <div className="py-5 flex gap-10">
        <Card className="min-w-sm shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                    Printer name
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Turing</div>
                  <p className="text-xs text-muted-foreground">
                    Printer type - Prusa
                  </p>
                </CardContent>
          </Card>

          <Card className="max-w-sm shadow">
            <CardHeader>
              <CardTitle>
                iforge/printer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Here is data nobody cares about
                
              </CardDescription>
              <p className="text-xs text-muted-foreground ">
                    ip - <span className="font-bold cursor-pointer">192.168.1.1</span>
                    
              </p>
              <p className="text-xs text-muted-foreground">
                    apikey - <span className="font-bold cursor-pointer">asdsd3uhg2iyg1igid</span>
                    
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                Recent Prints
              </CardTitle>
            </CardHeader>
            <CardContent>
              asdasd
              <Overview />
            </CardContent>
          </Card>

 

        
      </div>
    </div>
  )
}