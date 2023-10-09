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
  console.log(data);
  return (
    <div className='max-w-6xl  mx-auto  flex flex-wrap '>
      <Images images={data.images.map((img) => img.src)} />
      <Details
        title={data.title}
        description={data.description}
        price={data.variants[0].price}
        id={data.id}
      />
      <RecommendedProducts />
    </div>
  );
}

export default page;
