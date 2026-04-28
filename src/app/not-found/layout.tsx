import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found | Wick',
  description: 'The page you are looking for does not exist. Explore Wick products, technology, and fleet safety solutions.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFoundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
