import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Policies Page',
  description: 'Here you can find all the policies of the website.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
