import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { ScrollToTop } from '@/components/scroll-to-top';
import { LocationBanner } from '@/components/location-banner';
import { event, eventYear, eventSummary, posterAlt, shortDateRange, siteUrl } from '@/lib/event';

const inter = Inter({ subsets: ['latin'] });

const title = `Romanian Food Festival | ${shortDateRange}, ${eventYear} · ${event.venue.city}, ${event.venue.region}`;

// The 2026 poster, not /RFF.png: that image has the 2025 dates and old venue baked in.
const shareImage = {
  url: event.poster.src,
  width: event.poster.width,
  height: event.poster.height,
  alt: posterAlt,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description: eventSummary,
  keywords: `Romanian Food Festival, ${event.venue.city}, Romanian Orthodox Church, Romanian cuisine, cultural festival, Michigan events`,
  openGraph: {
    title,
    description: eventSummary,
    type: 'website',
    locale: 'en_US',
    images: [shareImage],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: eventSummary,
    images: [shareImage],
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
        <LocationBanner />
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