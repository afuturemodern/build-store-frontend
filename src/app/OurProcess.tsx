import { cn } from "@/utils/cn";
import React from "react";
import processSteps from "./ProcessSteps.json";

function OurProcess() {
  return (
    <section
      className={cn(
        "bg-black text-white",
        "flex flex-col",
        "text-center",
        "items-center"
      )}
    >
      <h1 className="text-2xl">Our Process</h1>
      <div className={cn(
        )}>
        {processSteps.map((step, idx, oArr) => {
          return (
            <div key={idx}>
              <img className="w-lvw" 
              src={step.img_url} 
              alt={step.alt}></img>
              <h2 className="text-xl">{step.name}</h2>
              <p>{step.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default OurProcess;
