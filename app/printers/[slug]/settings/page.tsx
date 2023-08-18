import PrinterForm from "@/app/printers/[slug]/printer-form"
import { Separator }from "@/components/ui/separator"
import { SidebarNav } from "@/app/printers/components/sidebar-nav"


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

      <div className="">
        <div className="text-2xl font-semibold">Printer settings</div>
        <p className="text-sm text-muted-foreground">
          This is where you can change the printer settings.
        </p>
      </div>
      <Separator />
      <div className="py-5">
        <PrinterForm slug={parseInt(params.slug, 10)} />
      </div>
    </div>
  )
}