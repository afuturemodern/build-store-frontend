import { cn } from "@/utils/cn";
import React from 'react'
import Header from "./Header";

function Homepage() {
  return (
    <body
        className={cn(
        "flex flex-col justify-center align-center", 
        "bg-black"
    )}
    >
        <Header/>

        <section className={cn(
            "text-white"
        )}>
            <h1>
                $BUILD with the best.
            </h1>
            <p>
                $BUILD <strong>a team</strong> from our handpicked talent pool of 
            Fortune 500-level creative, science, technology, engineering, math (STEM), and business professionals — 
            perfectly matched your project&apos;s needs.
            </p>
            <div>
                <button>Get Started</button>
                <button>Schedule a Call</button>
            </div>
        </section>
    </body>
  )
}

export default Homepage;