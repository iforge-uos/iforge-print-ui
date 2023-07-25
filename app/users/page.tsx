import { UserTable } from './components/userTable'


export default function UsersPage() {


  return (
    <>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            Users
          </h1>
        </div>
      </section>
      <div className="container mx-auto py-10">
      <UserTable />
      </div>
    </>
  )
}

