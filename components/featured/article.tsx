'use client';
import { Product } from '@/lib/shopify/types';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  reverse?: boolean;
  product: Product;
  handle: string;
  children: React.ReactNode;
}
export function Article({ product, reverse = false, handle, children }: Props) {
  return (
    <article className='grid grid-cols-1 md:grid-cols-2 border rounded-md'>
      <div
        className={`${
          reverse ? 'md:order-1' : ''
        } order-2  flex flex-col gap-5 p-10`}
      >
        <a href={'/all/' + handle}>
          <h2 className='text-xl font-bold max-w-sm hover:underline'>
            {product.title}
          </h2>
        </a>
        <p className='py-3'>{product.description.substring(0, 320) + '...'}</p>
        <p className='font-bold pb-3 mb-auto'>
          ${product.priceRange.maxVariantPrice.amount}{' '}
        </p>
        {children}
      </div>

      <div className='relative p-2 md:p-0 order-1'>
        <Link href={'/all/' + handle} className=''>
          <Image
            width={900}
            height={900}
            src={product.featuredImage.url}
            alt={product.featuredImage.altText}
            priority={false}
          />
        </Link>
      </div>
    </article>
  );
}
