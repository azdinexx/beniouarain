import React from 'react';
import Image from 'next/image';

function Featured() {
  return (
    <div className='max-w-5xl mx-auto my-48'>
      <h2
        className='font-bold text-4xl mb-5 max-w-sm'
        data-scroll
        data-scroll-speed='0.45'
      >
        Featured Products This Week
      </h2>
      <section className='grid grid-cols-1 grid-rows-2     bg-amber-100/20'>
        {products.map((product, i) => (
          <Article key={product.title} {...product} reverse={i === 1} />
        ))}
      </section>
    </div>
  );
}

export default Featured;

function Article({
  title,
  description,
  price,
  image,
  imagePlaceHolder,
  reverse = false,
}: {
  title: string;
  description: string;
  price: number;
  image: string;
  reverse?: boolean;
  imagePlaceHolder: string;
}) {
  return (
    <article className='grid grid-cols-2  '>
      <div className={`${reverse && 'order-2'} flex flex-col gap-3 p-10`}>
        <h2 className='text-xl font-bold max-w-xs'>{title}</h2>
        <p>{description}</p>
        <p className='font-bold'>${price} </p>
        <button className='px-4 py-2 font-bold text-lg bg-black text-white border hover:text-black hover:bg-white rounded-full  transition-all duration-300 ease-in-out'>
          Add To Cart
        </button>
      </div>
      <div data-scroll data-scroll-speed='0.4'>
        <Image
          width={2000}
          height={2000}
          src={image}
          alt='Product Image'
          className={reverse ? '-translate-y-0' : '-translate-y-20'}
          priority={false}
          loading='lazy'
          blurDataURL={imagePlaceHolder}
        />
      </div>
    </article>
  );
}

const products = [
  {
    title: 'Moroccan Pouf, round Morccan Pouf',
    description:
      'Ever wished to find design assets that closely resemble a particular image? We’ve got you covered. Introducing our latest feature, Reverse Image Search, where you can upload an image, or paste a URL to find similar-looking icons, 3D illustrations, illustrations, and Lottie animations within our library!',
    price: 100,
    image: '/images/rugs/1.jpg',
    imagePlaceHolder:
      'data:image/webp;base64,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',
  },
  {
    title: 'Moroccan Pouf, Green Morccan Pouf',
    description:
      'Ever wished to find design assets that closely resemble a particular image? We’ve got you covered. Introducing our latest feature, Reverse Image Search, where you can upload an image, or paste a URL to find similar-looking icons, 3D illustrations, illustrations, and Lottie animations within our library!',
    price: 100,
    image: '/images/rugs/2.jpg',
    imagePlaceHolder:
      'data:image/webp;base64,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',
  },
];
