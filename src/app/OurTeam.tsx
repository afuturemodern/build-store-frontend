import { cn } from "@/utils/cn";
import React from "react";
import featuredArtists from "./FeaturedArtists.json";

function OurTeam() {
  return (
    <section
      className={cn(
        "bg-black text-white",
        "flex flex-col",
        "text-center",
        "items-center"
      )}
    >
      <h1 className="text-2xl">Our Team</h1>
      <h2 className="text-xl">Core Contributors</h2>
      <div className={cn(
        "gap-6",
        "flex flex-wrap justify-around",
        "items-center",
        "content-center"
      )}>
        {featuredArtists.map((artist, idx, oArr) => {
          return (
            <div className={cn(
                "p-6",
                "flex flex-col items-center gap-2",
                "w-[200px]"
            )}key={idx}>
              <img className={cn(
              )} src={artist.img_url}></img>
              <h3 className="text-xs">{artist.name}</h3>
              <p className="text-xs">{artist.role}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default OurTeam;
