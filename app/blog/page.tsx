import React from 'react';

const posts = [
  {
    title: 'My first blog post',
    content: 'This is my first blog post',
  },
  {
    title: 'My second blog post',
    content: 'This is my second blog post',
  },
  {
    title: 'My third blog post',
    content: 'This is my third blog post',
  },
  {
    title: 'My third blog post',
    content: 'This is my third blog post',
  },
  {
    title: 'My third blog post',
    content: 'This is my third blog post',
  },
  {
    title: 'My third blog post',
    content: 'This is my third blog post',
  },
  {
    title: 'My third blog post',
    content: 'This is my third blog post',
  },
];
function page() {
  return (
    <div>
      <div className='grid grid-cols-4 gap-4'>
        {posts.map((post, i) => (
          <div key={post.title} className='  p-4 flex flex-col gap-2 '>
            <div className='w-f aspect-video bg-gray-100 rounded-md'></div>
            <h3 className='text-transparent bg-gray-200 w-fit rounded-sm'>
              {post.title}
            </h3>
            <p className='text-transparent bg-gray-100 w-fit'>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
