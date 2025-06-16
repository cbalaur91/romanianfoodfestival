'use client';

import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

type Sponsor = {
  id: number;
  name: string;
  logo: string;
  website: string;
};

type RepeatedSponsor = {
  id: string;
  name: string;
  logo: string;
  website: string;
};

const sponsors: Sponsor[] = [
  {
    id: 1,
    name: 'Web Development',
    logo: '/sponsors/AiWebHub.jpeg',
    website: 'https://aiwebhub.io',
  }
];

export function SponsorsBanner() {
  const handleSponsorClick = (website: string) => {
    window.open(website, '_blank', 'noopener,noreferrer');
  };

  // Create multiple copies of sponsors to ensure continuous scrolling
  const getRepeatedSponsors = (): RepeatedSponsor[] => {
    const minItems = 8; // Minimum items needed for smooth continuous scroll
    const repeatedSponsors: RepeatedSponsor[] = [];
    
    for (let i = 0; i < minItems; i++) {
      sponsors.forEach((sponsor, index) => {
        repeatedSponsors.push({
          id: `${sponsor.id}-${i}-${index}`, // Unique ID for each copy
          name: sponsor.name,
          logo: sponsor.logo,
          website: sponsor.website,
        });
      });
    }
    
    return repeatedSponsors;
  };

  const displaySponsors = getRepeatedSponsors();

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-romanian-blue mb-4">
            Our Valued Sponsors
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We&apos;re grateful to our sponsors who help make the Romanian Food Festival possible. 
            Click on any logo to visit their website and learn more about their services.
          </p>
        </div>

        <InfiniteSlider 
          gap={24} 
          duration={60} 
          durationOnHover={70}
          className="py-8"
        >
          {displaySponsors.map((sponsor) => (
            <Card 
              key={sponsor.id}
              className="cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-white border-2 hover:border-romanian-blue/30"
              onClick={() => handleSponsorClick(sponsor.website)}
            >
              <CardContent className="p-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="relative w-28 h-16 mb-3 mx-auto">
                    <Image
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      fill
                      className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <h4 className="text-sm font-medium text-gray-800">
                    {sponsor.name}
                  </h4>
                </div>
              </CardContent>
            </Card>
          ))}
        </InfiniteSlider>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Interested in becoming a sponsor? 
            <span className="text-romanian-blue font-medium ml-1">
              Download our sponsorship contract below to learn more.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}