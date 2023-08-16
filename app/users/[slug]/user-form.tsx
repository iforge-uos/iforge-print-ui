"use client"

import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import useSWR from "swr"
import * as z from "zod"

import { fetcher } from "@/lib/api"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
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
import { useToast } from "@/components/ui/use-toast"

const userFormSchema = z.object({
  email: z.string().email(),
  uid: z.string().regex(/^.{3}\d{2}.{3}$/),
  name: z.string().min(1).max(100),
  short_name: z.string().nullable(),
  user_score: z.number().min(0).max(100),
  is_rep: z.boolean(),
  score_editable: z.boolean(),
  completed_count: z.number().int().min(0),
  failed_count: z.number().int().min(0),
  rejected_count: z.number().int().min(0),
  slice_completed_count: z.number().int().min(0),
  slice_failed_count: z.number().int().min(0),
  slice_rejected_count: z.number().int().min(0),
})

type UserFormValues = z.infer<typeof userFormSchema>

type UserFormProps = {
  slug: number
}

const defaultValues: Partial<UserFormValues> = {}

const UserForm: React.FC<UserFormProps> = ({ slug }) => {
  const { toast } = useToast()
  // Form initialization with default values
  const form = useForm<UserFormValues>({
    defaultValues,
    mode: "onChange",
  })

  // Data fetching using SWR
  const {
    data: res,
    error,
    isValidating,
  } = useSWR(`/users/view/${slug}`, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    refreshInterval: 0,
  })

  // Update form values once data is fetched successfully
  useEffect(() => {
    if (res && !isValidating) {
      Object.keys(res.data.user).forEach((key) => {
        form.setValue(key as keyof UserFormValues, res.data.user[key])
      })
    }
  }, [res, form.setValue, isValidating, form])

  // Return conditions based on fetch state
  if (error) return <div>Error loading data</div>
  if (!res) return <div>Loading...</div>
  console.log(res.data)

  // Form submission logic
  function onSubmit(values: z.infer<typeof userFormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="example@sheffield.ac.uk" {...field} />
              </FormControl>
              <FormDescription>Enter a valid email address.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="uid"
          render={({ field }) => (
            <FormItem>
              <FormLabel>UID</FormLabel>
              <FormControl>
                <Input placeholder="abc12def" {...field} />
              </FormControl>
              <FormDescription>
                Enter a UID matching the pattern XXXYYZZZ.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Sam Piper" {...field} />
              </FormControl>
              <FormDescription>Enter your full name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="short_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Short Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Sam"
                  value={field.value || ""}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormDescription>
                Enter your short name or nickname.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="user_score"
          render={({ field }) => (
            <FormItem>
              <FormLabel>User Score</FormLabel>
              <FormControl>
                <Input type="number" placeholder="0" {...field} />
              </FormControl>
              <FormDescription>Enter the user score.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="is_rep"
          render={({ field }) => (
            <FormItem>
              <Checkbox
                id="is_rep"
                checked={field.value}
                onChange={(e) =>
                  field.onChange((e.target as HTMLInputElement).checked)
                }
              />
              <label
                htmlFor="is_rep"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Is Representative?
              </label>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="score_editable"
          render={({ field }) => (
            <FormItem>
              <Checkbox
                id="score_editable"
                checked={field.value}
                onChange={(e) =>
                  field.onChange((e.target as HTMLInputElement).checked)
                }
              />
              <label
                htmlFor="score_editable"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                User Score Editable?
              </label>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="completed_count"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Completed Count</FormLabel>
              <FormControl>
                <Input type="number" placeholder="0" {...field} />
              </FormControl>
              <FormDescription>
                Enter the number of tasks completed by the user.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="failed_count"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Failed Count</FormLabel>
              <FormControl>
                <Input type="number" placeholder="0" {...field} />
              </FormControl>
              <FormDescription>
                Enter the number of tasks failed by the user.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Save User</Button>
      </form>
    </Form>
  )
}
export default UserForm
