"use client";
import React, { useContext } from "react";
import ErrorForm from "./ErrorForm";
import InitialForm from "./InitialForm";
import SuccessForm from "./SuccessForm";
import { SignupFormContext } from "./SignupFormContext";

function Form() {

  const { formStatus } = useContext(SignupFormContext);
  
  return formStatus === "init" ? (
    <InitialForm />
  ) : formStatus.startsWith("error") ? (
    <ErrorForm />
  ) : formStatus === "success" ? (
    <SuccessForm />
  ) : (
    <ErrorForm />
  );
}

export default Form;
