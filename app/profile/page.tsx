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
import { Activity, Timer, Printer, Users, } from "lucide-react"
import { Overview } from "../admin/components/overview"
import { Prints, columns } from "@/app/admin/components/columns"
import { DataTable } from "@/app/admin/components/data-table"

import  Sidebar  from "@/app/profile/components/Sidebar"


async function getData(): Promise<Prints[]> {
  // Fetch data from your API here.
  return [
    {
      print_name: "Cube",
      printer_type: "Prusa",
      filament_used: 200,
      print_time: 1.45,
      location: "Office A",
      render: "",
    },
    {
      print_name: "Bearing prototype",
      printer_type: "Prusa",
      filament_used: 134,
      print_time: 3.65,
      location: "Office A",
      render: "",
    },
    {
      print_name: "Keyring",
      printer_type: "Prusa",
      filament_used: 200,
      print_time: 1.55,
      location: "Office A",
      render: "",
    },
    {
      print_name: "Plant pot",
      printer_type: "Prusa",
      filament_used: 123,
      print_time: 9.02,
      location: "Office A",
      render: "",
    },
    {
      print_name: "Box",
      printer_type: "Prusa",
      filament_used: 843,
      print_time: 1.42,
      location: "Office A",
      render: "",
    },
    {
      print_name: "Pencil case",
      printer_type: "Prusa",
      filament_used: 2321,
      print_time: 0.45,
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
    <div className="flex">
      <div className="min-h-screen hidden md:flex">
        <Sidebar />
      </div>

      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10 ">
  <div className="flex max-w-[980px] flex-col items-start gap-2">
    <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
      Hello, {serverName}
    </h1>

  </div>
  <div className="grid gap-4 pt-10 md:grid-cols-2 lg:grid-cols-4 grid-cols-2">
                <Card className="max-w-xs shadow bg-secondary">
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
                <Card className="max-w-xs shadow bg-secondary">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Number of prints
                    </CardTitle>
                    <Printer className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">23</div>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-red-500">-14.6%</span> from last month
                    </p>
                  </CardContent>
                </Card>

                <Card className="max-w-xs shadow bg-secondary">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Time spent in iForge</CardTitle>
                    <Timer className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">7h 23m</div>
                    <p className="text-xs text-muted-foreground">
                       <span className="text-green-500">+19%</span> from last month
                    </p>
                  </CardContent>
                </Card>

              </div>
              <div className="grid gap-4 pt-5 md:grid-cols-2 max-w-screen">
                <Card className="max-h-60 max-w-sm xl:max-w-[660px] xl:max-h-[600px] lg:max-w-[660px] lg:max-h-[600px]">
                    <CardHeader className= "space-y-0 pb-5">
                      < CardTitle >Prints made</CardTitle>
                    </CardHeader>
                    <CardContent className="max-h-xs">
                      <Overview/>
                    </CardContent>
                  </Card>
              <Card className="max-h-lg max-w-lg">
                <CardHeader className="text-2xl font-bold">
                  dolor sit amet
                </CardHeader>
                <CardContent className="text-xs text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu tincidunt tortor, a pulvinar nunc. Sed laoreet finibus enim, vel rutrum augue molestie eget. In mattis leo et arcu accumsan, non dictum ante fermentum. Donec turpis dui, vestibulum vel odio in, dictum convallis quam. Praesent ultrices vel sem non placerat. Mauris porta, lorem eu interdum efficitur, eros odio consectetur ipsum, vitae finibus enim ante a enim.
                </CardContent>
              </Card>
              </div>
              <div className="max-w-screen">
                <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-xl md:text-3xl lg:text-4xl">
                  Your past prints
                </h1>
                <DataTable columns={columns} data={data} />
              </div>




</section>
</div>


    </>
  );
}
