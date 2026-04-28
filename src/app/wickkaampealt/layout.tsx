import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wick Kaampealt - Employee Attendance System',
  description: 'Employee attendance tracking system with GPS and photo verification',
  robots: {
    index: false,
    follow: false,
  },
};

export default function WickKaampealtLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
