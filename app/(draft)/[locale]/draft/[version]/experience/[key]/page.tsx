import OnPageEdit from '@/components/draft/on-page-edit'
import { optimizely } from '@/lib/optimizely/fetch'
import { getValidLocale } from '@/lib/optimizely/utils/language'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

export const revalidate = 0
export const dynamic = 'force-dynamic'

export default async function Page(props: {
  params: Promise<{ key: string; locale: string; version: string }>
}) {
  const { isEnabled: isDraftModeEnabled } = await draftMode()
  if (!isDraftModeEnabled) {
    return notFound()
  }

  const { locale, version, key } = await props.params
  const locales = getValidLocale(locale)

  const experienceData = await optimizely.VisualBuilder(
    { key, version, locales },
    { preview: true }
  )
  const experience = experienceData.data?._Experience?.items?.[0]

  if (!experience) {
    return notFound()
  }

  return (
    <Suspense>
      <OnPageEdit
        version={version}
        currentRoute={`/${locale}/draft/${version}/experience/${key}`}
      />
      {JSON.stringify(experience)}
    </Suspense>
  )
}
