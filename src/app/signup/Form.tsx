"use client";
import { cn } from "@/utils/cn";
import React from "react";

function Form() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
        const firstname = formData.get("first_name");
        const lastname = formData.get("last_name");
        const email = formData.get("email_address");
        const phone = formData.get("phone_number");
        // const project_description = formData.get("project_description");
        fetch("/api/crm", {
          method: "POST",
          body: JSON.stringify({
            firstname,
            lastname,
            email,
            phone
          }),
        })
          .then((result) => {
            return result.json();
          })
          .then((data) => {
            console.log(data);
          });
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
          <input name="first_name" className="border" type="text"></input>
        </section>
        <section className="flex flex-col w-1/2 px-4">
          <label className="text-xs">Last Name</label>
          <input name="last_name" className="border" type="text"></input>
        </section>
      </div>
      <section className="flex flex-col">
        <label className="text-xs">Email Address</label>
        <input
          name="email_address"
          className="border w-full"
          type="text"
        ></input>
      </section>
      <section className="flex flex-col">
        <label className="text-xs">Phone Number</label>
        <input name="phone_number" className="border" type="text"></input>
      </section>
      <section className="flex flex-col">
        <label className="text-xs">Project Description</label>
        <input
          name="project_description"
          className="border"
          type="text"
        ></input>
      </section>
      <button
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

export default Form;
