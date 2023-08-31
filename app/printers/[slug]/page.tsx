import PrinterForm from "@/app/printers/[slug]/printer-form"
import { Separator }from "@/components/ui/separator"
import { SidebarNav } from "../components/sidebar-nav"


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
      <div className="py-5">
        POOPOOPPOP
      </div>
    </div>
  )
}