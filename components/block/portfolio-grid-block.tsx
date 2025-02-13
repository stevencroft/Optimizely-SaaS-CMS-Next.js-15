import { cn } from "@/lib/utils"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface PortfolioItem {
  title: string
  description: string
  imageUrl: string
  link: string
}

interface PortfolioGridBlockProps {
  title: string
  items: PortfolioItem[]
  className?: string
}

export default function PortfolioGridBlock({ title, items, className }: PortfolioGridBlockProps) {
  return (
    <section className={cn("container mx-auto px-4 py-16", className)}>
      <h2 className="text-3xl font-bold mb-12">{title}</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <Card key={index}>
            <CardContent className="p-0">
              <Image
                src={item.imageUrl || "/placeholder.svg"}
                alt={item.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

