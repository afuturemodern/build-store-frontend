"use client";
import React, { useContext } from "react";
import ErrorForm from "./ErrorForm";
import InitialForm from "./InitialForm";
// import InitialForm from "./InitFormOld";
import SuccessForm from "./SuccessForm";
import { SignupFormContext } from "./SignupFormContext";
import { cn } from "@/utils/cn";

function Form() {
  const { formStatus } = useContext(SignupFormContext);

  return (
    <div className={cn(
      "w-full"
    )}>
      {formStatus === "init" ? (
        <InitialForm />
      ) : formStatus.startsWith("error") ? (
        <ErrorForm />
      ) : formStatus === "success" ? (
        <SuccessForm />
      ) : (
        <ErrorForm />
      )}
    </div>
  );
}

export default Form;
