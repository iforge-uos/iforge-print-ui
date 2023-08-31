"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export type Prints = {
  queue_number: number
  name: string
  email: string
  gcode_filename: string
  print_time: number
  filament_weight: number
  project_type: string
  date_added: string
  rep_check: boolean
  status: string
  printer_type: string
  printer: string
  printed_colour: string
  eta: number
  notes: string
  id: string
}

export const columns: ColumnDef<Prints>[] = [
  {
    accessorKey: "queue_number",
    header: ({ column }) => {
      return (
        <Button
          className="w-32"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Number in Queue
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },

  // {
  //   accessorKey: "gcode_filename",
  //   header: "Gcode Filename",
  // },
  {
    accessorKey: "print_time",
    header: "Print Time (h/m)",
    cell: ({ row }) => {
      const printTime = row.original.print_time
      let colorClass = ""
      let bgColorClass = ""
      if (printTime < 2) {
        colorClass = "text-green-600"
        bgColorClass = "bg-green-500"
      } else if (printTime >= 2 && printTime <= 6) {
        colorClass = "text-orange-500"
        bgColorClass = "bg-orange-500"
      } else {
        colorClass = "text-red-500"
        bgColorClass = "bg-red-500"
      }

      return (
        // <div className={`rounded-md p-1.5 ${bgColorClass}`}>
        //   <div className={colorClass}>{printTime}</div>
        // </div>
        <div className="flex items-center">
          <div className={`h-3 w-3 rounded-full ${bgColorClass} mr-2`}></div> {printTime}
        </div>
      )
    },
  },

  // {
  //   accessorKey: "filament_weight",
  //   header: "Filament(g)",
  // },
  {
    accessorKey: "project_type",
    header: "Project type",
  },
  {
    accessorKey: "date_added",
    header: "Date Added",
  },
  {
    accessorKey: "rep_check",
    header: "Rep Check",
    cell: ({ row }) => {
      const repCheck = row.original.rep_check
      const colorClass = repCheck ? "text-red-500" : "text-green-600"
      const bgColorClass = repCheck ? "bg-red-100" : "bg-green-100"
      return (
        <div className={`rounded-md p-1.5 ${bgColorClass}`}>
          <div className={`text-center ${colorClass}`}>
            {repCheck.toString()}
          </div>
        </div>
      )
    },
  },

  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "printer_type",
    header: "Printer type",
  },
  {
    accessorKey: "printer",
    header: "Printer",
  },
  // {
  //   accessorKey: "printed_colour",
  //   header: "Printed colour",
  // },
  {
    accessorKey: "eta",
    header: "ETA (m)",
  },
  // {
  //   accessorKey: "notes",
  //   header: "Notes",
  // },
  // {
  //   accessorKey: "id",
  //   header: "Unique ID",
  // },

  {
    id: "actions",
    cell: ({ row }) => {
      const print = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(String(print.id))}
            >
              Copy print ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View Printer Details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
