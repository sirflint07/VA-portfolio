import Navbar from '@/components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'VA Solutions - Virtual Assistant & Workflow Automation Specialist',
  description: 'Expert Virtual Assistant specializing in workflow automation and process optimization. Streamline your business with Zapier, Make, and n8n automation solutions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Navbar />
      <body className={inter.className}>{children}</body>
      <Footer />
    </html>
  );
}
