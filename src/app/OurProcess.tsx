import { cn } from "@/utils/cn";
import React from 'react'

function OurProcess() {
  return (
    <section className={cn(
      "bg-black text-white", 
      "flex flex-col",
      "text-center",
      "items-center"
      )}>
      <h1 className="text-2xl">Our Process</h1>
      <img className="w-full" 
      src="/process/understand.webp" 
      alt="People discussing with speech bubbles containing puzzle pieces"></img>
      <h3>Understand</h3>
      <p>your existing business model and practices</p>
      <img className="w-full" 
      src="/process/analyze.webp" 
      alt="Brain icon and group of people discussing"></img>
      <h3>Analyze</h3>
      <p>your current business processes and structure</p>
      <img className="w-full" 
      src="/process/strategize.png" 
      alt="Two people playing chess observing the board"></img>
      <h3>Strategize</h3>
      <p>to identify and select the best action course</p>
      <img className="w-full" 
      src="/process/implement.png" 
      alt="Designed diagram of conceptual icons"></img>
      <h3>Implement</h3>
      <p>new strategic frameworks</p>
      <img className="w-full" 
      src="/process/execute.png" 
      alt="Iconographic drawing with charts, gears, and productivity symbols"></img>
      <h3>Execute</h3>
      <p>against those frameworks leveraging our network of 700+ service provider partners and members</p>

    </section>
  )
}

export default OurProcess