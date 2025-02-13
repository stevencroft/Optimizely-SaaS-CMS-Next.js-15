import { cn } from "@/lib/utils"
import Image from "next/image"

interface Logo {
  src: string
  alt: string
}

interface LogosBlockProps {
  logos: Logo[]
  className?: string
}

export default function LogosBlock({ logos, className }: LogosBlockProps) {
  return (
    <section className={cn("container mx-auto px-4 py-16", className)}>
      <div className="flex justify-center gap-12 flex-wrap">
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center">
            <Image src={logo.src || "/placeholder.svg"} alt={logo.alt} width={100} height={40} />
          </div>
        ))}
      </div>
    </section>
  )
}

