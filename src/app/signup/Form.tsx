import { cn } from "@/utils/cn";
import React from 'react'

function Form() {
  return (
    <form
        className={cn(
          "flex flex-col gap-4",
          "justify-center",
          "w-auto",
          "h-lvh",
          "lg: w-1/2",
          "lg:px-24"
        )}
      >
        <h1>Sign up to $BUILD your team.</h1>
        <div className={cn(
          "flex flex-col", 
          "md:flex-row justify-between"
          )}>
          <section className={cn(
            "flex flex-col grow", 
            "lg: pr-8"
            )}>
            <label className={cn(
              "text-xs"
              )}>
              First Name
            </label>
            <input className="border" type="text"></input>
          </section>
          <section className="flex flex-col grow">
            <label className="text-xs">Last Name</label>
            <input className="border" type="text"></input>
          </section>
        </div>
        <section className="flex flex-col">
          <label className="text-xs">Work Email</label>
          <input className="border w-full" type="text"></input>
        </section>
        <section className="flex flex-col">
          <label className="text-xs">Phone</label>
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