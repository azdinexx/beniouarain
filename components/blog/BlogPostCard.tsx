import React from 'react';
import Image from 'next/image';

interface BlogPostCardProps {
  title: string;
  imgURL: string;
}

function BlogPostCard({ title, imgURL }: BlogPostCardProps) {
  return (
    <div className='flex flex-col'>
      <Image src={imgURL} alt={title} width={300} height={200} />
      <p>{title}</p>
    </div>
  );
}

export default BlogPostCard;
