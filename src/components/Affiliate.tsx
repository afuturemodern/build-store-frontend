import { cn } from "@/utils/cn";
import { ClassValue } from "clsx";
import Image from "next/image";
import Link from "next/link";

export function Affiliate({
  img_url,
  link,
  name,
  tagline,
  description,
  className
}: {
  img_url: string;
  link: string;
  name: string;
  tagline: string;
  description: string;
  className?: ClassValue;
}) {
  return (
    <div className={cn("flex flex-col text-center", className)}>
      {/* Logo Section */}
      <Link 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "block mb-6 sm:mb-8",
          "focus:outline-none focus:ring-2 focus:ring-[#bbdce3] focus:ring-offset-2 focus:ring-offset-black rounded-md",
          "transition-transform duration-300 hover:scale-105"
        )}
      >
        <div className="flex items-center justify-center h-20 sm:h-24 lg:h-28">
          <Image 
            width={300} 
            height={120} 
            src={img_url} 
            alt={`${name} logo`}
            className={cn(
              "w-auto object-contain opacity-80 hover:opacity-100",
              "transition-opacity duration-300",
              // Responsive sizing by partner
              name === "Notion" && "max-h-10 sm:max-h-12 lg:max-h-14 max-w-[120px] sm:max-w-[140px] lg:max-w-[160px]",
              name === "Gatsby" && "max-h-12 sm:max-h-16 lg:max-h-20 max-w-[140px] sm:max-w-[180px] lg:max-w-[220px]",
              name === "Versabot" && "max-h-14 sm:max-h-18 lg:max-h-22 max-w-[160px] sm:max-w-[200px] lg:max-w-[240px]"
            )}
          />
        </div>
      </Link>

      {/* Content Section */}
      <div className="space-y-3 sm:space-y-4">
        <Link 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "group/link focus:outline-none focus:ring-2 focus:ring-[#bbdce3] focus:ring-offset-2 focus:ring-offset-black rounded-md"
          )}
        >
          <h2 className={cn(
            "text-white font-bold",
            "text-xl sm:text-2xl",
            "group-hover/link:text-[#bbdce3] transition-colors duration-300"
          )}>
            {name}
          </h2>
        </Link>
        
        <h3 className={cn(
          "text-[#bbdce3] font-medium uppercase tracking-wider",
          "text-xs sm:text-sm"
        )}>
          {tagline}
        </h3>
        
        <p className={cn(
          "text-gray-400 leading-relaxed",
          "text-sm sm:text-base max-w-sm mx-auto"
        )}>
          {description}
        </p>
      </div>
    </div>
  );
}
