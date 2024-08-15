import { cn } from "@/utils/cn";
import React from "react";

function Splash() {
  return (
    <div className={cn("flex-[0_0_50%] bg-red-500")}>
      <a href="/" className={cn("hidden top-0.5","w-9 h-8 absolute bottom-auto left-14 right-auto max-w-full inline-block")}>
          <img className="h-16" src="logo.png" alt="Logo" />
        </a>
        <div className="w-full h-lvh flex flex-col justify-center items-center px-6 py-24 box-border">
          <div className="max-w-lg text-white text-lg">
            <h1 className="mt-0 mb-4 text-5xl text-white font-extrabold block box-border">
              $BUILD with the best and brightest.
            </h1>
            <h2 className="box-border block isolate">  
              Fill out this form to access future modern's invite-only talent pool
              of Fortune 500-level engineers, scientists, mathematicians,
              technologists, designers, artists, business administrators, and
              credentialed professionals.
            </h2>
          </div>
        </div>
    </div>
  );
}

export default Splash;
