import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Heart, HandHeart } from 'lucide-react';
import { event, venueAddress } from '@/lib/event';

export function ContactInfo() {
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

        {/* Sponsorship */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-romanian-blue flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Sponsorship
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600 mb-4">
              For sponsorship and partnership inquiries.
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
            <p>
              <strong>Church address:</strong> 1808 School Rd, Rochester Hills, Michigan{' '}
              <span className="text-romanian-red font-medium">(not the festival location)</span>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Directions Note */}
      <Card className="bg-romanian-blue text-white">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-3">Need Directions?</h3>
          <p className="mb-4">
            This year the festival is{event.indoors && ' indoors'} at {event.venue.name}, {venueAddress}.
          </p>
          <Button asChild variant="secondary" className="w-full">
            <a href={event.directionsUrl} target="_blank" rel="noopener noreferrer">
              <MapPin className="w-4 h-4 mr-2" aria-hidden="true" />
              Get Directions
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}