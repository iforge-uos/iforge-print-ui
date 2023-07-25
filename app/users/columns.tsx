"use client"

import { ColumnDef } from "@tanstack/react-table"


export type User = {
  id: number;
  email: string;
  uid: string;
  name: string;
  short_name: string | null;
  user_score: number;
  is_rep: boolean;
  score_editable: boolean;
  date_added: Date;
  completed_count: number;
  failed_count: number;
  rejected_count: number;
  slice_completed_count: number;
  slice_failed_count: number;
  slice_rejected_count: number;

}

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "is_rep",
    header: "Rep?",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "user_score",
    header: "Score",
  }
]
