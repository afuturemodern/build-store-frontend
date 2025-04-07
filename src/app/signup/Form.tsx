import { cn } from "@/utils/cn";
import React from 'react'

function Form() {
  return (
    <form
      className={cn(
        "flex flex-col gap-4",
        "justify-center",
        "h-lvh",
        "px-48"
      )}
    >
      <h1>Sign up to $BUILD your team.</h1>
      <div className={cn(
        "flex"
      )}>
        <section className={cn(
          "flex flex-col w-1/2"
        )}>
          <label className={cn(
            "text-xs"
          )}>
            First Name
          </label>
          <input className="border" type="text"></input>
        </section>
        <section className="flex flex-col w-1/2">
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
      <section className="">
        <button className="bg-black text-white">Submit</button>
      </section>
    </form>
  )
}

export default Form;