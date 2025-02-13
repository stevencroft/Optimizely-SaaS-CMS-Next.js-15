import { optimizely } from '@/lib/optimizely/fetch';

export default async function Home({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const { data } = await optimizely.GetStartPage({ locales: [locale] });

  return (
    <>
    </>
  )
}
