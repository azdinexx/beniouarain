'use server';

import { getProduct } from './shopify';

export async function getLeProduct(slug: string) {
  return await getProduct(slug);
}
