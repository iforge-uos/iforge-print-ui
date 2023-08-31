import React from 'react'
import { Separator }from "@/components/ui/separator"
import { NotificationsForm } from "@/app/printers/components/notifications-form"


const page = () => {
  return (
    <div className="container">
        <div className="space-y-2">
            <div className="text-2xl font-semibold">Printer Notifications</div>
                <p className="text-sm text-muted-foreground pb-2">
                    This is where you can set email notifications for crucial printer events.
                </p>
        </div>

        <Separator />
        <div className="py-5">
            <NotificationsForm />
        </div>
    </div>
  )
}

export default page