"use client"

import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import useSWR from "swr"
import * as z from "zod"

import { filterByKeys } from "@/lib/utils"
import { PrinterLocation, PrinterType } from "@/types/api/printer"
import { getData, putData } from "@/lib/api"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import userForm from "@/app/users/[slug]/user-form";

const PrinterLocationZod = z.enum([
  PrinterLocation.heartspace,
  PrinterLocation.diamond,
])
const PrinterTypeZod = z.enum([PrinterType.ultimaker, PrinterType.prusa])

const printerFormSchema = z.object({
  id: z.number().nonnegative("ID must be non-negative"),
  printer_name: z.string().min(3, "Printer name must be at least 3 characters"),
  printer_type: PrinterTypeZod,
  ip: z
    .string()
    .regex(/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/, "IP address format is invalid")
    .or(z.null()),
  api_key: z
    .string()
    .min(5, "API key should be at least 5 characters long")
    .or(z.null()),
  total_time_printed: z
    .number()
    .nonnegative("Total time printed must be non-negative")
    .or(z.null()),
  completed_prints: z
    .number()
    .nonnegative("Number of completed prints must be non-negative")
    .or(z.null()),
  failed_prints: z
    .number()
    .nonnegative("Number of failed prints must be non-negative")
    .or(z.null()),
  total_filament_used: z
    .number()
    .nonnegative("Total filament used must be non-negative")
    .or(z.null()),
  days_on_time: z
    .number()
    .nonnegative("Days on time must be non-negative")
    .or(z.null()),
  location: PrinterLocationZod,
})

type PrinterFormValues = z.infer<typeof printerFormSchema>

type PrinterFormProps = {
  slug: number
}

const defaultValues: Partial<PrinterFormValues> = {
  printer_name: "",
  printer_type: PrinterType.ultimaker,
  ip: "",
  api_key: "",
  total_time_printed: 0,
  completed_prints: 0,
  failed_prints: 0,
  total_filament_used: 0,
  days_on_time: 0,
  location: PrinterLocation.heartspace,
}

const mapPrinterTypeValue = (value: string) => {
  switch (value) {
    case "ultimaker":
      return PrinterType.ultimaker
    case "prusa":
      return PrinterType.prusa
    default:
      return value // Return original value if not matched
  }
}

const mapPrinterLocationValue = (value: string) => {
  switch (value) {
    case "heartspace":
      return PrinterLocation.heartspace
    case "diamond":
      return PrinterLocation.diamond
    default:
      return value // Return original value if not matched
  }
}

