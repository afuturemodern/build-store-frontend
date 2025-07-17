import { cn } from "@/utils/cn";
import React, { useEffect } from "react";

function SuccessForm() {
  useEffect(() => {
    const successSection = document.getElementById("success_section");
    successSection?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section
      id="success_section"
      className={cn("h-screen", "w-full", "pt-32 px-4", "flex flex-col gap-2")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={cn("h-10 w-10")}
      >
        <path d="M0 3v18h24v-18h-24zm22 16l-6.526-6.618-3.445 3.483-3.418-3.525-6.611 6.66 5.051-8-5.051-6 10.029 7.446 9.971-7.446-4.998 6.01 4.998 7.99z" />
      </svg>
      <h2 className="text-lg font-extrabold">
        We successfully received your information :)
      </h2>
      <p className="text-xs pb-4">
        We'll email you soon to schedule a follow-up call.
      </p>
      <button
        className={cn(
          "inline-flex items-center justify-center",
          "bg-black text-white hover:bg-gray-800",
          "border border-black hover:border-gray-800",
          "rounded-lg px-4 py-2 sm:px-6 sm:py-3",
          "text-sm sm:text-base font-medium",
          "transition-colors duration-200",
          "focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2",
          "active:scale-95 transform"
        )}
      >
        Book a Meeting
      </button>
    </section>
  );
}

export default SuccessForm;
