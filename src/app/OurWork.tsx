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
      <h1 className={cn("text-3xl font-bold")}>our work.</h1>
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
              // "w-lvw", 
              "py-12", 
              "px-6",
              "flex flex-col",
              "justify-start",
              "items-start"
            )}>
              <a href={work.link}>
                {/* <img className="w-lvw" src={work.img_url}></img> */}
                <h2 className={cn("text-2xl font-bold")}>{work.name}</h2>
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
