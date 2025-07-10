import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function Header() {
  const DEBUG_SHOW_SECOND_PARAGRAPH = true;
  return (
    <header
      className={cn(
        "sticky top-0 z-50",
        "relative",
        "bg-white/95 backdrop-blur-sm",
        "border-b border-gray-100",
        "px-4 py-3 sm:px-6 lg:px-8",
        "transition-all duration-200",
        "flex items-center justify-between"
      )}
      role="banner"
    >
      <Link
        href="/"
        className="focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded-md flex-shrink-0"
      >
        <Image
          className="h-12 w-auto sm:h-16"
          src="/fm clr turtle alt full.svg"
          alt="$BUILD Store - Home"
          width={200}
          height={64}
          priority
        />
      </Link>

      {/* Marquee container */}

      <Marquee gradient gradientWidth={30} className="mx-1">
        world-$BUILDing people+products.
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </Marquee>

      <nav
        role="navigation"
        aria-label="Main navigation"
        className="flex-shrink-0"
      >
        <Link
          href="/signup"
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
          $BUILD a team
        </Link>
      </nav>
    </header>
  );
}


export default Header;
