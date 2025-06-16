import { HeroSection } from '@/components/home/hero-section';
import { FlyersSection } from '@/components/home/flyers-section';
import { NewsletterSignup } from '@/components/home/newsletter-signup';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FlyersSection />
      <NewsletterSignup />
    </>
  );
}