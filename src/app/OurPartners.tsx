import { cn } from "@/utils/cn";
import React from 'react'
import affiliates from "./affiliates.json"

function OurPartners() {
  return (
    <section className={cn(
        "bg-black text-white",
        "flex flex-col",
        "text-center",
        "items-center"

    )}>
        <h1 className="text-2xl">Our Partners</h1>
        <div className={cn(
            "flex flex-col items-center"
        )}>
            {affiliates.map((partner, idx, oArr) => {
                return(
                    <div key={idx}>
                        <a href={partner.link}>
                            <img src={partner.img_url}></img>
                        </a>
                    </div>
                )
            }

            )}
        </div>

    </section>
  )
}

export default OurPartners