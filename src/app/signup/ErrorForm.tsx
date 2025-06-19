import React from "react";
import { SignupFormContext } from "./SignupFormContext";

function ErrorForm() {

  const {resetForm} = React.useContext(SignupFormContext);
  return (
    <div>
      <div>Oh No</div>
      <button
        onClick={() => {
          resetForm();
        }}
      >
        Go Back
      </button>
    </div>
  );
}

export default ErrorForm;
