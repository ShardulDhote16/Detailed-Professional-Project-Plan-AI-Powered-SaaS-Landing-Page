import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ContentBot AI - AI-Powered Content Generation Platform',
  description: 'Generate high-quality content 10x faster with AI. Blog posts, social media, ads, and more. Start your free trial today.',
  keywords: 'AI content, content generation, writing assistant, SEO content, blog writing',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}