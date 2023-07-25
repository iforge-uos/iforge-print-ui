import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button"
import { BellRing, Check } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export default function Page() {
  return (
    <div className="container grid items-center gap-10 pb-8 pl-8 pt-6 md:py-10">
      <div>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          How it works
        </h1>
        <h3 className="scroll-m-20 pt-10 text-2xl font-semibold tracking-tight">
          Basics of use
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
        If you have any questions about the process or want advice on your design, feel free to ask any of our reps on shift or email the 3D printing team at: <strong className="font-bold">3DPrinting.iForge@sheffield.ac.uk</strong>
       </p>
       <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>You must complete the compulsary online training before entering the iForge and the 3D printing training to use the 3D printers.</li>
          <li>Export your CAD file as a 3D mesh – we can use the <strong className="font-bold">3MF</strong> or <strong className="font-bold">STL</strong> filetypes (“Save As Mesh” on bodies in Fusion 360).</li>
          <li>Talk to one of our friendly iForge Reps, who will guide you through the slicing process and add your print job to our queue.</li>
          <li>Wait for the print to complete! You will receive an email when it is ready to pick up from the iForge.</li>
      </ul>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
      If you are planning to create a 3D print with us we reccomend that you read all the information on this webpage. So keep scrolling! If, at the end, you want more detailed information, you can check out the iForge digital page here.
       </p>
       <h3 className="scroll-m-20 pt-10 text-2xl font-semibold tracking-tight">
          Creating a good print
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
      When designing models for manufacture using 3D printers it’s important to take account of the process to ensure your print will be successful. Everything from the size of features to the orientation the part is printed in matters!
      While we’re working on our own guidance for designing for 3D printer manufacture, take a look at these helpful resources:
       </p>
       <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li><a href="https://i.imgur.com/MZiyaq6.png" className="text-blue-400 underline hover:text-blue-500">Billie Reuben’s design tips poster</a></li>
          <li><a href="https://www.reddit.com/r/3DPrinting/wiki/makingmodels/" className="text-blue-400 underline hover:text-blue-500">Reddit r/3DPrinting Wiki – Making Models</a></li>

      </ul>
      </div>
    </div>
  );
}
