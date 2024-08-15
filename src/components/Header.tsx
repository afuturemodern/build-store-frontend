import { cn } from "@/utils/cn";
import React from "react";

function Header() {
  return (
    <header className="px-2 py-4">

      <a href="/" className={cn("hidden md:flex flex-col content-center justify-center items-center")}>
        <img className="h-16" src="logo.png" alt="Logo" />
      </a>
    </header>
  );
}

export default Header;
