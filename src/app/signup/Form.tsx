import { cn } from "@/utils/cn";
import React from 'react'

function Form() {
  return (
    <form
      className={cn(
        "flex flex-col gap-4",
        "justify-center",
        "h-lvh",
        "max-w-[345px]",
        "px-8"
      )}
    >
      <h1>Sign up to $BUILD your team.</h1>
      <div className={cn(
        "flex -mx-4"
      )}>
        <section className={cn(
          "flex flex-col w-1/2 px-4"
        )}>
          <label className={cn(
            "text-xs"
          )}>
            First Name
          </label>
          <input className="border" type="text"></input>
        </section>
        <section className="flex flex-col w-1/2 px-4">
          <label className="text-xs">Last Name</label>
          <input className="border" type="text"></input>
        </section>
      </div>
      <section className="flex flex-col">
        <label className="text-xs">Work Email Address</label>
        <input className="border w-full" type="text"></input>
      </section>
      <section className="flex flex-col">
        <label className="text-xs">Phone Number</label>
        <input className="border" type="text"></input>
      </section>
      <section className="flex flex-col">
        <label className="text-xs">Project Description</label>
        <input className="border" type="text"></input>
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
          <span className={cn("flex justify-center content-center")}>
            Submit
          </span>
        </button>
    </form>
  )
}

export default Form;