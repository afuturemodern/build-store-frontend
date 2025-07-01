import { cn } from "@/utils/cn";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className={cn(
      "bg-black",
      "flex justify-around"
      )}>
      <div className={cn(
        "flex flex-row"
      )}>
        <Link href="/">
          <img
            className={cn(
              "h-16"
              // , "aspect-square"
            )}
            src="logo.png"
            alt="Logo"
          />
          <p className="text-white">Future Modern Builderberg LLC &copy; 2024</p>
        </Link>
      </div>
      <div className={cn("flex justify-around")}>
        <a href="https://opencollective.com/futuremodern" target="_blank">
          Join
        </a>
        <a
          href="https://mirror.xyz/0x5ab45FB874701d910140e58EA62518566709c408"
          target="_blank"
        >
          Blog
        </a>
        <a href="https://discord.gg/Tt45d2dK4M" target="_blank">
          <img className="w-8" src="discord.png" />
        </a>
        <a href="https://twitter.com/afuturemodern" target="_blank">
          <img className="w-5" src="x.png" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
