import { cn } from "@/utils/cn";
import React from "react";

function Splash() {
  return (
    <div className={cn("bg-red-500 w-1/2 h-lvh", "hidden md:flex flex-col content-center justify-center items-center")}>
      <h1 className="w-1/2 text-5xl font-bold py-2">$BUILD with the best and brightest.</h1>
      <h2 className="w-1/2 text-md py-2">
        Fill out this form to access future modern's invite-only talent pool of
        Fortune 500-level engineers, scientists, mathematicians, technologists,
        designers, artists, business administrators, and credentialed professionals.
      </h2>
    </div>
  );
}

export default Splash;
