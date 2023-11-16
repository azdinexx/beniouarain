'use server';

import { getProduct } from './shopify';
import { SearchProducts } from './shopify';

export async function getLeProduct(slug: string) {
  return await getProduct(slug);
}

export async function SearchProductso({
  query,
  reverse,
  sortKey,
}: {
  query?: string;
  reverse?: boolean;
  sortKey?: string;
}) {
  const res = SearchProducts({
    query,
    reverse,
    sortKey,
  });
  return res;
}
