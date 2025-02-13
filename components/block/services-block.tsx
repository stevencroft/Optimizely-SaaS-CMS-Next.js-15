import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type React from "react" // Import React

interface Service {
  title: string
  description: string
  icon?: React.ReactNode
}

interface ServicesBlockProps {
  services: Service[]
  className?: string
}

export default function ServicesBlock({ services, className }: ServicesBlockProps) {
  return (
    <section className={cn("container mx-auto px-4 py-16", className)}>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index}>
            <CardHeader>
              {service.icon && <div className="mb-4">{service.icon}</div>}
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

