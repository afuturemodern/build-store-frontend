import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <section className={cn(
      "text-white bg-black",
      // "px-4",
      // "h-lvh",
      "flex flex-col"
      )}>
      <div
        className={cn(
          "py-12 sm:py-16 lg:py-20 xl:py-24",
          "px-8 sm:px-6 lg:px-8",
          "max-w-7xl mx-auto w-full",
          "gap-6 sm:gap-8 lg:gap-10",
          "flex flex-col",
          "justify-center",
          "items-center",
          // "text-center"
        )}
      >
        <h1 className={cn(
          "text-5xl", 
          "font-bold"
          )}>
            $BUILD with the best.
            </h1>
        <p className={cn(
          "text-lg sm:text-xl", 
          "max-w-full sm:max-w-md lg:max-w-lg"
          )}>
          $BUILD <strong>a team</strong> from our handpicked talent pool of
          Fortune 500-level creative, science, technology, engineering, math
          (STEM), and business professionals — perfectly matched to your
          project&apos;s needs.
        </p>
        <div
          className={cn(
            "flex flex-col sm:flex-row",
            "gap-4",
            "w-full sm:w-auto",
            "justify-center"
          )}
        >
          <Link
            href="/signup"
            className={cn(
              "inline-flex items-center justify-center",
              "border border-white text-white hover:bg-white hover:text-black",
              "py-3 px-8",
              "w-full sm:w-auto sm:min-w-[200px]",
              "rounded-full",
              "transition-colors duration-200",
              "focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
            )}
          >
            Get Started
          </Link>
          <Link
            href="/signup"
            className={cn(
              "inline-flex items-center justify-center",
              "border border-white text-white hover:bg-white hover:text-black",
              "py-3 px-8",
              "w-full sm:w-auto sm:min-w-[200px]",
              "rounded-full",
              "transition-colors duration-200",
              "focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
            )}
          >
            Schedule a Call
          </Link>
        </div>
      </div>
      <Image 
        className={cn(
          "w-full" 
        )}
        src="/hero.webp" 
        alt="Hero Image"
        width={1000}
        height={1000}
      />
    </section>
  );
}

export default Hero;
