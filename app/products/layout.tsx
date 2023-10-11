import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'All Products',
  description: 'All Products Page for the Beni ourain rugs shopify store',
};
function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export default Layout;
