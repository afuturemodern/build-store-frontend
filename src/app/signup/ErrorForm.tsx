import React from "react";
import { SignupFormContext } from "./SignupFormContext";
import { cn } from "@/utils/cn";
import Button from "@/components/Button";

function ErrorForm() {
  const { resetForm } = React.useContext(SignupFormContext);

  const errorMessageTitle = "We're glad you're so eager!";
  const errorMessage = "Don't worry. We've already recorded your information.";
  return (
    <section
      id="error_section"
      className={cn("h-screen w-full", "pt-32 px-4", "flex flex-col gap-2")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={cn("h-10 w-10")}
      >
        <path d="M19.562 11.32l-1.106.528c.518 1.058.329 2.507-.455 3.383l.944.769c1.1-1.215 1.399-3.177.617-4.68zm-14.506 4.68l.944-.769c-.784-.876-.973-2.326-.455-3.383l-1.107-.528c-.782 1.503-.483 3.465.618 4.68zm6.944-14c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.001 15.203l-.462-.58c-1.263.819-2.683 1.308-4.538 1.308s-3.275-.489-4.538-1.308l-.462.58c.931 1.161 2.71 2.797 5 2.797s4.069-1.636 5-2.797zm-8.501-7.203c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5zm7 0c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5z" />
      </svg>
      <h1 className={cn("text-xl font-extrabold")}>{errorMessageTitle}</h1>
      <p className="text-xs pb-4">{errorMessage}</p>
      <Button
        onClick={() => {
          resetForm();
        }}
      >
        Go Back
      </Button>
    </section>
  );
}

export default ErrorForm;
