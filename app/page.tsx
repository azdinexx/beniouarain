import Collections from '@/components/Mobile/Collections';
import Featured from '@/components/featured';
import Features from '@/components/shared/features';
import { getCollections, getProducts } from '@/lib/shopify';

import React from 'react';
import Caroussel from '@/components/landing/Caroussel';
import Hero from '@/components/hero';
import BlogPosts from '@/components/BlogPosts';
import { Metadata } from 'next';
import homeOpenGraph from '@/public/open-graph/home.jpg';

// MetaData
export const metadata: Metadata = {
  title: 'Beni Ouarain Carpet | Authentic Moroccan Rugs',
  description:
    'discover our collection of authentic moroccan rugs and shop the best Beni Ouarain rugs online.',
  openGraph: {
    title: 'Beni Ouarain Carpet | Authentic Moroccan Rugs',
    description:
      'discover our collection of authentic moroccan rugs and shop the best Beni Ouarain rugs online.',
    images: [
      {
        url: homeOpenGraph.src,
        width: 1200,
        height: 627,
        alt: 'Beni Ouarain Carpet | Authentic Moroccan Rugs',
      },
    ],
  },
};
async function Page() {
  const Carousel_products = await getProducts({
    query: 'tag:authentic_rug',
  });
  const collections = await getCollections();

  return (
    <>
      <Hero />
      <Collections collections={collections} />
      <Featured />
      <BlogPosts />
      <Caroussel products={Carousel_products} />
      <Features />
    </>
  );
}

export default Page;