const PrinterForm: React.FC<PrinterFormProps> = ({ slug }) => {
  const { toast } = useToast()
  // Form initialization with default values
  const form = useForm<PrinterFormValues>({
    defaultValues,
    mode: "onChange",
  })

  // Data fetching using SWR
  const {
    data: res,
    error,
    isValidating,
  } = useSWR(`/printers/printer/${slug}`, getData, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    refreshInterval: 0,
  })

  // Update form values once data is fetched successfully
  useEffect(() => {
    if (res && !isValidating) {
      Object.keys(res.data).forEach((key) => {
        form.setValue(key as keyof PrinterFormValues, res.data[key])
      })
    }
  }, [res, form.setValue, isValidating, form])

  // Return conditions based on fetch state
  if (error) return <div>Error loading data</div>
  if (!res) return <div>Loading...</div>

  // Form submission logic
  async function onSubmit(values: z.infer<typeof printerFormSchema>) {
    const allowedKeys = Object.keys(printerFormSchema.shape)
    const filteredValues = filterByKeys(values, allowedKeys)
    const { id, ...valuesWithoutId } = filteredValues;

    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(valuesWithoutId, null, 2)}</code>
        </pre>
      ),
    })


    try {
      const response = await putData(`/printers/update/${slug}`, valuesWithoutId)
      if (response.status === "success") {
        toast({
          title: "Printer updated successfully",
          description: "You can now view the printer in the list.",
        })
      }
      else {
        toast({
          title: "Error updating printer",
          description: "Please try again later.",
        })
      }
    } catch (error) {
      toast({
        title: "Error updating printer",
        description: "Please try again later.",
      })
    }

  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="printer_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Printer Name</FormLabel>
              <FormControl>
                <Input placeholder="Ultimaker" {...field} />
              </FormControl>
              <FormDescription>
                Enter the name of the printer. This should be at least 3
                characters long.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="printer_type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Printer Type</FormLabel>
              <Select
                onValueChange={field.onChange}
                value={mapPrinterTypeValue(field.value)}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a printer type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value={PrinterType.ultimaker}>
                    Ultimaker Extended 2+
                  </SelectItem>
                  <SelectItem value={PrinterType.prusa}>Prusa MK3S+</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="ip"
          render={({ field }) => (
            <FormItem>
              <FormLabel>IP Address</FormLabel>
              <FormControl>
                <Input
                  placeholder="1.1.1.1"
                  defaultValue={
                    field && field.value !== undefined && field.value !== null
                      ? field.value.toString()
                      : ""
                  }
                />
              </FormControl>
              <FormDescription>
                Enter the IP address of the printer.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="api_key"
          render={({ field }) => (
            <FormItem>
              <FormLabel>API Key</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter API key"
                  defaultValue={
                    field && field.value !== undefined && field.value !== null
                      ? field.value.toString()
                      : ""
                  }
                />
              </FormControl>
              <FormDescription>
                Provide the API key for the printer, if available.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="total_time_printed"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Total Time Printed</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="0"
                  defaultValue={
                    field && field.value !== undefined && field.value !== null
                      ? field.value.toString()
                      : ""
                  }
                  onChange={(e) =>
                    field.onChange(
                      e.target.value ? Number(e.target.value) : null
                    )
                  }
                />
              </FormControl>
              <FormDescription>
                Enter the total hours the printer has printed.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="completed_prints"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Completed Prints</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="0"
                  defaultValue={
                    field && field.value !== undefined && field.value !== null
                      ? field.value.toString()
                      : ""
                  }
                  onChange={(e) =>
                    field.onChange(
                      e.target.value ? Number(e.target.value) : null
                    )
                  }
                />
              </FormControl>
              <FormDescription>
                Enter the number of completed prints.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="failed_prints"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Failed Prints</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="0"
                  defaultValue={
                    field && field.value !== undefined && field.value !== null
                      ? field.value.toString()
                      : ""
                  }
                  onChange={(e) =>
                    field.onChange(
                      e.target.value ? Number(e.target.value) : null
                    )
                  }
                />
              </FormControl>
              <FormDescription>
                Enter the number of failed prints.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="total_filament_used"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Total Filament Used</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="0"
                  defaultValue={
                    field && field.value !== undefined && field.value !== null
                      ? field.value.toString()
                      : ""
                  }
                  onChange={(e) =>
                    field.onChange(
                      e.target.value ? Number(e.target.value) : null
                    )
                  }
                />
              </FormControl>
              <FormDescription>
                Enter the total amount of filament used (in grams or other
                unit).
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="days_on_time"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Days On Time</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="0"
                  defaultValue={
                    field && field.value !== undefined && field.value !== null
                      ? field.value.toString()
                      : ""
                  }
                  onChange={(e) =>
                    field.onChange(
                      e.target.value ? Number(e.target.value) : null
                    )
                  }
                />
              </FormControl>
              <FormDescription>
                Enter the number of days the printer has been on.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <Select
                onValueChange={field.onChange}
                value={mapPrinterLocationValue(field.value)}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a location" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value={PrinterLocation.heartspace}>
                    Heartspace
                  </SelectItem>
                  <SelectItem value={PrinterLocation.diamond}>
                    Diamond
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Save Printer</Button>
      </form>
    </Form>
  )
}
export default PrinterForm
