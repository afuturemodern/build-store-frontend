import { cn } from "@/utils/cn";
import React from "react";
import processSteps from "./ProcessSteps.json";

function OurProcess() {
  return (
    <section className={cn("bg-black", "flex flex-col")}>
      <div
        className={cn("bg-[#bbdce3]", "w-full", "py-12", "px-6", "relative")}
      >
        <h1 className={cn("text-3xl font-bold")}>our process.</h1>
      </div>
      {processSteps.map((step, idx, oArr) => {
        return (
          <div
            key={idx}
            style={{ backgroundImage: `url(${step.img_url})` }}
            className={cn(
              "text-white",
              "bg-cover",
              "bg-center",
              "min-h-screen",
              // "w-lvw", 
              "py-12", 
              "px-6",
              "flex flex-col",
              "justify-start",
              "items-start"
            )}
          >
            {/* <img className="w-lvw" src={step.img_url} alt={step.alt}></img> */}
            <h2 className={cn("text-2xl font-bold")}>{step.name}</h2>
            <p>{step.description}</p>
          </div>
        );
      })}
    </section>
  );
}

export default OurProcess;
