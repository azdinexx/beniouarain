import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Policies',
  description: 'Policies Page',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
