'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Heart, HandHeart } from 'lucide-react';

export function ContactInfo() {
  const openGoogleMaps = () => {
    const address = "1808 School Rd, Rochester Hills, Michigan";
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(mapsUrl, '_blank');
  };

  return (
    <div className="space-y-6">
      {/* Two Contact Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* General Questions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-romanian-blue flex items-center gap-2">
              <Mail className="w-5 h-5" />
              General Questions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600 mb-4">
              For festival information, tickets, volunteering, and general inquiries.
            </p>

            <div className="flex items-start space-x-3">
              <Phone className="w-5 h-5 text-romanian-red mt-1" />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-gray-600">(586) 942-6839</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Mail className="w-5 h-5 text-romanian-red mt-1" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-600">romanianfestival@yahoo.com</p>
              </div>
            </div>

          </CardContent>
        </Card>

        {/* Sponsorship & Donations */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-romanian-blue flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Sponsorship & Donations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600 mb-4">
              For sponsorship opportunities, donations, and partnership inquiries.
            </p>
            
            <div className="flex items-start space-x-3">
              <HandHeart className="w-5 h-5 text-romanian-red mt-1" />
              <div>
                <p className="font-medium">Sponsorship Coordinator</p>
                <p className="text-gray-600">
                  Contact us for sponsorship and partnership opportunities
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Phone className="w-5 h-5 text-romanian-red mt-1" />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-gray-600">(248) 910-6221</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Mail className="w-5 h-5 text-romanian-red mt-1" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-600">romanianfestival@yahoo.com</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Church Information */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-romanian-blue">About Our Church</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            The Descent of the Holy Spirit & St. Theodora of Sihla Romanian Orthodox Church 
            has been serving the Romanian community in Michigan for over 30 years.
          </p>
          <div className="space-y-2 text-sm text-gray-600">
            <p><strong>Sunday Services:</strong> 8:00 AM</p>
            <p><strong>Religious Education:</strong> Sundays after service</p>
          </div>
        </CardContent>
      </Card>

      {/* Directions Note */}
      <Card className="bg-romanian-blue text-white">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-3">Need Directions?</h3>
          <p className="mb-4">
            Click the button below to open our location in Google Maps and get turn-by-turn directions to the festival.
          </p>
          <Button variant="secondary" className="w-full" onClick={openGoogleMaps}>
            <MapPin className="w-4 h-4 mr-2" />
            Open in Google Maps
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}