import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { PortfolioGridBlock as PortfolioGridBlockProps, PortfolioItemBlock } from '@/lib/optimizely/types/generated'
import { castContent } from "@/lib/optimizely/types/typeUtils"

export default function PortfolioGridBlock({ title, items }: PortfolioGridBlockProps) {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-12">{title}</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {items?.map((item, index) => {
          const safeItem = castContent<PortfolioItemBlock>(item, "PortfolioItemBlock")
          if (!safeItem) return null

          return (
            <Card key={index}>
              <CardContent className="p-0">
                <Image
                  src={safeItem?.imageUrl || "/placeholder.svg"}
                  alt={safeItem?.title ?? ''}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <Link href={safeItem?.link ?? ''}>
                    <h3 className="font-semibold mb-2">{safeItem?.title}</h3>
                  </Link>
                  <p className="text-sm text-muted-foreground">{safeItem?.description}</p>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
