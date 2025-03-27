import { cn } from "@/utils/cn";
import { ClassValue } from "clsx";
import Image from "next/image";

export function Affiliate({
  img_url,
  link,
  name,
  tagline,
  description,
  className
}: {
  img_url: string;
  link: string;
  name: string;
  tagline: string;
  description: string;
  className?: ClassValue;
}) {
  return (
    <div className={cn("p-6","flex flex-col gap-2", className)}>
      <a href={link}>
        <Image width={250} height={50} src={img_url} alt={name}></Image>
      </a>
      <h2 className={"text-white text-3xl font-bold pt-2"}>{name}</h2>
      <h3 className={"text-white text-sm"}>{tagline}</h3>
      <p className={"text-white"}>{description}</p>
    </div>
  );
}
