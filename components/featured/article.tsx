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
    <article className='grid grid-cols-1 md:grid-cols-2   overflow-hidden'>
      <div className={`${reverse && 'md:order-2'} flex flex-col gap-3 p-10`}>
        <a href={'/all/' + handle}>
          <h2 className='text-xl font-bold max-w-xs hover:underline'>
            {product.title}
          </h2>
        </a>
        <p className='py-3'>{product.description.substring(0, 320) + '...'}</p>
        <p className='font-bold pb-3'>
          ${product.priceRange.maxVariantPrice.amount}{' '}
        </p>
        {children}
      </div>

      <div className='relative'>
        <Link href={'/all/' + handle}>
          <Image
            width={900}
            height={900}
            src={product.featuredImage.url}
            alt={product.featuredImage.altText}
            priority={false}
            loading='lazy'
            blurDataURL={imagePlaceHolder}
          />
        </Link>
      </div>
    </article>
  );
}

const imagePlaceHolder = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 2000'%3E%3C/svg%3E`;
