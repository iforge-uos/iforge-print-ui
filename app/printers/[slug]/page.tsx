
export default function ManagePrinter({ params }: { params: { slug: string } }) {
  return (
    <div>
      <section className="container p-20 font-normal">
        <div className="text-xl"> 
            printer
        </div>
        <div className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {params.slug}
        </div>
        

      </section>
    </div>
  )
  
  
  
}
