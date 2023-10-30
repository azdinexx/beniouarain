import { getAllPosts } from '@/lib/blog';
import React from 'react';
import Image from 'next/image';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

async function BlogPosts() {
  const posts = await getAllPosts();
  const formatter = new Intl.DateTimeFormat('en', {
    dateStyle: 'long',
  });
  return (
    <section className='grid grid-cols-3 gap-10 mb-20   rounded-sm'>
      {posts.map((post) => (
        <Link
          href={`/blog/${post.sys.id}`}
          className='border-r pr-10 flex flex-col gap-3'
          key={post.sys.id}
        >
          <Image
            quality={80}
            width={500}
            height={500}
            alt={`image of ${post.fields.title as string}`}
            src={`https:${post?.fields?.image?.fields.file.url}`}
          />
          <h3 className='font-semibold'>{post.fields.title as string}</h3>

          {(post?.fields?.body as string).split('\n').map(
            (paragraph, index) =>
              index === 0 && (
                <p key={index} className=' '>
                  {paragraph + '...'}
                </p>
              )
          )}
          <p className='italic text-gray-500'>
            {' '}
            {formatter.format(new Date(post.sys.createdAt as string))}
          </p>
        </Link>
      ))}
      <Link
        href={'/blog'}
        className='flex justify-center items-center bg-gray-50 rounded-lg  p-5'
      >
        <div className='flex gap-4 text-gray-400 font-bold'>
          More BlogPosts
          <ArrowTopRightOnSquareIcon />
        </div>
      </Link>
    </section>
  );
}

export default BlogPosts;
