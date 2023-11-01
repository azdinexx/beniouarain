import React from 'react';
import { getAllPosts } from '@/lib/blog';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import blog from '@/public/seo/blog.jpg';

export const metadata: Metadata = {
  title: 'Blog | BeniOurain',
  description:
    'Read articles about our beniourain rugs and other diffrent products from all over Morocco',
  openGraph: {
    title: 'BeniOurain Blog',
    description:
      'Read articles about our beniourain rugs and other diffrent products from all over Morocco',
    images: [
      {
        url: blog.src,
        width: 1200,
        height: 630,
        alt: 'Beniourain Blog',
      },
    ],
  },
};

async function page() {
  const posts = await getAllPosts();

  const formatter = new Intl.DateTimeFormat('en', {
    dateStyle: 'long',
  });
  return (
    <main>
      <section className='py-6'>
        <Hero />
      </section>
      <ul className='grid md:grid-cols-2  grid-cols-1 '>
        {posts.map((post) => (
          <article
            className='flex flex-col gap-2 border-b p-4 pb-7'
            key={post.sys.id}
          >
            <Link
              aria-label={`Read more about ${post.fields.title?.toString()}`}
              href={'/blog/' + post.sys.id}
              className='underline text-amber-900 flex'
            >
              <h4 className='text-2xl flex flex-col '>
                {post.fields.title?.toString()}{' '}
                <span className='italic text-xs'>
                  {formatter.format(new Date(post.sys.createdAt as string))}
                </span>
              </h4>
            </Link>
            <Link
              href={'/blog/' + post.sys.id}
              aria-label={`Read more about ${post.fields.title?.toString()}`}
            >
              <Image
                src={
                  'https:' +
                  (post.fields.image as { fields: { file: { url: string } } })
                    ?.fields.file.url
                }
                width={900}
                height={500}
                alt=''
              />
            </Link>

            <p>
              {(post.fields.body as string)?.substr(0, 180) + '...'}
              <Link
                aria-label={`Read more about ${post.fields.title?.toString()}`}
                href={'/blog/' + post.sys.id}
                className='underline text-amber-900 flex'
              >
                Read More{' '}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                >
                  <path
                    fill='currentColor'
                    d='M20 4v6.5a6.5 6.5 0 0 1-6.5 6.5H7.83l3.09 3.09L9.5 21.5L4 16l5.5-5.5l1.41 1.41L7.83 15h5.67c2.5 0 4.5-2 4.5-4.5V4h2Z'
                  />
                </svg>
              </Link>
            </p>
          </article>
        ))}
      </ul>
    </main>
  );
}

export default page;

function Hero() {
  return (
    <section className='py-10 border-b mb-3'>
      <h1 className='text-5xl pl-3 md:text-6xl max-w-xl leading-[3rem] md:leading-[4rem]'>
        <span className='text-amber-400 font-semibold'>Shop</span>,
        <span className='text-amber-900 italic'> Read</span> & Experience the
        Magic of
        <span className='font-bold italic'> Morocco</span>
      </h1>
    </section>
  );
}
