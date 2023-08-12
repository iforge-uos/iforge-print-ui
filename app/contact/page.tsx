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
          Contact us
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
        The iForge can be contacted on any of our social medias (see footer below) where the publicity team will answer questions or foreward questions onto the relevant reps. The emails below can be used to get in touch with a specific team directly.
       </p>
       <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>General Enquiries : <a className="text-blue-400 underline hover:text-blue-500" href="mailto:iforge@sheffield.ac.uk">iforge@sheffield.ac.uk</a></li>
          <li>Publicity: <a className="text-blue-400 underline hover:text-blue-500" href="mailto:iforge@sheffield.ac.uk">publicity.iforge@sheffield.ac.uk.</a></li>
          <li>Relations: <a className="text-blue-400 underline hover:text-blue-500" href="mailto:iforge@sheffield.ac.uk">relations.iforge@sheffield.ac.uk</a></li>
          <li>Events: <a className="text-blue-400 underline hover:text-blue-500" href="mailto:iforge@sheffield.ac.uk">events.iforge@sheffield.ac.uk</a></li>
          <li>Hardware: <a className="text-blue-400 underline hover:text-blue-500" href="mailto:iforge@sheffield.ac.uk">hardware.iforge@sheffield.ac.uk</a></li>
          <li>3D Printing: <a className="text-blue-400 underline hover:text-blue-500" href="mailto:iforge@sheffield.ac.uk">3dprinting.iforge@sheffield.ac.uk</a></li>
      </ul>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        Address
      </h4>
      <p className="leading-7 [&:not(:first-child)]:mt-1">
        1st Floor, The Diamond <br />
        32 Leavygreave Rd <br />
        Sheffield <br />
        S3 7QY
      </p>
      <h4 className="mt-5 scroll-m-20 text-xl font-semibold tracking-tight">
        Opening Hours
      </h4>
      <p className="leading-7 [&:not(:first-child)]:mt-1">
          Open Monday to Friday 12:00 to 20:00
      </p>
      <p className="text-sm text-muted-foreground">Short notice closures may occur and will be posted on Instagram.</p>


      </div>
    </div>
  );
}
