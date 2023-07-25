'use client';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"

import { Activity, Timer, Printer, Users } from "lucide-react"
import { Overview } from "@/app/admin/components/overview"
import { Prints, columns } from "@/app/admin/components/columns"
import { DataTable } from "@/app/admin/components/data-table"


async function getData(): Promise<Prints[]> {
  // Fetch data from your API here.
  return [
    {
      print_name: "lorem",
      printer_type: "Prusa",
      filament_used: 200,
      time_printed: 5000,
      location: "Office A",
      render: "",
    },
    {
      print_name: "ipsum",
      printer_type: "Prusa",
      filament_used: 134,
      time_printed: 123,
      location: "Office A",
      render: "",
    },
    {
      print_name: "lorem",
      printer_type: "Prusa",
      filament_used: 200,
      time_printed: 423,
      location: "Office A",
      render: "",
    },
    {
      print_name: "ipsum",
      printer_type: "Prusa",
      filament_used: 123,
      time_printed: 32431,
      location: "Office A",
      render: "",
    },
    {
      print_name: "lorem",
      printer_type: "Prusa",
      filament_used: 843,
      time_printed: 2311,
      location: "Office A",
      render: "",
    },
    {
      print_name: "lorem",
      printer_type: "Prusa",
      filament_used: 2321,
      time_printed: 123,
      location: "Office A",
      render: "",
    },



    // add more objects here as needed
  ];
}

export default function ProfilePage() {
  const [cookies] = useCookies(['user']); // Access the "user" cookie
  const [serverName, setServerName] = useState('');
  const [serverLevel, setServerLevel] = useState('');
  const [data, setData] = useState<Prints[]>([]); // Initialize with an empty array

  useEffect(() => {
    const fetchData = async () => {
      const userCookie = cookies.user; // Access the value of the "user" cookie

      if (userCookie) {
        const name = userCookie.name; // Access the name property from the userCookie object
        const level = userCookie.user_level;
        setServerName(name); // Update the serverName state with the fetched name
        setServerLevel(level);
      }

      const fetchedData = await getData(); // Fetch the data
      setData(fetchedData); // Update the data state with the fetched data
    };

    fetchData(); // Call the async function to fetch data
  }, [cookies]);


  return (
    <>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
  <div className="flex max-w-[980px] flex-col items-start gap-2">
    <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
      Hello, {serverName}
    </h1>

  </div>
  <div className="grid gap-4 pt-10 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                     User level
                    </CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-600">  {serverLevel && serverLevel.charAt(0).toUpperCase() + serverLevel.slice(1)}</div>
                    <p className="text-xs text-muted-foreground">
                    This is the level which determines your access to independent prints.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total number of prints
                    </CardTitle>
                    <Printer className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">76</div>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-red-500">-14.6%</span> from last month
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Time spent in iForge</CardTitle>
                    <Timer className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">453 minutes</div>
                    <p className="text-xs text-muted-foreground">
                       <span className="text-green-500">+19%</span> from last month
                    </p>
                  </CardContent>
                </Card>

              </div>
              <div className="grid gap-4 pt-5 md:grid-cols-2">
                  <Card className="max-w-[660px]">
                    <CardHeader className= "space-y-0 pb-5">
                      < CardTitle >Prints made</CardTitle>
                    </CardHeader>
                    <CardContent>
                     <Overview />
                    </CardContent>
              </Card>
              <Card className="max-h-[250px] max-w-[330px]">
                <CardHeader className="text-2xl font-bold">
                  dolor sit amet
                </CardHeader>
                <CardContent className="text-xs text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu tincidunt tortor, a pulvinar nunc. Sed laoreet finibus enim, vel rutrum augue molestie eget. In mattis leo et arcu accumsan, non dictum ante fermentum. Donec turpis dui, vestibulum vel odio in, dictum convallis quam. Praesent ultrices vel sem non placerat. Mauris porta, lorem eu interdum efficitur, eros odio consectetur ipsum, vitae finibus enim ante a enim.
                </CardContent>
              </Card>
              </div>
              <div>
              <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-xl md:text-3xl lg:text-4xl">
                Admin commands
               </h1>


              </div>
              <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Change user level</CardTitle>
        <CardDescription>Change user level in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of user" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Level</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                  <SelectContent position="popper">
                    <SelectItem value="next">Beginner</SelectItem>
                    <SelectItem value="sveltekit">Intermediate</SelectItem>
                    <SelectItem value="astro">Advanced</SelectItem>
                  </SelectContent>
                </SelectTrigger>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="ghost">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>




</section>

    </>
  );
}
