// app/[locale]/[[...slug]]/page.tsx
import ContentAreaMapper from '@/components/content-area/mapper';
import { optimizely } from '@/lib/optimizely/fetch';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

export default async function CmsPage({ params }: { params: { locale: string; slug?: string[] } }) {
  const { locale, slug = [] } = params;
  const path = `/${slug.join('/')}`;

  const { data, errors } = await optimizely.GetPageByURL({ locales: [locale], slug: path });

  if (errors || !data?.CMSPage?.items?.[0]) {
    notFound();
  }

  const page = data.CMSPage.items[0];
  const blocks = (page?.Blocks ?? []).filter((block) => block !== null && block !== undefined);

  return (
    <>
      <Suspense>
        <ContentAreaMapper blocks={blocks} />
      </Suspense>
    </>
  );
}