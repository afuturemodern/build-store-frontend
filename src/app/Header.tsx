import { cn } from "@/utils/cn";
import React from 'react'

function Header() {
  return (
    <header className={cn(
        "flex justify-between items-center",
        "bg-white",
        "p-4"
        )}>
            <a href="/" className={cn("")}>
                <img className="h-16 aspect-square" src="logo.png" alt="Logo" />
            </a>
            <h2>
                An ecosystem for world-$BUILDing people and products.
            </h2>
            <button>
                $BUILD a team
            </button>
        </header>
  )
}

export default Header;