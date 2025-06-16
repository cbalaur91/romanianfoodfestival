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
            <Button variant="secondary" size="lg">
              Download Sponsorship Contract
            </Button>
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
              <div className="text-3xl font-bold text-romanian-red mb-2">5,000+</div>
              <p className="text-sm text-gray-600">Annual Visitors</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-romanian-red mb-2">2 Days</div>
              <p className="text-sm text-gray-600">of Exposure</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-romanian-red mb-2">20+</div>
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