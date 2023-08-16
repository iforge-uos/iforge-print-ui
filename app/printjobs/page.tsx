import { columns, Prints } from "@/app/printjobs/components/columns"
import { DataTable } from "@/app/printjobs/components/data-table"

async function getData(): Promise<Prints[]> {
  // Fetch data from your API here.
  return [
    {
      queue_number: 1,
      name: "CT",
      email: "CT@sheffield.ac.uk",
      gcode_filename: "asdasdjansdnjkad.gcode",
      print_time: 1.45,
      filament_weight: 25.02,
      project_type: "testing do not print",
      date_added: "08/06/23",
      rep_check: false,
      status: "under review",
      printer_type: "Prusa",
      printer: "",
      printed_colour: "",
      eta: 10,
      notes: "dont review print",
      id: "11-yg3YMsVFnXpc",
    },
    {
      queue_number: 1,
      name: "TC",
      email: "TC@sheffield.ac.uk",
      gcode_filename: "asdasdjansdnjkad.gcode",
      print_time: 3.65,
      filament_weight: 25.02,
      project_type: "testing do not print",
      date_added: "08/06/23",
      rep_check: true,
      status: "under review",
      printer_type: "Prusa",
      printer: "",
      printed_colour: "",
      eta: 10,
      notes: "dont review print",
      id: "11-yg3YMsVFnXpc",
    },
    {
      queue_number: 1,
      name: "TC",
      email: "TC@sheffield.ac.uk",
      gcode_filename: "asdasdjansdnjkad.gcode",
      print_time: 1.55,
      filament_weight: 25.02,
      project_type: "testing do not print",
      date_added: "08/06/23",
      rep_check: false,
      status: "under review",
      printer_type: "Prusa",
      printer: "",
      printed_colour: "",
      eta: 10,
      notes: "dont review print",
      id: "11-yg3YMsVFnXpc",
    },
    {
      queue_number: 1,
      name: "TC",
      email: "TC@sheffield.ac.uk",
      gcode_filename: "asdasdjansdnjkad.gcode",
      print_time: 9.02,
      filament_weight: 25.02,
      project_type: "testing do not print",
      date_added: "08/06/23",
      rep_check: false,
      status: "under review",
      printer_type: "Prusa",
      printer: "",
      printed_colour: "",
      eta: 10,
      notes: "dont review print",
      id: "11-yg3YMsVFnXpc",
    },
  ]
}
export default async function JobsPage() {
  const data = await getData()

  return (
    <>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            Print Jobs
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
            Queued prints
          </p>
        </div>
        <div>
          <DataTable columns={columns} data={data} />
        </div>
      </section>
    </>
  )
}
