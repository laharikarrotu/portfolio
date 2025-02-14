import './globals.css';
import '../styles/animations.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lahari Karrotu - Data Engineer & Cloud Specialist',
  description: 'Professional portfolio showcasing expertise in data engineering, cloud architecture, and AWS services.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className} suppressHydrationWarning>
        {children}
      
      </body>
    </html>
  );
}