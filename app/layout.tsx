import type { Metadata } from 'next';
import './globals.css';
import { Providers } from '@/components/shared/providers';


export const metadata: Metadata = {
  title: 'YouTube Collaboration Platform | Connect & Create',
  description: 'The ultimate space for YouTube creators to collaborate and grow together.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">

        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

