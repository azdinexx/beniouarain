import React from 'react';
import Image from 'next/image';

function Features() {
  return (
    <section className='flex flex-col my-4 p-3'>
      <ul className='grid grid-cols-2 gap-2 md:grid-cols-4 '>
        {features_array.map((feature, index) => (
          <FeatureCard
            key={index + feature.title}
            title={feature.title}
            description={feature.description}
            image={feature.image}
          />
        ))}
      </ul>
    </section>
  );
}

export default Features;

interface CardProps {
  title: string;
  description: string;
  image: string;
  key?: string;
}

function FeatureCard({ title, description, image }: CardProps) {
  return (
    <li className='flex flex-col  '>
      <div className=' w-full md:w-[70%] md:mx-auto aspect-square overflow-hidden flex items-center justify-center'>
        <Image
          width={600}
          height={600}
          src={image}
          alt={title}
          className=' h-[70%]  w-auto'
        />
      </div>
      <h3 className='text-xl font-bold'>{title}</h3>
      <p className=' '>{description}</p>
    </li>
  );
}

const features_array = [
  {
    title: 'Free Shipping',
    description: 'Available as Standard or Express delivery',
    image: '/features/free_shipping.png',
  },
  {
    title: 'Free Returns',
    description: 'Free returns on all orders  ',
    image: '/features/free_returns.png',
  },
  {
    title: 'Secure Payments',
    description: '100% Secure payment with 256-bit SSL Encryption',
    image: '/features/secure_payments.png',
  },
  {
    title: 'Local Support',
    description: '24/7 Dedicated support',
    image: '/features/local_support.png',
  },
];
