import { cn } from "@/utils/cn";
import React from "react";
import CompetencyList from "./CompetencyList";

function AboutUs() {
  return (
    <section
      className={cn(
        "bg-black text-white"
        // "text-center"
      )}
    >
      <div
        className={cn(
          "bg-[#bbdce3]",
          "text-black",
          "w-full",
          "py-12",
          "px-6",
          "relative"
        )}
      >
        <h2 className={cn("text-3xl font-bold")}>our story.</h2>
        <p>
          future modern is a talent agency at the union of art and science. We
          leverage our one-of-a-kind interdisciplinary network to provide
          best-in-class services to select clients.
        </p>
      </div>
      <CompetencyList />
    </section>
  );
}

export default AboutUs;
