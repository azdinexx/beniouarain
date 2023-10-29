import { getAllPosts } from '@/lib/blog';
import { getCollections, getPages, getProducts } from '@/lib/shopify';
import { validateEnvironmentVariables } from '@/lib/utils';
import { MetadataRoute } from 'next';

type Route = {
  url: string;
  lastModified: string;
};

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  validateEnvironmentVariables();

  const routesMap = [''].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  const collectionsPromise = getCollections().then((collections) =>
    collections.map((collection) => ({
      url: `${baseUrl}collections/${collection.path.split('/').pop()}`,
      lastModified: collection.updatedAt,
    }))
  );

  const productsPromise = getProducts({}).then((products) =>
    products.map((product) => ({
      url: `${baseUrl}all/${product.handle}`,
      lastModified: product.updatedAt,
    }))
  );

  const postsPormise = getAllPosts().then((posts) =>
    posts.map((post) => ({
      url: `${baseUrl}blog/${post.sys.id}`,
      lastModified: post.sys.updatedAt,
    }))
  );

  let fetchedRoutes: Route[] = [];

  try {
    fetchedRoutes = (
      await Promise.all([collectionsPromise, productsPromise, postsPormise])
    ).flat();
  } catch (error) {
    throw JSON.stringify(error, null, 2);
  }

  return [...routesMap, ...fetchedRoutes];
}
