import { cn } from "@/utils/cn";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import portfolio from "./portfolio.json";

function OurWork() {
  return (
    <section
      className={cn(
        "bg-black",
        "flex flex-col"
      )}
    >
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
            our work.
          </h2>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className={cn(
        "grid grid-cols-1 lg:grid-cols-2",
        "gap-0"
      )}>
        {portfolio.map((work, idx) => {
          return (
            <div 
              key={idx}
              className={cn(
                "relative group overflow-hidden",
                "min-h-[300px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[500px] xl:min-h-[550px]",
                "flex items-end"
              )}
            >
              {/* Background Image */}
              <Image
                src={work.img_url}
                alt={work.name}
                fill
                className={cn(
                  "transition-transform duration-700",
                  "group-hover:scale-105",
                  "object-cover",
                  work.name === "2050 Vision" ? "object-top" : "object-center"
                )}
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={idx < 2}
              />
              
              {/* Overlay */}
              <div className={cn(
                "absolute inset-0",
                "bg-black/20 group-hover:bg-black/40",
                "transition-colors duration-300"
              )} />
              
              {/* Content */}
              <div className={cn(
                "relative z-10 w-full",
                "p-4 sm:p-6 md:p-8 lg:p-10",
                "bg-gradient-to-t from-black/90 via-black/50 to-transparent"
              )}>
                <Link 
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "block group-hover:transform group-hover:translate-y-[-2px]",
                    "transition-transform duration-300",
                    "focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded-md"
                  )}
                >
                  <h3 className={cn(
                    "text-white font-bold mb-2 sm:mb-3 lg:mb-4",
                    "text-lg sm:text-xl md:text-2xl lg:text-3xl",
                    "group-hover:text-[#bbdce3] transition-colors duration-300"
                  )}>
                    {work.name}
                  </h3>
                  <p className={cn(
                    "text-gray-200 leading-relaxed",
                    "text-sm sm:text-base lg:text-lg",
                    "max-w-full lg:max-w-lg"
                  )}>
                    {work.description}
                  </p>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default OurWork;
