import Link from "next/link"
import { Icons } from "@/components/ui/icons"
import { getValidLocale } from "@/lib/optimizely/utils/language";
import { optimizely } from "@/lib/optimizely/fetch";
import { castContent } from "@/lib/optimizely/types/typeUtils";
import { SocialLink, FooterColumn, NavItem } from "@/lib/optimizely/types/generated";

export async function Footer({ locale }: { locale: string }) {
  const locales = getValidLocale(locale);
  const { data } = await optimizely.getFooter({ locales: locales })
  const footer = data?.Footer?.items?.[0];
  if (!footer) {
    return null;
  }

  const { columns, socialLinks, copyrightText } = footer;

  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {columns?.map((columnItem, index) => {
            const column = castContent<FooterColumn>(columnItem, "FooterColumn")
            if (!column) return null

            return (
              <div key={index}>
                <h3 className="font-bold mb-4">{column?.title}</h3>
                <nav className="grid gap-2">
                  {column?.links?.map((linkItem, linkIndex) => {
                    const link = castContent<NavItem>(linkItem, "NavItem")
                    if (!link) return null

                    return (
                      <Link key={linkIndex} href={link.href ?? "/"} className="text-sm">
                        {link.label}
                      </Link>
                    )
                  })}
                </nav>
              </div>
            )
          })}
        </div>
        <div className="mt-8 flex justify-center gap-4">
          {socialLinks?.map((linkItem, index) => {
            const link = castContent<SocialLink>(linkItem, "SocialLink");
            if (!link) return null
            const platform = (link?.platform ?? '') as keyof typeof Icons

            const Icon = platform ? Icons?.[platform] : null;
            return (
              <Link key={index} href={link?.href ?? '/'} className="text-muted-foreground hover:text-foreground">
                {Icon && <Icon className="h-5 w-5" />}
              </Link>
            )
          })}
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">{copyrightText}</div>
      </div>
    </footer>
  )
}

