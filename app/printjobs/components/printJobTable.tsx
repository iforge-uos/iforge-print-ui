"use client"

import { AlertCircle } from "lucide-react"
import useSWR from "swr"

import { getData } from "@/lib/api"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Skeleton } from "@/components/ui/skeleton"

import { columns, Prints } from "./columns"
import { DataTable } from "./data-table"

export function PrintJobTable() {
  const { data, error } = useSWR("/prints/job", getData)

  if (error)
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          An Error has occurred. Please try again later.
        </AlertDescription>
      </Alert>
    )

  // Parse data into a list of users type
  if (!data) return <Skeleton className="h-[400px] flex-1" />

  const jobs: Prints[] = data.data.print_jobs as Prints[]

  console.log(jobs)

  return <DataTable columns={columns} data={jobs} />
}
