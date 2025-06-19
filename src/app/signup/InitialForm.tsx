import { cn } from "@/utils/cn";
import React from "react";
import { SignupFormContext } from "./SignupFormContext";

function InitialForm() {
  const { submitForm, loading } = React.useContext(SignupFormContext);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
        const firstname = formData.get("first_name") as string;
        const lastname = formData.get("last_name") as string;
        const email = formData.get("email_address") as string;
        const phone = formData.get("phone_number") as string;
        // const project_description = formData.get("project_description");

        submitForm({ firstname, lastname, email, phone });
      }}
      className={cn(
        "flex flex-col gap-4 bg-white",
        "justify-center",
        "h-lvh",
        "max-w-[345px]",
        "px-8"
      )}
    >
      <h1>Sign up to $BUILD your team.</h1>
      <div className={cn("flex -mx-4")}>
        <section className={cn("flex flex-col w-1/2 px-4")}>
          <label className={cn("text-xs")}>First Name</label>
          <input
            disabled={loading}
            name="first_name"
            className="border"
            type="text"
          ></input>
        </section>
        <section className="flex flex-col w-1/2 px-4">
          <label className="text-xs">Last Name</label>
          <input
            disabled={loading}
            name="last_name"
            className="border"
            type="text"
          ></input>
        </section>
      </div>
      <section className="flex flex-col">
        <label className="text-xs">Email Address</label>
        <input
          disabled={loading}
          name="email_address"
          className="border w-full"
          type="text"
        ></input>
      </section>
      <section className="flex flex-col">
        <label className="text-xs">Phone Number</label>
        <input
          disabled={loading}
          name="phone_number"
          className="border"
          type="text"
        ></input>
      </section>
      <section className="flex flex-col">
        <label className="text-xs">Project Description</label>
        <input
          disabled={loading}
          name="project_description"
          className="border"
          type="text"
        ></input>
      </section>
      <button
        disabled={loading}
        className={cn(
          "bg-white",
          "text-black",
          "border-black",
          "border",
          "rounded-lg",
          "leading-10"
        )}
      >
        <span className={cn("flex justify-center content-center")}>Submit</span>
      </button>
    </form>
  );
}

export default InitialForm;
