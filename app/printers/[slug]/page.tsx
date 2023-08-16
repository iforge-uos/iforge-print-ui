import PrinterForm from "@/app/printers/[slug]/printer-form";

function isInteger(str: string): boolean {
  return /^\d+$/.test(str);
}


export default function ManagePrinter({ params }: { params: { slug: string } }) {

  if (!isInteger(params.slug)) {
    return <div>Invalid slug provided.</div>;
  }


  return <div className="space-y-6">
    <PrinterForm slug={parseInt(params.slug, 10)}/>
  </div>
}
