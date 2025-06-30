import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer 
      className={cn(
        "bg-black text-white",
        "px-4 py-8 sm:px-6 lg:px-8",
        "border-t border-gray-800"
      )}
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto">
        <div className={cn(
          "flex flex-col lg:flex-row",
          "justify-between items-center",
          "gap-6 lg:gap-8"
        )}>
          {/* Brand Section */}
          <div className={cn(
            "flex flex-col items-center lg:items-start",
            "text-center lg:text-left"
          )}>
            <Link 
              href="/" 
              className="focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded-md"
            >
              <Image
                className="h-12 w-auto mb-3"
                src="/fm clr turtle alt full.svg"
                alt="$BUILD Store"
                width={150}
                height={48}
              />
            </Link>
            <p className="text-sm text-gray-300">
              Future Modern Builderberg LLC &copy; {currentYear}
            </p>
          </div>

          {/* Navigation Links */}
          <nav 
            className={cn(
              "flex flex-wrap justify-center lg:justify-end",
              "items-center gap-4 sm:gap-6"
            )}
            role="navigation"
            aria-label="Footer navigation"
          >
            <a 
              href="https://opencollective.com/futuremodern" 
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "text-white hover:text-gray-300",
                "text-sm font-medium transition-colors duration-200",
                "focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded-md px-2 py-1"
              )}
            >
              Join
            </a>
            <a
              href="https://mirror.xyz/0x5ab45FB874701d910140e58EA62518566709c408"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "text-white hover:text-gray-300",
                "text-sm font-medium transition-colors duration-200",
                "focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded-md px-2 py-1"
              )}
            >
              Blog
            </a>
            
            {/* Social Media Links */}
            <div className="flex items-center gap-3 ml-2">
              <a 
                href="https://discord.gg/Tt45d2dK4M" 
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-2 rounded-md transition-all duration-200",
                  "hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                )}
                aria-label="Join our Discord community"
              >
                <Image 
                  className="w-5 h-5" 
                  src="/discord.png" 
                  alt="Discord"
                  width={20}
                  height={20}
                />
              </a>
              <a 
                href="https://twitter.com/afuturemodern" 
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-2 rounded-md transition-all duration-200",
                  "hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                )}
                aria-label="Follow us on Twitter"
              >
                <Image 
                  className="w-5 h-5" 
                  src="/x.png" 
                  alt="Twitter/X"
                  width={20}
                  height={20}
                />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
