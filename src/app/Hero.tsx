import { cn } from "@/utils/cn";
import React from "react";

function Hero() {
  return (
    <section className={cn(
      "text-white bg-black",
      "h-lvh",
      "flex flex-col",
      "justify-around",
      "items-center",
      "text-center"
      )}>
      <h1 className={cn(
        "text-5xl"
      )}>$BUILD with the best.</h1>
      <p className={cn(
        "text-xl"
      )}>
        $BUILD <strong>a team</strong> from our handpicked talent pool of
        Fortune 500-level creative, science, technology, engineering, math
        (STEM), and business professionals — perfectly matched to your
        project&apos;s needs.
      </p>
      <div className={cn(
        "flex flex-col",
        "lg: flex flex-row justify-around w-full"
      )}>
        <button>Get Started</button>
        <button>Schedule a Call</button>
      </div>
    </section>
  );
}

export default Hero;
