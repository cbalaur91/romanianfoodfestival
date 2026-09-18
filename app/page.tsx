import { HeroSection } from '@/components/home/hero-section';
import { FestivalFacts } from '@/components/home/festival-facts';
import { NewsletterSignup } from '@/components/home/newsletter-signup';
import { eventJsonLd } from '@/lib/event';

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // Escape "<" so no config string can close the script tag early.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(eventJsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <HeroSection />
      <FestivalFacts />
      <NewsletterSignup />
    </>
  );
}
