"use client";
import Splash from "@/app/signup/Splash";
import Form from "@/app/signup/Form";
import { cn } from "@/utils/cn";
import React, { use } from "react";
import { SignupFormContextProvider } from "./SignupFormContext";

function GettingStarted() {
  return (
    <SignupFormContextProvider>
      <div className={cn("flex flex-col items-center", "lg:flex-row")}>
        <Splash />
        <Form />
      </div>
    </SignupFormContextProvider>
  );
}

export default GettingStarted;
