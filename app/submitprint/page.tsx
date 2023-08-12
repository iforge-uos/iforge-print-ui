import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export default function Page() {
  return (
    <div className="container grid items-center gap-10 pb-8 pl-8 pt-6 md:py-10">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Select technology
          </h1>
          <div className="pt-20 ">
          <Card className="mb-8 w-[350px]">
            <CardHeader>
              <CardTitle>FDM/FFF</CardTitle>
              <CardDescription>The normal technology people think of when they say 3D printing – it works by extruding hot plastic in layers and gradually building up a model.</CardDescription>
            </CardHeader>

            <CardFooter>
              <Button className="w-full">
                <Check className="mr-2 h-4 w-4" /> Mark as selected
              </Button>
            </CardFooter>
          </Card>

          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>SLA</CardTitle>
              <CardDescription>Liquid resin based technology, using a laser to cure photosensitive resin layer by layer to build up a part.</CardDescription>
            </CardHeader>

            <CardFooter>
              <Button className="w-full">
                <Check className="mr-2 h-4 w-4" /> Mark as selected
              </Button>
            </CardFooter>
          </Card>
          </div>

        </div>

        <div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Upload your CAD files
          </h1>
          <div className="pt-20">
          <Card className="mb-8 h-[450px] w-[600px]">
            <CardHeader>
              <CardTitle>Drag and drop or select files</CardTitle>
              <CardDescription>File types: .stl</CardDescription>
            </CardHeader>
            <CardContent>
            <div className="grid w-full max-w-full items-center gap-1.5 ">
                <Label htmlFor="picture">CAD file</Label>
                <Input className ="h-[200px]"id="CADfile" type="file" />
            </div>
            </CardContent>
            <CardFooter>
              <Button className="mt-[45px] w-full">
                <Check className="mr-2 h-4 w-4" /> Mark as complete
              </Button>
            </CardFooter>
          </Card>
          </div>


        </div>
      </div>
    </div>
  );
}
