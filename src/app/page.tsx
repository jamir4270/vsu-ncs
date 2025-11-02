"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import logo from "../../public/logo.png";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="bg-white/60 backdrop-blur sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-4">
          <Image src={logo} alt="VSU NCS" height={48} width={48} />
          <h1 className="text-lg font-semibold">VSU Nursing Conduct System</h1>
          <nav className="ml-auto">
            <Link href="/auth">
              <Button>Login</Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center py-12 px-6">
        {/* Hero */}
        <section className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <Badge>Official</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              VSU Nursing Conduct System (VSU NCS)
            </h2>
            <p className="mt-4 text-muted-foreground">
              A centralized platform for the Visayas State University Faculty of
              Nursing to transparently and efficiently manage student merits and
              demerits.
            </p>

            <div className="mt-6">
              <Link href="/auth">
                <Button size="lg">Login</Button>
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <Card className="max-w-md w-full">
              <CardHeader>
                <CardTitle>Why VSU NCS</CardTitle>
                <CardDescription>
                  Secure, transparent, and easy management of student conduct
                  records.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center">
                  <Image
                    src={logo}
                    alt="VSU NCS logo"
                    width={260}
                    height={260}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Problem & Solution */}
        <section id="problem" className="max-w-6xl w-full mt-12">
          <h3 className="text-2xl font-semibold">
            Moving Beyond Manual Tracking
          </h3>
          <p className="mt-2 text-muted-foreground">
            The traditional manual process for tracking student conduct is
            time-consuming, prone to inconsistencies, and lacks a transparent,
            centralized record. This creates inefficiencies for faculty and a
            lack of clarity for students.
          </p>

          <h4 className="mt-6 text-xl font-semibold">
            A Clear, Centralized, and Efficient Solution
          </h4>
          <p className="mt-2 text-muted-foreground">
            VSU NCS digitalizes the entire merit and demerit process. It
            provides a secure, single source of truth for student conduct,
            ensuring consistency, accountability, and transparency for everyone
            in the College of Nursing.
          </p>
        </section>

        {/* Benefits by Role */}
        <section
          id="benefits"
          className="max-w-6xl w-full mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <h3 className="col-span-3 text-2xl font-semibold">
            A System Designed for Everyone
          </h3>

          <Card className="p-4">
            <CardHeader>
              <CardTitle className="text-lg">
                Full Transparency of Your Record
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Securely log in to your personal portal to view your complete
                merit and demerit history, see your current cumulative demerit
                hours, and understand the details of any infractions and their
                corresponding sanctions.
              </p>
            </CardContent>
          </Card>

          <Card className="p-4">
            <CardHeader>
              <CardTitle className="text-lg">
                Streamline Your Workflow
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Easily and securely log student merits and demerits. View a
                student&apos;s complete conduct history, utilize an automated
                system for common violations, and report serious infractions
                directly to administrators, all in one place.
              </p>
            </CardContent>
          </Card>

          <Card className="p-4">
            <CardHeader>
              <CardTitle className="text-lg">
                Manage with Clarity and Oversight
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Access a centralized dashboard to review all reports for serious
                infractions, manage faculty accounts, and view comprehensive
                data and student records for the entire student body.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Core Features */}
        <section id="features" className="max-w-6xl w-full mt-12">
          <h3 className="text-2xl font-semibold">Core Features</h3>
          <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 list-disc pl-5">
            <li>
              <strong>Digital Merit/Demerit Logging:</strong> A simple web
              interface for faculty to log student conduct.
            </li>
            <li>
              <strong>Rule-Based Sanctioning:</strong> Automatic demerit
              assignments for common, pre-defined violations.
            </li>
            <li>
              <strong>Secure Student Portal:</strong> A read-only view for
              students to access their personal conduct records 24/7.
            </li>
            <li>
              <strong>Admin Reporting Module:</strong> A dedicated system for
              reporting and reviewing serious violations that require
              deliberation.
            </li>
            <li>
              <strong>Cumulative Tracking:</strong> Real-time calculation and
              display of total demerit hours per student, per semester.
            </li>
          </ul>
        </section>
      </main>

      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <p>© {year} Visayas State University</p>
          <nav className="flex gap-4">
            <Link href="/auth">Login</Link>
            <a href="https://vsu.edu.ph" target="_blank" rel="noreferrer">
              vsu.edu.ph
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
