// app/[locale]/[slug]/page.tsx
import ContentAreaMapper from '@/components/content-area/mapper'
import { optimizely } from '@/lib/optimizely/fetch'
import { getValidLocale } from '@/lib/optimizely/utils/language'
import { generateAlternates } from '@/lib/utils/metadata'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

export async function generateMetadata(props: {
  params: Promise<{ locale: string; slug?: string }>
}): Promise<Metadata> {
  const { locale, slug = '' } = await props.params
  const locales = getValidLocale(locale)
  const { data, errors } = await optimizely.getPageByURL({
    locales: [locales],
    slug: `/${slug}`,
  })

  if (errors || !data?.CMSPage?.items?.[0]) {
    return {}
  }

  const page = data.CMSPage.items[0]
  if (!page) {
    return {}
  }

  return {
    title: page.title,
    description: page.shortDescription || '',
    keywords: page.keywords ?? '',
    alternates: generateAlternates(locale, '/'),
  }
}

export default async function CmsPage(props: {
  params: Promise<{ locale: string; slug?: string }>
}) {
  const { locale, slug = '' } = await props.params
  const locales = getValidLocale(locale)

  const { data, errors } = await optimizely.getPageByURL({
    locales: [locales],
    slug: `/${slug}`,
  })

  if (errors || !data?.CMSPage?.items?.[0]) {
    notFound()
  }

  const page = data.CMSPage.items[0]
  const blocks = (page?.blocks ?? []).filter(
    (block) => block !== null && block !== undefined
  )

  return (
    <>
      <Suspense>
        <ContentAreaMapper blocks={blocks} />
      </Suspense>
    </>
  )
}
