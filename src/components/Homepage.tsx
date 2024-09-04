import { cn } from "@/utils/cn";
import React from "react";

export default function Homepage() {
  return (
    <body
      className={cn(
        "flex flex-col justify-center align-center", 
        "bg-black"
    )}
    >
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

        <section>
            <h1>
                $BUILD with the best.
            </h1>
            <p>
                $BUILD <strong>a team</strong> from our handpicked talent pool of 
            Fortune 500-level creative, science, technology, engineering, math (STEM), and business professionals — 
            perfectly matched your project’s needs.
            </p>
            <div>
                <button>Get Started</button>
                <button>Schedule a Call</button>
            </div>
        </section>
    </body>
  );
}
