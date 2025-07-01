import { cn } from "@/utils/cn";
import React from "react";
import Image from "next/image";
import featuredArtists from "./FeaturedArtists.json";

function OurTeam() {
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
            "text-2xl sm:text-3xl lg:text-4xl font-bold mb-2",
            "text-left"
          )}>
            our team.
          </h2>
          <p className={cn(
            "text-lg sm:text-xl text-gray-700 font-medium",
            "text-left"
          )}>
            core contributors
          </p>
        </div>
      </div>

      {/* Team Grid */}
      <div className={cn(
        "max-w-7xl mx-auto w-full",
        "py-8 sm:py-12 lg:py-16",
        "px-4 sm:px-6 lg:px-8"
      )}>
        <div className={cn(
          "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6",
          "gap-4 sm:gap-6 lg:gap-8"
        )}>
          {featuredArtists.map((artist, idx) => {
            return (
              <div 
                className={cn(
                  "group cursor-pointer transition-all duration-300",
                  "hover:transform hover:scale-105"
                )}
                key={idx}
              >
                <div className={cn(
                  "flex flex-col items-center text-center",
                  "space-y-3 sm:space-y-4"
                )}>
                  {/* Profile Image */}
                  <div className={cn(
                    "relative overflow-hidden",
                    "w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28",
                    "rounded-full",
                    "ring-2 ring-gray-700 group-hover:ring-[#bbdce3]",
                    "transition-all duration-300"
                  )}>
                    <Image
                      src={artist.img_url}
                      alt={artist.name}
                      fill
                      className={cn(
                        "object-cover",
                        "transition-transform duration-300",
                        "group-hover:scale-110"
                      )}
                      sizes="(max-width: 640px) 80px, (max-width: 1024px) 96px, 112px"
                    />
                  </div>

                  {/* Name and Role */}
                  <div className="space-y-1">
                    <h3 className={cn(
                      "text-white font-medium",
                      "text-sm sm:text-base lg:text-lg",
                      "group-hover:text-[#bbdce3] transition-colors duration-300"
                    )}>
                      {artist.name}
                    </h3>
                    <p className={cn(
                      "text-gray-400 text-xs sm:text-sm",
                      "leading-tight",
                      "group-hover:text-gray-300 transition-colors duration-300"
                    )}>
                      {artist.role}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
