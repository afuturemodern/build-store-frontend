import Splash from "@/components/Splash";
import { cn } from "@/utils/cn";
import React from "react";

function GettingStarted() {
  return (
    <div className="flex justify-between">
      <Splash />
      <section className={cn("md:w-1/2 p-12")}>
        <h1 className="text-5xl font-bold py-2">Let's get started.</h1>
        <h2 className="text-md font-bold py-2">Tell us about your project.</h2>
        <form>
          <div className="flex">
            <section>
              <label className="text-xs">First Name</label>
              <input className="border" type="text"></input>
            </section>
            <section>
              <label className="text-xs">Last Name</label>
              <input className="border" type="text"></input>
            </section>
          </div>
          <section>Work Email</section>
          <section>Phone</section>
          <section>Project Description</section>
          <section>
            <button>Submit</button>
          </section>
        </form>
      </section>
    </div>
  );
}

export default GettingStarted;
