"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 5) + 2,
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 5) + 2,
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 5) + 2,
  },
  {
    name: "Apr",
    total: Math.floor(Math.random() * 5) + 2,
  },
  {
    name: "May",
    total: Math.floor(Math.random() * 5) + 2,
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 5) + 2,
  },
  {
    name: "Jul",
    total: Math.floor(Math.random() * 5) + 2,
  },
  {
    name: "Aug",
    total: Math.floor(Math.random() * 5) + 2,
  },
  {
    name: "Sep",
    total: Math.floor(Math.random() * 5) + 2,
  },
  {
    name: "Oct",
    total: Math.floor(Math.random() * 5) + 2,
  },
  {
    name: "Nov",
    total: Math.floor(Math.random() * 5) + 2,
  },
  {
    name: "Dec",
    total: Math.floor(Math.random() * 5) + 2,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Line dataKey="total" fill="#bdbdbd" strokeWidth="3" dot={false} type ="natural"/>
      </LineChart>
    </ResponsiveContainer>
  )
}
