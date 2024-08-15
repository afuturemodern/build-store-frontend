import Splash from "@/components/Splash";
import { cn } from "@/utils/cn";
import React from "react";

function GettingStarted() {
  return (
    <div className="flex justify-start items-stretch flex-wrap">
      <Splash />
      <div className={cn("flex-[0_0_50%]")}>
        <div className="flex flex-col items-center">
          <form className="h-lvh flex flex-col justify-center py-8">
            <div className="flex">
              <section className="flex flex-col py-2">
                <label className="text-xs flex-1 box-border">First Name</label>
                <input className="border" type="text"></input>
              </section>
              <section className="flex flex-col py-2 pl-4">
                <label className="text-xs">Last Name</label>
                <input className="border" type="text"></input>
              </section>
            </div>
            <section className="flex flex-col py-2">
              <label className="text-xs">Work Email</label>
              <input className="border pl-4" type="text"></input>
            </section>
            <section className="flex flex-col py-2">
              <label className="text-xs">Phone</label>
              <input className="border" type="text"></input>
            </section>
            <section className="flex flex-col py-2">
              <label className="text-xs">Project Description</label>
              <input className="border" type="text"></input>
            </section>
            <section className="py-2">
              <button className="bg-black text-white px-8 py-4">Submit</button>
            </section>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GettingStarted;
