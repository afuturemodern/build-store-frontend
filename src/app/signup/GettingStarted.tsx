import Splash from "@/app/signup/Splash";
import { cn } from "@/utils/cn";
import React from "react";

function GettingStarted() {
  return (
    <div className={cn("flex flex-col", "lg:flex-row")}>
      <Splash />
      <form />
    </div>
  );
}

export default GettingStarted;
