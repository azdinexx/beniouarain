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

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const blog_post = await getPost(slug);

  let description = (blog_post?.fields?.body as string).split('\n')[0];
  let image = `https:${
    (blog_post as unknown as Post)?.fields?.image?.fields.file.url
  }`;
  let alt = `image for ${blog_post?.fields.title}`;

  return {
    title: blog_post?.fields.title,
    description: description,
    openGraph: {
      title: blog_post?.fields.title,
      description: description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: alt,
        },
      ],
    },
    robots: {
      follow: true,
      index: true,
    },
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
