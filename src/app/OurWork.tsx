import { cn } from "@/utils/cn";
import React from "react";
import portfolio from "./portfolio.json";

function OurWork() {
  return (
    <section
      className={cn(
        "bg-black text-white",
        "flex flex-col",
        "text-center",
        "items-center"
      )}
    >
      <h1 className="text-2xl">Our Work</h1>
      <div>
        {portfolio.map((work, idx, oArr) => {
          return (
            <div key={idx}>
              <a href={work.link}>
                <img className="w-lvw" src={work.img_url}></img>
                <h2>{work.name}</h2>
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
