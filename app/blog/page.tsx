import React from 'react';
import { getAllPosts } from '@/lib/blog';
import Image from 'next/image';
import Link from 'next/link';

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
            <h4 className='text-2xl flex flex-col '>
              {post.fields.title?.toString()}{' '}
              <span className='italic text-xs'>
                {formatter.format(new Date(post.sys.createdAt as string))}
              </span>
            </h4>
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
            <p>
              {(post.fields.body as string)?.substr(0, 180) + '...'}
              <Link
                href={'/blog/' + post.sys.id}
                className='underline text-amber-900'
              >
                Read More
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
