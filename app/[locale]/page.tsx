import ContentAreaMapper from '@/components/content-area/mapper';
import { optimizely } from '@/lib/optimizely/fetch';
import { Suspense } from 'react';

export default async function Home({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const { data } = await optimizely.GetStartPage({ locales: [locale] });
  const startPage = data?.StartPage?.items?.[0];
  const blocks = (startPage?.Blocks ?? []).filter((block) => block !== null && block !== undefined);

  return (
    <>
      <Suspense>
        <ContentAreaMapper blocks={blocks} />
      </Suspense>
    </>
  );
}
