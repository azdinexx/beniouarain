import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Collections',
  description: 'Generated by create next app',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <main className='container mx-auto '>{children}</main>;
}