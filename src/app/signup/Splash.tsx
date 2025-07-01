import { cn } from "@/utils/cn";
import Link from "next/link";
import React from "react";

function Splash() {
  return (
    <div
      className={cn(
        "flex flex-col justify-between items-start",
        "h-lvh",
        "px-8",
        "bg-[#BBDCE3]",
        "lg:flex",
        "lg:w-1/2",
        "lg:p-8",
        "lg:pl-48"
      )}
    >
      <Link href="/" className={cn("")}>
        <img className="h-16 aspect-square" src="logo.png" alt="Logo" />
      </Link>
      <div className="flex flex-col gap-8 max-w-lg text-white text-lg">
        <h1 className="leading-snug text-5xl text-white font-extrabold block box-border">
          $BUILD with the best and brightest.
        </h1>
        <h2 className="box-border block isolate">
          Fill out this form to hire future modern&apos;s invite-only talent pool of
          Fortune 500-level engineers, scientists, mathematicians,
          technologists, designers, artists, business administrators, and
          credentialed professionals.
        </h2>
      </div>
      <footer className="h-16"></footer>
    </div>
  );
}

export default Splash;
