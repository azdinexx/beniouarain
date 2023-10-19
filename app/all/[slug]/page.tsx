import Details from '@/components/ProductsDetailsPage/Details';
import RecommendedProducts from '@/components/ProductsDetailsPage/RecommendedProducts';
import Images from '@/components/ProductsDetailsPage/images';
import React from 'react';
import { getProduct, getProducts } from '@/lib/shopify';
import { Product } from '@/lib/shopify/types';

async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  try {
    const product = await getProduct(slug);

    const recommended = await getProducts({
      query: `tag:rugs}`,
    });
    const images = product?.images.map((img) => img.url);

    const productJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product?.title,
      description: product?.description,
      image: product?.featuredImage.url,
      offers: {
        '@type': 'AggregateOffer',
        availability: product?.availableForSale
          ? 'https://schema.org/InStock'
          : 'https://schema.org/OutOfStock',
        priceCurrency: product?.priceRange.minVariantPrice.currencyCode,
        highPrice: product?.priceRange.maxVariantPrice.amount,
        lowPrice: product?.priceRange.minVariantPrice.amount,
      },
    };

    return (
      <div className='relative'>
        <a
          href='/all'
          className=' hidden md:block absolute top-0 px-3 py-1 border rounded-lg'
        >
          back
        </a>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(productJsonLd),
          }}
        />
        <div className='max-w-7xl  mx-auto    md:grid md:grid-cols-5 gap-3  mt-6'>
          <Images
            images={images as string[]}
            title={product?.title as string}
          />
          <Details product={product as Product} />
          <RecommendedProducts data={recommended} />
        </div>
      </div>
    );
  } catch {
    return <div>Product not found</div>;
  }
}

export default Page;
