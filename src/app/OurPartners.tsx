import { cn } from "@/utils/cn";
import React from "react";
import affiliates from "./affiliates.json";
import { Affiliate } from "@/components/Affiliate";

function OurPartners() {
  return (
    <section className={cn("bg-black", "flex flex-col")}>
      {/* Header Section */}
      <div
        className={cn(
          "bg-[#bbdce3]",
          "text-black",
          "w-full",
          "py-8 sm:py-12 lg:py-16",
          "px-4 sm:px-6 lg:px-8",
          "relative"
        )}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className={cn(
            "text-2xl sm:text-3xl lg:text-4xl font-bold",
            "text-left"
          )}>
            our partners.
          </h2>
        </div>
      </div>

      {/* Partners Grid */}
      <div className={cn(
        "max-w-7xl mx-auto w-full",
        "py-8 sm:py-12 lg:py-16",
        "px-4 sm:px-6 lg:px-8"
      )}>
        <div className={cn(
          "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
          "gap-8 sm:gap-12 lg:gap-16"
        )}>
          {affiliates.map((partner, idx) => {
            return (
              <Affiliate
                img_url={partner.img_url}
                link={partner.link}
                name={partner.name}
                tagline={partner.tagline}
                description={partner.description}
                key={partner.name}
                className={cn(
                  "group transition-all duration-300"
                )}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default OurPartners;
