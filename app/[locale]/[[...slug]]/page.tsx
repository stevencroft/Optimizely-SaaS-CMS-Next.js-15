// app/[locale]/[[...slug]]/page.tsx
import { optimizely } from '@/lib/optimizely/fetch';
import { notFound } from 'next/navigation';

export default async function CmsPage({ params }: { params: { locale: string; slug?: string[] } }) {
  const { locale, slug = [] } = params;
  const path = `/${slug.join('/')}`;

  const { data, errors } = await optimizely.GetPageByURL({ locales: [locale], slug: path });

  if (errors || !data?.CMSPage?.items?.[0]) {
    notFound();
  }

  const page = data.CMSPage.items[0];

  return (
    <div>
      <h1>{page.Title}</h1>
      {/* Render page content */}
    </div>
  );
}