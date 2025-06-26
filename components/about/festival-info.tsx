'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Users, Music, Heart, Baby, Gamepad2, Palette } from 'lucide-react';

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

      {/* Kids Activities Section */}
      <Card className="bg-gradient-to-r from-blue-50 to-yellow-50 border-romanian-blue/20">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-romanian-blue flex items-center justify-center gap-2">
            <Baby className="w-8 h-8" />
            Kids Are Welcome!
          </CardTitle>
          <p className="text-lg text-gray-700 font-medium">
            A Family-Friendly Festival with Fun Activities for Children
          </p>
        </CardHeader>
        <CardContent>
          <p className="text-center text-gray-600 mb-6">
            Bring the whole family! We have plenty of exciting activities to keep children 
            entertained while parents enjoy authentic Romanian cuisine and culture.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-romanian-yellow/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🏰</span>
              </div>
              <h4 className="font-semibold text-romanian-blue mb-2">Bounce House</h4>
              <p className="text-sm text-gray-600">
                Safe, supervised bouncing fun for kids of all ages
              </p>
            </div>

            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-romanian-red/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Palette className="w-6 h-6 text-romanian-red" />
              </div>
              <h4 className="font-semibold text-romanian-blue mb-2">Face Painting</h4>
              <p className="text-sm text-gray-600">
                Professional artists creating magical designs and characters
              </p>
            </div>

            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-romanian-blue/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Gamepad2 className="w-6 h-6 text-romanian-blue" />
              </div>
              <h4 className="font-semibold text-romanian-blue mb-2">Interactive Games</h4>
              <p className="text-sm text-gray-600">
                Traditional games and activities for endless entertainment
              </p>
            </div>

            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-romanian-yellow/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">⚽</span>
              </div>
              <h4 className="font-semibold text-romanian-blue mb-2">Soccer Field</h4>
              <p className="text-sm text-gray-600">
                Open field for soccer games and running around
              </p>
            </div>

            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-romanian-red/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🏸</span>
              </div>
              <h4 className="font-semibold text-romanian-blue mb-2">Badminton</h4>
              <p className="text-sm text-gray-600">
                Racquet sports for older children and teens
              </p>
            </div>

            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-romanian-blue/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🎪</span>
              </div>
              <h4 className="font-semibold text-romanian-blue mb-2">More Fun</h4>
              <p className="text-sm text-gray-600">
                Additional activities and surprises throughout the day
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-romanian-yellow/10 rounded-lg border border-romanian-yellow/30">
            <p className="text-center text-gray-700 font-medium">
              <span className="text-romanian-blue">👨‍👩‍👧‍👦 Family Tip:</span> All activities are supervised and designed to let parents 
              relax and enjoy the festival while knowing their children are having a blast in a safe environment!
            </p>
          </div>
        </CardContent>
      </Card>

      {/* History Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-romanian-blue">Our History</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-600">
            The Romanian Food Festival began as a small church community gathering in 2010, 
            when members of the Descent of the Holy Spirit & St. Theodora of Sihla Romanian Orthodox Church 
            wanted to share their cultural heritage with the broader Michigan community.
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