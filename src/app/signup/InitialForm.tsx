import { cn } from "@/utils/cn";
import React from "react";
import { SignupFormContext } from "./SignupFormContext";
import { validateSignupForm, sanitizeInput } from "@/utils/validation";

function InitialForm() {
  const { submitForm, loading } = React.useContext(SignupFormContext);
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
        const firstname = sanitizeInput(formData.get("first_name") as string);
        const lastname = sanitizeInput(formData.get("last_name") as string);
        const email = sanitizeInput(formData.get("email_address") as string);
        const phone = sanitizeInput(formData.get("phone_number") as string);

        const validationErrors = validateSignupForm({ firstname, lastname, email, phone });
        
        if (validationErrors.length > 0) {
          const errorMap: Record<string, string> = {};
          validationErrors.forEach(error => {
            errorMap[error.field] = error.message;
          });
          setErrors(errorMap);
          return;
        }

        setErrors({});
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
            className={cn("border", errors.firstname && "border-red-500")}
            type="text"
            required
          ></input>
          {errors.firstname && <span className="text-xs text-red-500">{errors.firstname}</span>}
        </section>
        <section className="flex flex-col w-1/2 px-4">
          <label className="text-xs">Last Name</label>
          <input
            disabled={loading}
            name="last_name"
            className={cn("border", errors.lastname && "border-red-500")}
            type="text"
            required
          ></input>
          {errors.lastname && <span className="text-xs text-red-500">{errors.lastname}</span>}
        </section>
      </div>
      <section className="flex flex-col">
        <label className="text-xs">Email Address</label>
        <input
          disabled={loading}
          name="email_address"
          className={cn("border w-full", errors.email && "border-red-500")}
          type="email"
          required
        ></input>
        {errors.email && <span className="text-xs text-red-500">{errors.email}</span>}
      </section>
      <section className="flex flex-col">
        <label className="text-xs">Phone Number</label>
        <input
          disabled={loading}
          name="phone_number"
          className={cn("border", errors.phone && "border-red-500")}
          type="tel"
          required
        ></input>
        {errors.phone && <span className="text-xs text-red-500">{errors.phone}</span>}
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
