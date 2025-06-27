import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { ScrollToTop } from '@/components/scroll-to-top';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Romanian Food Festival | Rochester Hills, Michigan',
  description: 'Join us for the annual Romanian Food Festival hosted by the Descent of the Holy Spirit & St. Theodora of Sihla Romanian Orthodox Church in Rochester Hills, Michigan. Experience authentic Romanian cuisine, culture, and traditions.',
  keywords: 'Romanian Food Festival, Rochester Hills, Romanian Orthodox Church, Romanian cuisine, cultural festival, Michigan events',
  openGraph: {
    title: 'Romanian Food Festival | Rochester Hills, Michigan',
    description: 'Experience authentic Romanian cuisine and culture at our annual festival',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/RFF.png',
        width: 1200,
        height: 630,
        alt: 'Romanian Food Festival 2025 - September 20-21, Rochester Hills Michigan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Romanian Food Festival | Rochester Hills, Michigan',
    description: 'Experience authentic Romanian cuisine and culture at our annual festival',
    images: ['/RFF.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster />
        <ScrollToTop />
      </body>
    </html>
  );
}