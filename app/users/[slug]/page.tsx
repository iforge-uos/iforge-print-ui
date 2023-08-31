import UserForm from "@/app/users/[slug]/user-form"
import { Separator }from "@/components/ui/separator"


function isInteger(str: string): boolean {
  return /^\d+$/.test(str)
}

export default function ManageUser({ params }: { params: { slug: string } }) {
  if (!isInteger(params.slug)) {
    return <div>Invalid slug provided.</div>
  }

  return (
    <div className="space-y-6">
          <div className="container">
            <div className="">
              <div className="text-2xl font-semibold">User settings</div>
               <p className="text-sm text-muted-foreground">
                This is where you can change a user's settings.
              </p>
            </div>
          <Separator />
            <div className="py-5">
              < UserForm slug={parseInt(params.slug, 10)} />
            </div>
          </div>
    </div>
  )
}
