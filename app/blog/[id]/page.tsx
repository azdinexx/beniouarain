import React from 'react';
import { getPost } from '@/lib/blog';
import Image from 'next/image';
import { Entry, EntrySkeletonType } from 'contentful';
import RecommendedProducts from '@/components/ProductsDetailsPage/RecommendedProducts';
import { getProducts } from '@/lib/shopify';

interface Post {
  fields: {
    title: string;
    body: string;
    image: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
}

async function page({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);
  if (!post) return <div>404</div>;
  const imageURL: string = `https:${
    (post as unknown as Post)?.fields?.image?.fields.file.url
  }`;
  const recommended = await getProducts({
    query: `tag:rugs}`,
  });
  return (
    <main className='py-7 mt-8 p-4'>
      <article className='space-y-6  max-w-4xl mx-auto'>
        <h1 className='text-4xl max-w-4xl mx-auto mb-4'>
          {post.fields.title as string}
        </h1>
        <Image src={imageURL} width={1000} height={800} alt='' />

        {(post?.fields?.body as string).split('\n').map((paragraph, index) => (
          <p key={index} className='max-w-4xl mx-auto'>
            {paragraph}
          </p>
        ))}
      </article>
      <section className='max-w-4xl mx-auto'>
        <RecommendedProducts data={recommended} />
      </section>
    </main>
  );
}

export default page;
