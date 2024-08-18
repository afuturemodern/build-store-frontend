import Splash from "@/components/Splash";
import { cn } from "@/utils/cn";
import React from "react";

function GettingStarted() {
  return (
    <div className={cn(
    "flex flex-col lg:flex-row", 
    "justify-start items-stretch"
    )}>
      <Splash />
      <form className={cn(
        "flex flex-col gap-4", 
        "justify-center",
        "content-center",
        "w-1/2",
        "lg:px-24"
        )}>
        <h1>Sign up to $BUILD your team.</h1>
        <div className="flex flex-col md:flex-row">
          <section className="flex flex-col">
            <label className="text-xs flex-1 box-border">First Name</label>
            <input className="border" type="text"></input>
          </section>
          <section className="flex flex-col">
            <label className="text-xs">Last Name</label>
            <input className="border" type="text"></input>
          </section>
        </div>
        <section className="flex flex-col">
          <label className="text-xs">Work Email</label>
          <input className="border" type="text"></input>
        </section>
        <section className="flex flex-col">
          <label className="text-xs">Phone</label>
          <input className="border" type="text"></input>
        </section>
        <section className="flex flex-col">
          <label className="text-xs">Project Description</label>
          <input className="border" type="text"></input>
        </section>
        <section className="">
          <button className="bg-black text-white">Submit</button>
        </section>
      </form>
    </div>
  );
}

export default GettingStarted;
