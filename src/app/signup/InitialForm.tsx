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
        "min-h-screen",
        "w-full max-w-md",
        "mx-auto",
        "px-4 sm:px-6 lg:px-8",
        "py-8 sm:py-12"
      )}
    >
      <h1 className="pb-8 text-xl">Sign up to $BUILD your team.</h1>
      <div className={cn("flex sm:flex-row gap-4")}>
        <section className={cn("flex flex-col flex-1")}>
          <label className={cn("text-sm font-medium mb-1")}>First Name</label>
          <input
            disabled={loading}
            name="first_name"
            className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            type="text"
            required
          />
        </section>
        <section className="flex flex-col flex-1">
          <label className="text-sm font-medium mb-1">Last Name</label>
          <input
            disabled={loading}
            name="last_name"
            className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            type="text"
            required
          />
        </section>
      </div>
      <section className="flex flex-col">
        <label className="text-sm font-medium mb-1">Email Address</label>
        <input
          disabled={loading}
          name="email_address"
          className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          type="email"
          required
        />
      </section>
      <section className="flex flex-col">
        <label className="text-sm font-medium mb-1">Phone Number</label>
        <input
          disabled={loading}
          name="phone_number"
          className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          type="tel"
        />
      </section>
      <section className="flex flex-col">
        <label className="text-sm font-medium mb-1">Project Description</label>
        <textarea
          disabled={loading}
          name="project_description"
          className="border rounded-md px-3 py-2 w-full min-h-[100px] focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          rows={4}
        />
      </section>
      <button
        disabled={loading}
        className={cn(
          "bg-black hover:bg-gray-800",
          "text-white",
          "border-black",
          "border",
          "rounded-lg",
          "py-3 px-6",
          "font-medium",
          "transition-colors duration-200",
          "focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          "w-full sm:w-auto sm:min-w-[150px]",
          "mx-auto"
        )}
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}

export default InitialForm;
