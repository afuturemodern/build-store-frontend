import { cn } from "@/utils/cn";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header
      className={cn(
        "flex justify-between items-center",
        "h-fit",
        "basis-0",
        "grow",
        "bg-white",
        "p-4"
      )}
    >
      <div className={cn("flex flex-col", "content-start")}>
        <Link href="/">
          <img
            className={cn(
              "h-16"
            )}
            src="fm clr turtle alt full.svg"
            alt="Logo"
          />
        </Link>
        <h2 className="text-start">world-$BUILDing people+products.</h2>
      </div>
      <Link href="/signup">
        <button
          className={cn(
            "bg-white"
            ,"text-black"
            ,"border-black"
            ,"border"
            ,"rounded-lg"
            ,"leading-10"
            ,"w-56"
          )}
        >
          <span className={cn("flex justify-center content-center")}>
            $BUILD a team
          </span>
        </button>
      </Link>
    </header>
  );
}

export default Header;
