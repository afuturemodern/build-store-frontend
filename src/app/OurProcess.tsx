import { cn } from "@/utils/cn";
import React from "react";
import processSteps from "./ProcessSteps.json";

function OurProcess() {
  return (
    <section className={cn("bg-black", "flex flex-col")}>
      <div
        className={cn("bg-[#bbdce3]", "w-full", "py-12", "px-6", "relative")}
      >
        <h2 className={cn("text-3xl font-bold")}>our process.</h2>
      </div>
      {processSteps.map((step, idx, oArr) => {
        return (
          <div
            key={idx}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)), url(${step.img_url})`,
            }}
            className={cn(
              "text-white",
              "bg-cover",
              "bg-center",
              "min-h-screen",
              // "bg-black",
              // "w-lvw",
              "py-12",
              "px-6",
              "flex flex-col",
              "justify-start",
              "items-start"
            )}
          >
            {/* <img className="w-lvw" src={step.img_url} alt={step.alt}></img> */}
            <h3 className={cn("text-4xl", "pb-4")}>{step.name}</h3>
            <p className={cn("text-2xl")}>{step.description}</p>
          </div>
        );
      })}
    </section>
  );
}

export default OurProcess;
