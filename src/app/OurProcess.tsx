import { cn } from "@/utils/cn";
import React from "react";
import processSteps from "./ProcessSteps.json";

function OurProcess() {
  return (
    <section className={cn("bg-black", "flex flex-col")}>
      <div
        className={cn(
          "bg-[#bbdce3]", 
          "w-full", 
          "py-8 sm:py-12 lg:py-16", 
          "px-4 sm:px-6 lg:px-8", 
          "relative"
        )}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className={cn("text-2xl sm:text-3xl lg:text-4xl font-bold text-left")}>our process.</h2>
        </div>
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
              "min-h-[70vh] sm:min-h-[80vh] lg:min-h-screen",
              "py-12 sm:py-16 lg:py-20",
              "px-4 sm:px-6 lg:px-8",
              "flex flex-col",
              "justify-end",
              "items-start"
            )}
          >
            <div className="max-w-4xl">
              <h3 className={cn(
                "text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold", 
                "mb-4 sm:mb-6"
              )}>
                {step.name}
              </h3>
              <p className={cn(
                "text-lg sm:text-xl lg:text-2xl", 
                "leading-relaxed max-w-3xl"
              )}>
                {step.description}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default OurProcess;
