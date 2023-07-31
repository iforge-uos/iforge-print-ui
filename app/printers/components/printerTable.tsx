"use client"

import useSWR from 'swr'
import { fetcher } from '@/lib/api'
import { Printer, columns } from './columns'
import { DataTable } from './data-table'
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"



export function PrinterTable() {
  const { data, error } = useSWR('/printers/view/all/', fetcher)

  if (error) return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Error fetching printers. Please try again later.
      </AlertDescription>
    </Alert>
  )

  // Parse data into a list of users type
  if (!data) return <Skeleton className="h-[400px] flex-1" />


  const printers: Printer[] = data.data.printers as Printer[]

  return (
    <DataTable columns={columns} data={printers} />
)
}
