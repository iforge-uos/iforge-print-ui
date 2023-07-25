"use client"

import useSWR from 'swr'
import { fetcher } from '@/lib/api'
import { User, columns } from './columns'
import { DataTable } from './data-table'
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"



export function UserTable() {
  const { data, error } = useSWR('/users/view/all', fetcher)

  if (error) return (
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


  const users: User[] = data.data.users as User[]

  return (
    <DataTable columns={columns} data={users} />
)
}
