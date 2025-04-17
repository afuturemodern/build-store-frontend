"use client";
import Homepage from "@/app/Homepage";
import Footer from "@/components/Footer";
import { cn } from "@/utils/cn";
import React from "react";
import Header from "../components/Header";

export default function Home() {
  return (
    <main
      className={cn("flex flex-col justify-center align-center")}
    >
      <Header />
      <Homepage />
      <Footer />
    </main>
  );
}
