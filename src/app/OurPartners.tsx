import { cn } from "@/utils/cn";
import React from "react";
import affiliates from "./affiliates.json";
import { Affiliate } from "@/components/Affiliate";

function OurPartners() {
  return (
    <section className={cn("bg-black", "flex flex-col")}>
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
        <h2 className={cn("text-3xl font-bold")}>our partners.</h2>
      </div>
      <div
        className={cn(
          "flex flex-col items-center",
          "py-4",
          "w-full",
          "m-auto",
          "gap-2"
        )}
      >
        {affiliates.map((partner, idx, oArr) => {
          return (
            <Affiliate
              img_url={partner.img_url}
              link={partner.link}
              name={partner.name}
              tagline={partner.tagline}
              description={partner.description}
              key={partner.name}
              className={cn("w-full")}
            ></Affiliate>
            // <div key={idx}>
            //   <div className={cn("flex flex-col justify-start gap-2")}>
            //     <a href={partner.link}>
            //       <img className={cn("w-screen")} src={partner.img_url}></img>
            //     </a>
            //     <h3 className="text-xs">{partner.name}</h3>
            //   </div>
            // </div>
          );
        })}
      </div>
    </section>
  );
}

export default OurPartners;
