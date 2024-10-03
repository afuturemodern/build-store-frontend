import { cn } from "@/utils/cn";
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
          "py-16",
          "px-8",
          "gap-8",
          "flex flex-col",
          "justify-around",
          "items-center",
          "text-center"

        )}
      >
        <h1 className={cn(
          "text-5xl", 
          "font-bold"
          )}>
            $BUILD with the best.
            </h1>
        <p className={cn(
          "text-xl", 
          "max-w-72",
          "md:min-w-fit"
          )}>
          $BUILD <strong>a team</strong> from our handpicked talent pool of
          Fortune 500-level creative, science, technology, engineering, math
          (STEM), and business professionals — perfectly matched to your
          project&apos;s needs.
        </p>
        <div
          className={cn(
            "flex flex-col justify-between gap-4"
            // "lg: flex flex-row justify-around w-full"
          )}
        >
          <button
            className={cn(
              "border border-white",
              "leading-8",
              "min-w-72",
              "rounded-full"
            )}
          >
            Get Started
          </button>
          <button
            className={cn(
              "border border-white",
              "leading-8",
              "min-w-72",
              "rounded-full"
            )}
          >
            Schedule a Call
          </button>
        </div>
      </div>
      <img className={cn(
        "w-full" 
      )}
        src="hero.webp" 
        alt="Hero Image">
        </img>
    </section>
  );
}

export default Hero;
