import { HeroBlock as HeroBlockProps } from "@/lib/optimizely/types/generated"
import { cn } from "@/lib/utils"

export default function HeroBlock({
  title,
  subtitle,
  showDecoration = true,
  decorationColorsPrimary = "#009379",
  decorationColorsSecondary = "#ffd285"
}: HeroBlockProps) {
  return (
    <section className="container mx-auto px-4 pt-20 pb-16 relative">
      <div className={cn('flex flex-col',{"sm:pr-60": showDecoration})}>
        <h1 className="text-4xl md:text-6xl font-bold max-w-xl w-full mb-4">{title}</h1>
        {subtitle && <p className="text-xl text-muted-foreground max-w-xl mb-8">{subtitle}</p>}
      </div>
      {showDecoration && (
        <div className="hidden sm:block absolute right-20 top-10">
          <div className="relative w-48 h-48 lg:w-72 lg:h-72">
            <div
              className="absolute right-0 w-32 h-32 lg:w-56 lg:h-56 rounded-full"
              style={{ backgroundColor: decorationColorsPrimary ?? "#009379" }}
            />
            <div
              className="absolute bottom-0 left-0 w-40 h-40 lg:w-60 lg:h-60 rounded-full"
              style={{ backgroundColor: decorationColorsSecondary ?? "#ffd285" }}
            />
          </div>
        </div>
      )}
    </section>
  )
}

