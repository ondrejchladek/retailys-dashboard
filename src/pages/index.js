import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { usePageView } from '../hooks/use-page-view';
import { Layout as MarketingLayout } from '../layouts/marketing';
import { HomeCta } from '../sections/home/home-cta';
import { HomeFaqs } from '../sections/home/home-faqs';
import { HomeFeatures } from '../sections/home/home-features';
import { HomeHero } from '../sections/home/home-hero';
import { HomeReviews } from '../sections/home/home-reviews';

const Page = () => {
  usePageView();

  const router = useRouter();

  // Přesměrování na přihlašovací stránku JWT
  useEffect(() => {
    router.push('/auth/jwt/login');
  }, [router]);

  return (
    <>
      <Head>
        <title>
          Retailys Dashboard
        </title>
      </Head>
    </>
  );
};

Page.getLayout = (page) => (
  <MarketingLayout>
    {page}
  </MarketingLayout>
);

export default Page;
