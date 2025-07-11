import { cn } from "@/utils/cn";
import React from "react";
import CompetencyList from "./CompetencyList";

function AboutUs() {
  return (
    <section className={cn("bg-black text-white")}>
      <header
        className={cn(
          "bg-[#bbdce3]",
          "text-black",
          "w-full",
          "py-8 sm:py-12 lg:py-16",
          "px-4 sm:px-6 lg:px-8",
          "relative"
        )}
      >
        <h1
          className={cn(
            "text-2xl sm:text-3xl lg:text-4xl font-bold text-left",
            "mb-4 sm:mb-6"
          )}
        >
          our story.
        </h1>
        <p
          className={cn(
            "text-lg sm:text-xl lg:text-2xl",
            "leading-relaxed",
            "text-gray-700"
          )}
        >
          future modern is a talent agency at the union of art and science. We
          leverage our one-of-a-kind interdisciplinary network to provide
          best-in-class services to select clients.
        </p>
      </header>
      <CompetencyList />
    </section>
  );
}

export default AboutUs;
