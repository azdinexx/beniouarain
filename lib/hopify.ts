import Client from 'shopify-buy';
export const shopifyClient = Client.buildClient({
  domain: 'artossi.myshopify.com',
  storefrontAccessToken: 'd2b684674032f7ce1ed26362f2195bcf',
  apiVersion: '2023-10',
});

export const parseShopifyResponse = (
  response: Client.Collection[] | Client.Product[] | Client.Product
) => JSON.parse(JSON.stringify(response));
