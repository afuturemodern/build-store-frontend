import { cn } from "@/utils/cn";
import React from "react";
import affiliates from "./affiliates.json";

function OurPartners() {
  return (
    <section className={cn("bg-black", 
    "flex flex-col"
    )}>
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
        <h1 className={cn("text-3xl font-bold")}>our partners.</h1>
      </div>
      <div className={cn(
        "flex flex-col items-center",
        "w-4/5",
        "m-auto",
        "gap-2")}>
        {affiliates.map((partner, idx, oArr) => {
          return (
            <div key={idx}>
              <a href={partner.link}>
                <img className={cn("w-screen")} src={partner.img_url}></img>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default OurPartners;
