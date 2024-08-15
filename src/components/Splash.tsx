import { cn } from "@/utils/cn";
import React from "react";

function Splash() {
  return (
    <div className={cn("flex-[0_0_50%] bg-red-500")}>
      <div className="h-lvh flex flex-col pl-[25%] pt-8 pb-24">
        <a href="/" className={cn("inline-block")}>
          <img className="h-16" src="logo.png" alt="Logo" />
        </a>
        <div className="h-lvh flex flex-col justify-center items-start box-border">
          <div className="max-w-lg text-white text-lg">
            <h1 className="mt-0 mb-4 text-5xl text-white font-extrabold block box-border">
              $BUILD with the best and brightest.
            </h1>
            <h2 className="box-border block isolate">  
              Fill out this form to hire future modern's invite-only talent pool
              of Fortune 500-level engineers, scientists, mathematicians,
              technologists, designers, artists, business administrators, and
              credentialed professionals.
            </h2>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Splash;
