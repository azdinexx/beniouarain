import Collections from '@/components/Mobile/Collections';
import Featured from '@/components/featured';
import Features from '@/components/shared/features';
import { getCollections, getProducts } from '@/lib/shopify';

import React from 'react';
import Caroussel from '@/components/landing/Caroussel';
import Hero from '@/components/hero';
import BlogPosts from '@/components/BlogPosts';
import image from '@/public/seo/blog.jpg';
import { Metadata } from 'next';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'BeniOuarain Rugs',
  image: image,
  description: 'BeniOuarain Rugs , shop the best rugs in the world',
};

// MetaData
export const metadata: Metadata = {
  title: 'BeniOuarain Rugs',
  description: 'BeniOuarain Rugs , shop the best rugs in the world',
  openGraph: {
    title: 'BeniOuarain Rugs',
    description: 'BeniOuarain Rugs , shop the best rugs in the world',
    images: [
      {
        url: image.src,
        width: 1200,
        height: 630,
        alt: 'BeniOuarain Rugs',
      },
    ],
  },
  robots: {
    follow: true,
    index: true,
  },
};
async function Page() {
  const Carousel_products = await getProducts({
    query: 'tag:authentic_rug',
  });
  const collections = await getCollections();

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
