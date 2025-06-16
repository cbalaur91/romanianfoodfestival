import { Metadata } from 'next';
import { AboutTabs } from '@/components/about/about-tabs';

export const metadata: Metadata = {
  title: 'About | Romanian Food Festival',
  description: 'Learn about the Romanian Food Festival, our history, food menu, sponsorship opportunities, and admission details.',
};

export default function AboutPage() {
  return (
    <div className="pt-16">
      <div className="bg-romanian-red text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            About the Festival
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover the rich traditions, authentic flavors, and vibrant culture 
            of Romania at our annual celebration in Rochester Hills.
          </p>
        </div>
      </div>
      <AboutTabs />
    </div>
  );
}