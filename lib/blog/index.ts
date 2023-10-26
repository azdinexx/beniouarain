import { createClient } from 'contentful';

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

export const getAllPosts = async () => {
  let posts = await client.getEntries({
    content_type: 'post',
  });

  return posts.items;
};

export const getPost = async (id: string) => {
  if (!id) return null;
  let post = await client.getEntry(id);
  if (!post) return null;
  return post;
};
