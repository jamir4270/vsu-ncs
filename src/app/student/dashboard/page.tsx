"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function StudentDashBoard() {
  return (
    <div className="flex flex-col w-full p-5">
      <div className="flex flex-col">
        <h1>Welcome, Maria Santos!</h1>
        <p>Here&apos;s an overview of your conduct record this semester.</p>
      </div>
      <div className="flex w-full gap-5 ">
        <Card className="flex-1 p-5">
          <CardTitle>Total Demerit Hours</CardTitle>
          <CardContent>12</CardContent>
          <CardFooter>This semester</CardFooter>
        </Card>
        <Card className="flex-1 p-5">
          <CardTitle>Total Demerit Hours</CardTitle>
          <CardContent>12</CardContent>
          <CardFooter>This semester</CardFooter>
        </Card>
        <Card className="flex-1 p-5">
          <CardTitle>Total Demerit Hours</CardTitle>
          <CardContent>12</CardContent>
          <CardFooter>This semester</CardFooter>
        </Card>
      </div>
    </div>
  );
}
