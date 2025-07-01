import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";
import React from "react";

function Splash() {
  return (
    <div
      className={cn(
        "flex flex-col justify-between items-start",
        "min-h-screen lg:h-screen",
        "px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16",
        "bg-[#BBDCE3]",
        "w-full lg:w-1/2",
        "lg:pl-16 xl:pl-24"
      )}
    >
      <Link href="/" className={cn("mb-8 lg:mb-0")}>
        <Image 
          className="h-12 sm:h-16 w-auto" 
          src="/fm clr turtle alt full.svg" 
          alt="$BUILD Store Logo"
          width={64}
          height={64}
        />
      </Link>
      <div className="flex flex-col gap-6 sm:gap-8 max-w-full lg:max-w-lg text-white">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white font-extrabold leading-tight">
          $BUILD with the best and brightest.
        </h1>
        <h2 className="text-base sm:text-lg lg:text-xl leading-relaxed">
          Fill out this form to hire future modern&apos;s invite-only talent pool of
          Fortune 500-level engineers, scientists, mathematicians,
          technologists, designers, artists, business administrators, and
          credentialed professionals.
        </h2>
      </div>
      <footer className="h-8 sm:h-12 lg:h-16"></footer>
    </div>
  );
}

export default Splash;
