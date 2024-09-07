import { cn } from "@/utils/cn";
import React from 'react'
import Header from "./Header";
import Hero from "./Hero";

function Homepage() {
  return (
    <body
        className={cn(
        "flex flex-col justify-center align-center", 
        "bg-white"
    )}
    >
        <Header/>

        <Hero/>
    </body>
  )
}

export default Homepage;