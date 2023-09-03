"use client"

import Link from "next/link"
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

export type Printer = {
  id: number
  printer_name: string
  printer_type: string
  ip: string
  api_key: string
  total_filament_used: number
  total_time_printed: number
  failed_prints: number
  completed_prints: number
  days_on_time: number
  location: string
}

export const columns: ColumnDef<Printer>[] = [
  {
    accessorKey: "printer_name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Printer Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "printer_type",
    header: "Printer Type",
  },
  // {
  //   accessorKey: "ip",
  //   header: "IP Address",
  // },
  // {
  //   accessorKey: "api_key",
  //   header: "API Key",
  // },
  // {
  //   accessorKey: "total_filament_used",
  //   header: "Total Filament Used (g)",
  // },
  // {
  //   accessorKey: "total_time_printed",
  //   header: "Total Time Printed (h)",
  // },
  // {
  //   accessorKey: "completed_prints",
  //   header: "Completed Prints",
  // },
  // {
  //   accessorKey: "failed_prints",
  //   header: "Failed Prints",
  // },

  {
    accessorKey: "days_on_time",
    header: "Days On Time",
    cell: ({ row }) => {
      const onTime = row.original.days_on_time
      let colorClass = ""
      let bgColorClass = ""
      if (onTime > 2) {
        colorClass = "text-green-600"
        bgColorClass = "bg-green-500"
      } else if (onTime >= 2 && onTime >= 0) {
        colorClass = "text-orange-500"
        bgColorClass = "bg-orange-500"
      } else  {
        colorClass = "text-red-500"
        bgColorClass = "bg-red-500"
      }

      return (
        // <div className={`rounded-md p-1.5 ${bgColorClass}`}>
        //   <div className={colorClass}>{printTime}</div>
        // </div>
        <div className="flex items-center">
          <div className={`h-3 w-3 rounded-full ${bgColorClass} mr-2`}></div> {onTime}
        </div>
      )
    },
  },


  {
    accessorKey: "location",
    header: "Location",
    cell: ({ row }) => {
      const location = row.original.location
      let colorClass = ""
      let bgColorClass = ""
      if (location == "heartspace") {
        colorClass = "text-green-600"
        bgColorClass = "bg-green-500"
      } else if (location == "diamond") {
        colorClass = "text-blue-500"
        bgColorClass = "bg-blue-500"
      } 

      return (
        // <div className={`rounded-md p-1.5 ${bgColorClass}`}>
        //   <div className={colorClass}>{printTime}</div>
        // </div>
        <div className="flex items-center">
          <div className={`h-3 w-3 rounded-full ${bgColorClass} mr-2`}></div> {location}
        </div>
      )
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const printer = row.original

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
              onClick={() => navigator.clipboard.writeText(String(printer.id))}
            >
              Copy printer ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={`/printers/${encodeURIComponent(printer.id)}`}>
                View Printer Details
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
