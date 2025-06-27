'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SponsorsBanner } from './sponsors-banner';
import { Crown, Award, Star, Gift } from 'lucide-react';

export function Sponsorship() {
  return (
    <div className="space-y-8" id="sponsorship">
      {/* Sponsors Banner */}
      <SponsorsBanner />
      
      <div className="text-center">
        <h2 className="text-3xl font-bold text-romanian-blue mb-4">
          Become a Sponsor
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Partner with us to support Romanian culture and community while gaining valuable 
          exposure for your business. We offer a single sponsorship contract that provides 
          excellent recognition and benefits for your business.
        </p>
      </div>

      <Card className="bg-romanian-blue text-white">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Partner with Us Today
          </h3>
          <p className="mb-6">
            Ready to support the Romanian Food Festival and gain valuable exposure for your business? 
            Download our sponsorship contract to learn about the benefits and opportunities available. 
            We&apos;re excited to partner with you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="relative group">
              <Button 
                variant="secondary" 
                size="lg"
                disabled
                className="cursor-not-allowed opacity-75"
              >
                Download Sponsorship Contract
              </Button>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                Coming soon! Please contact us directly for sponsorship opportunities.
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-romanian-blue">
            Why Sponsor the Romanian Food Festival?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-romanian-red mb-2">2,000+</div>
              <p className="text-sm text-gray-600">Annual Visitors</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-romanian-red mb-2">2 Days</div>
              <p className="text-sm text-gray-600">of Exposure</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-romanian-red mb-2">10+</div>
              <p className="text-sm text-gray-600">Years of Tradition</p>
            </div>
          </div>
          <p className="text-gray-600">
            Our festival attracts diverse audiences from across Michigan and neighboring states, 
            providing excellent exposure for businesses looking to reach engaged community members 
            who value cultural diversity and authentic experiences.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}