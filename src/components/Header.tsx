import { cn } from "@/utils/cn";
import React from 'react'

function Header() {
  return (
    <header className={cn(
        "flex justify-between items-center",
        "bg-white",
        "p-4"
        )}>
            <a href="/">
                <img className={cn("h-16"
                // , "aspect-square"
                    )} src="fm clr turtle alt full.svg" alt="Logo" />
            </a>
            <h2 className="text-center">
                An ecosystem for world-$BUILDing people and products.
            </h2>
            <button className="bg-black text-white">
                $BUILD a team
            </button>
        </header>
  )
}

export default Header;