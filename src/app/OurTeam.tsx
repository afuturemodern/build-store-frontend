import { cn } from "@/utils/cn";
import React from "react";
import featuredArtists from "./FeaturedArtists.json";

function OurTeam() {
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
        <h2 className={cn("text-3xl font-bold")}>our team.</h2>
        <p>
          core contributors
        </p>
      </div>
      <div
        className={cn(
          "text-white",
          "gap-6",
          "flex flex-wrap justify-around",
          "items-center",
          "content-center"
        )}
      >
        {featuredArtists.map((artist, idx, oArr) => {
          return (
            <div className={cn("p-6", 
            "min-w-48", 
            "h-full"
            )} 
            key={idx}>
              <div className={cn("flex flex-col justify-start gap-2")}>
                <img className={cn("h-56")} src={artist.img_url}></img>
                <h3 className="text-xs">{artist.name}</h3>
                <p className="text-xs">{artist.role}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default OurTeam;
