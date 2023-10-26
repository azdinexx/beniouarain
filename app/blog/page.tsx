import React from 'react';
import { getAllPosts } from '@/lib/blog';
import Image from 'next/image';
import Link from 'next/link';

async function page() {
  const posts = await getAllPosts();

  return (
    <main>
      <section className='py-6'>
        <h1>Beniouarain Blog</h1>
      </section>
      <ul className='grid grid-cols-2 gap-5 '>
        {posts.map((post) => (
          <article className='flex flex-col gap-6' key={post.sys.id}>
            <h4 className='text-2xl'>{post.fields.title?.toString()}</h4>
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
