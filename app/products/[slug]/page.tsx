import Details from '@/components/ProductsDetailsPage/Details';
import RecommendedProducts from '@/components/ProductsDetailsPage/RecommendedProducts';
import Images from '@/components/ProductsDetailsPage/images';
import React from 'react';
import { shopifyClient, parseShopifyResponse } from '@/lib/shopify';
import { Product } from 'shopify-buy';

async function page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const product = await shopifyClient.product.fetchByHandle(slug);
  const data: Product = await parseShopifyResponse(product);
  const featuredProducts = await shopifyClient.product.fetchAll(4);
  const featuredData = await parseShopifyResponse(featuredProducts);

  const images = data.images.map((img) => img.src);
  return (
    <>
      <div className='max-w-7xl  mx-auto  grid grid-cols-5 gap-3 mt-6'>
        <Images images={images} />
        <Details
          title={data.title}
          description={data.description}
          price={data.variants[0].price.amount}
          id={data.id}
        />
        <RecommendedProducts data={featuredData} />
      </div>
    </>
  );
}

export default page;
