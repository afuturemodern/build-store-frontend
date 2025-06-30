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
                // Responsive heights optimized for different content types
                work.name === "Dossiers" && "min-h-[45vh] sm:min-h-[55vh] lg:min-h-[65vh] xl:min-h-[70vh]",
                work.name === "2050 Vision" && "min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh] xl:min-h-[75vh]",
                work.name === "Southern Power Fund" && "min-h-[45vh] sm:min-h-[55vh] lg:min-h-[65vh] xl:min-h-[70vh]",
                work.name === "DataXplorer" && "min-h-[48vh] sm:min-h-[58vh] lg:min-h-[68vh] xl:min-h-[73vh]",
                work.name === "Catalog" && "min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh] xl:min-h-[75vh]",
                work.name === "mayk.it" && "min-h-[45vh] sm:min-h-[55vh] lg:min-h-[65vh] xl:min-h-[70vh]",
                work.name === "Immigrantly" && "min-h-[48vh] sm:min-h-[58vh] lg:min-h-[68vh] xl:min-h-[73vh]",
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
                  // Optimized object positioning for each project
                  work.name === "Dossiers" && "object-cover object-center",
                  work.name === "2050 Vision" && "object-cover object-top",
                  work.name === "Southern Power Fund" && "object-cover object-center",
                  work.name === "DataXplorer" && "object-cover object-center",
                  work.name === "Catalog" && "object-cover object-center",
                  work.name === "mayk.it" && "object-cover object-center",
                  work.name === "Immigrantly" && "object-cover object-center"
                )}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 50vw"
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
                "p-6 sm:p-8 lg:p-10",
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
                    "text-white font-bold mb-3 sm:mb-4",
                    "text-xl sm:text-2xl lg:text-3xl",
                    "group-hover:text-[#bbdce3] transition-colors duration-300"
                  )}>
                    {work.name}
                  </h3>
                  <p className={cn(
                    "text-gray-200 leading-relaxed",
                    "text-base sm:text-lg",
                    "max-w-lg"
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
