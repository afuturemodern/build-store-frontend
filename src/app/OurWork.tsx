import { cn } from "@/utils/cn";
import React from "react";
import portfolio from "./portfolio.json";

function OurWork() {
  return (
    <section
      className={cn(
        "bg-black",
        "flex flex-col"
      )}
    >
    <div
      className={cn("bg-[#bbdce3]", 
      "text-black",
      "w-full", 
      "py-12", 
      "px-6", 
      "relative"
      )}>
      <h2 className={cn("text-3xl font-bold")}>our work.</h2>
    </div>
      <div>
        {portfolio.map((work, idx, oArr) => {
          return (
            <div key={idx}
            style={{ backgroundImage: `url(${work.img_url})` }}
            className={cn(
              "text-white",
              "bg-cover",
              "bg-center",
              "min-h-screen",
              "py-12", 
              "px-6",
              "flex flex-col",
              "justify-start",
              "items-start"
            )}>
              <a href={work.link}>
                <h3 className={cn("text-2xl font-bold")}>{work.name}</h3>
                <p>{work.description}</p>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default OurWork;
