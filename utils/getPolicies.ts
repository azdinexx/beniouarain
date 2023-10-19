import { get } from 'http';
import Client from 'shopify-buy';

export const client = Client.buildClient({
  domain: 'cd5ff8.myshopify.com',
  storefrontAccessToken: '947546c2e080df2158a33cbff0d958d2',
  apiVersion: '2023-07',
});

export const getAllPolicies = async () => {
  const temp = [];
  const policies = await client.shop.fetchPolicies();

  policies?.termsOfService ? temp.push(policies.termsOfService.title) : null;
  policies?.privacyPolicy ? temp.push(policies.privacyPolicy.title) : null;
  policies?.refundPolicy ? temp.push(policies.refundPolicy.title) : null;
  policies?.shippingPolicy ? temp.push(policies.shippingPolicy.title) : null;

  return temp;
};

export const getPolicie = async (policie: string) => {
  const policies = await client.shop.fetchPolicies();

  switch (policie) {
    case policies?.privacyPolicy?.title.toLocaleLowerCase().replace(' ', '-'):
      return policies?.termsOfService;
    case policies?.refundPolicy?.title.toLocaleLowerCase().replace(' ', '-'):
      return policies?.refundPolicy;
    case policies?.shippingPolicy?.title.toLocaleLowerCase().replace(' ', '-'):
      return policies?.shippingPolicy;
    case policies?.termsOfService?.title.toLocaleLowerCase().replace(' ', '-'):
      return policies?.termsOfService;
    default:
      return null;
  }
};
