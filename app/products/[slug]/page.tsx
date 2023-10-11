import Details from '@/components/ProductsDetailsPage/Details';
import RecommendedProducts from '@/components/ProductsDetailsPage/RecommendedProducts';
import Images from '@/components/ProductsDetailsPage/images';
import React from 'react';
import { getProduct, getProducts } from '@/lib/shopify';
import { Product } from '@/lib/shopify/types';

async function page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const product = await getProduct(slug);
  const recommended = await getProducts({
    query: `tag:rugs}`,
  });
  console.log(recommended);
  const images = product?.images.map((img) => img.url);

  return (
    <>
      <div className='max-w-7xl  mx-auto  grid grid-cols-5 gap-3 mt-6'>
        <Images images={images as string[]} />
        <Details product={product as Product} />
        <RecommendedProducts data={recommended} />
      </div>
    </>
  );
}

export default page;
