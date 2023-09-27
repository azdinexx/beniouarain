import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pillows Landing Page',
  description: 'Generated by create next app',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
