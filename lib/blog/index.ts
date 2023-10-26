const BASE_URL = `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}`;
const type = 'pageBlogPost';

export async function getAllPosts() {
  const url = `${BASE_URL}&content_type=${type}`;
  try {
    const res = await fetch(url);
    const posts = await res.json();
    return posts;
  } catch (error) {
    return error;
  }
}

export async function getPost(id: string) {
  if (!id) return new Error('No id provided');
  const url = `${BASE_URL}&content_type=${type}&sys.id=${id}`;
  try {
    const res = await fetch(url);
    const post = await res.json();
    return post;
  } catch (error) {
    return error;
  }
}
