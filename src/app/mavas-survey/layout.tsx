import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MAVAS Survey - Kirana Dukaandaar Field Research',
  description: 'Survey for understanding daily challenges and problems of Kirana store owners',
  robots: 'noindex, nofollow',
};

export default function MavasSurveyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
