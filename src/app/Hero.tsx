import { cn } from "@/utils/cn";
import React from "react";

function Hero() {
  return (
    <section>
      <div
        className={cn(
          "text-white bg-black",
          "px-2",
          "h-lvh",
          "flex flex-col",
          "justify-around",
          "items-center",
          "text-center"
        )}
      >
        <h1 className={cn("text-5xl")}>$BUILD with the best.</h1>
        <p className={cn("text-xl")}>
          $BUILD <strong>a team</strong> from our handpicked talent pool of
          Fortune 500-level creative, science, technology, engineering, math
          (STEM), and business professionals — perfectly matched to your
          project&apos;s needs.
        </p>
        <div
          className={cn(
            "flex flex-col",
            "lg: flex flex-row justify-around w-full"
          )}
        >
          <button className="bg-white text-black">Get Started</button>
          <button className="bg-white text-black">Schedule a Call</button>
        </div>
      </div>
      <img className="w-full" src="hero.webp" alt="Hero Image"></img>
    </section>
  );
}

export default Hero;
