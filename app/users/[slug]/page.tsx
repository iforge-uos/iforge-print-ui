import UserForm from "@/app/users/[slug]/user-form"

function isInteger(str: string): boolean {
  return /^\d+$/.test(str)
}

export default function ManageUser({ params }: { params: { slug: string } }) {
  if (!isInteger(params.slug)) {
    return <div>Invalid slug provided.</div>
  }

  return (
    <div className="space-y-6">
      <UserForm slug={parseInt(params.slug, 10)} />
    </div>
  )
}
