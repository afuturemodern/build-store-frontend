import React from 'react'
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import OurProcess from "./OurProcess";
import OurTeam from "./OurTeam";
import OurWork from "./OurWork";
import OurPartners from "./OurPartners";

function Homepage() {
  return (
    <div>
      <Hero/>
      <OurProcess/>
      <AboutUs/>
      <OurTeam/>
      <OurWork/>
      <OurPartners/>
    </div>
  )
}

export default Homepage;