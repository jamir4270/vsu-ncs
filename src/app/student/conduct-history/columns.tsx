"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import React from "react";
// dropdown-menu not used in this file

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  date: string | number;
  type: "Merit" | "Demerit" | "Serious Infraction";
  description: string;
  faculty_name: string;
  sanction: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      const date = row.getValue("date");
      if (typeof date === "number") {
        return new Date(date).toISOString().split("T")[0]; // YYYY-MM-DD
      }
      return date;
    },
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => {
      const t = row.getValue("type") as Payment["type"];
      const base =
        "inline-flex items-center rounded-full px-3 py-0.5 text-sm font-medium";
      if (t === "Merit") {
        return (
          <Badge className={`${base} bg-[#00C950] text-white`}>Merit</Badge>
        );
      }
      if (t === "Demerit") {
        return (
          <Badge className={`${base} bg-[#FF6900] text-white`}>Demerit</Badge>
        );
      }
      return (
        <Badge className={`${base} bg-red-600 text-white`}>
          Serious Infraction
        </Badge>
      );
    },
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "faculty_name",
    header: "Reported By",
  },
  {
    accessorKey: "sanction",
    header: "Sanction",
  },
];
