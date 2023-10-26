import React from 'react';

async function page({ params }: { params: { id: string } }) {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=pageBlogPost&sys.id=${params.id}`
  );
  const data = await res.json();
  let post = data.items[0];
  return <div>page</div>;
}

export default page;
