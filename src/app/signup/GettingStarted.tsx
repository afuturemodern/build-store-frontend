import Splash from "@/app/signup/Splash";
import Form from "@/app/signup/Form";
import { cn } from "@/utils/cn";
import React from "react";

function GettingStarted() {
  return (
    <div className={cn("flex flex-col items-center", "lg:flex-row")}>
      <Splash />
      <Form />
    </div>
  );
}

export default GettingStarted;
