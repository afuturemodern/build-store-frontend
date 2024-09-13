import { cn } from "@/utils/cn";
import React from 'react'
import Header from "./Header";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import OurProcess from "./OurProcess";
import OurTeam from "./OurTeam";
import OurWork from "./OurWork";

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
        <OurProcess/>
        <AboutUs/>
        <OurTeam/>
        <OurWork/>
    </body>
  )
}

export default Homepage;