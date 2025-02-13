import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ContactBlockProps {
  title: string
  description: string
  className?: string
}

export default function ContactBlock({ title, description, className }: ContactBlockProps) {
  return (
    <section className={cn("container mx-auto px-4 py-16", className)}>
      <Card className="max-w-xl mx-auto">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <p className="text-muted-foreground">{description}</p>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <Input placeholder="Name" />
            <Input placeholder="Email" type="email" />
            <Textarea placeholder="Message" />
            <Button className="w-full">Send</Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}

