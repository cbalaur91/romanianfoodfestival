import { HeroSection } from '@/components/home/hero-section';
import { FestivalFacts } from '@/components/home/festival-facts';
import { NewsletterSignup } from '@/components/home/newsletter-signup';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FestivalFacts />
      <NewsletterSignup />
    </>
  );
}
