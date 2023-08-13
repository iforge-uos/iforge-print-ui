"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export type Prints = {
  print_name: string
  printer_type: string
  filament_used: number
  print_time: number
  location: string
  render: string
}

export const columns: ColumnDef<Prints>[] = [
  {
    accessorKey: "print_name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Print Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "printer_type",
    header: "Printer Type",
  },
  {
    accessorKey: "filament_used",
    header: "Filament Used",
  },
  {
    accessorKey: "print_time",
    header: "Print Time",
    cell: ({ row }) => {
      const printTime = row.original.print_time;
      let colorClass = "";
      let bgColorClass = "";
      if (printTime < 2) {
        colorClass = "text-green-600";
        bgColorClass = "bg-green-100";
      } else if (printTime >= 2 && printTime <= 6) {
        colorClass = "text-orange-500";
        bgColorClass = "bg-orange-100";
      } else {
        colorClass = "text-red-500";
        bgColorClass = "bg-red-100";
      }

      return (
        <div className={`rounded-md p-1.5 w-12 ${bgColorClass}`}>
          <div className={colorClass}>{printTime}h</div>
        </div>
      );
    },
  },

  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "render",
    header: "render",
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
              onClick={() => navigator.clipboard.writeText(String(print.name))}
            >
              Copy printer ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View Printer Details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
