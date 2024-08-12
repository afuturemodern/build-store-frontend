import Splash from "@/components/Splash";
import { cn } from "@/utils/cn";
import React from "react";

function GettingStarted() {
  return (
    <div className="flex justify-between content-center items-center">
      <Splash />
      <section className={cn("md:w-1/2 p-12")}>
        <form>
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
      </section>
    </div>
  );
}

export default GettingStarted;
