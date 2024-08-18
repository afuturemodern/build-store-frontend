import { cn } from "@/utils/cn";
import React from "react";

function Splash() {
  return (
    <div className={cn("lg:flex lg:w-1/2 bg-[#BBDCE3]")}>
      <a href="/" className={cn("inline-block p-8")}>
        <img className="h-16 aspect-square" src="logo.png" alt="Logo" />
      </a>
      <div
        className={cn(
          "hidden",
          "h-lvh flex flex-col justify-center items-start px-8 box-border"
        )}
      >
        <div className="flex flex-col gap-8 max-w-lg text-white text-lg">
          <h1 className="leading-snug text-5xl text-white font-extrabold block box-border">
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
  );
}

export default Splash;
