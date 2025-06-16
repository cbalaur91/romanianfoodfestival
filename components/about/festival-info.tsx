'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Users, Music, Heart } from 'lucide-react';

export function FestivalInfo() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold text-romanian-blue mb-4">
            A Celebration of Romanian Heritage
          </h2>
          <p className="text-gray-600 mb-6">
            For over two decades, the Romanian Food Festival has brought together families, 
            friends, and food enthusiasts to celebrate the rich culinary traditions and 
            vibrant culture of Romania. Hosted by the Descent of the Holy Spirit & 
            St. Theodora of Sihla Romanian Orthodox Church, this annual event has become 
            a beloved tradition in the Rochester Hills community.
          </p>
          <p className="text-gray-600">
            Our festival offers an authentic taste of Romania through traditional dishes 
            prepared by skilled cooks using time-honored family recipes passed down 
            through generations.
          </p>
        </div>
        <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
          <Image
            src="/2023/1.jpg"
            alt="Romanian traditional food"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* Festival Highlights */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="text-center">
            <Calendar className="w-8 h-8 text-romanian-blue mx-auto mb-2" />
            <CardTitle className="text-lg">Annual Tradition</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-600">
              Celebrating over 20 years of bringing Romanian culture to Michigan
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <Users className="w-8 h-8 text-romanian-yellow mx-auto mb-2" />
            <CardTitle className="text-lg">Community Event</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-600">
              Thousands of visitors from across the Midwest join us each year
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <Music className="w-8 h-8 text-romanian-red mx-auto mb-2" />
            <CardTitle className="text-lg">Live Entertainment</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-600">
              Traditional Romanian folk music and dance performances
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <Heart className="w-8 h-8 text-romanian-blue mx-auto mb-2" />
            <CardTitle className="text-lg">Cultural Heritage</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-600">
              Preserving and sharing Romanian traditions with future generations
            </p>
          </CardContent>
        </Card>
      </div>

      {/* History Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-romanian-blue">Our History</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-600">
            The Romanian Food Festival began as a small church community gathering in the early 2000s, 
            when members of the Descent of the Holy Spirit & St. Theodora of Sihla Romanian Orthodox Church 
            wanted to share their cultural heritage with the broader Rochester Hills community.
          </p>
          <p className="text-gray-600">
            What started as a modest event in the church hall has grown into one of Michigan&apos;s most 
            anticipated cultural festivals, attracting visitors from across the Midwest who come to 
            experience authentic Romanian cuisine, music, and traditions.
          </p>
          <p className="text-gray-600">
            Each year, our dedicated volunteers work tirelessly to prepare traditional dishes using 
            recipes that have been carefully preserved and passed down through generations. The festival 
            not only serves as a fundraiser for our church community but also as a bridge between 
            cultures, fostering understanding and appreciation for Romanian heritage.
          </p>
          <p className="text-gray-600">
            Today, the Romanian Food Festival stands as a testament to the power of food to bring 
            people together, creating lasting memories and friendships while preserving the rich 
            culinary traditions of Romania for future generations to discover and enjoy.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}