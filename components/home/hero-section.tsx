'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const foodImages = [
  '/Food/sarmale.jpg',
  '/Food/mici.jpg',
  '/Food/carnati.jpg',
  '/Food/cartofi.jpg',
  '/Food/langosi.jpg',
  '/Food/kurtos.jpg',
  '/Food/iahnie.jpg',
  '/Food/vin.jpg'
];

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === foodImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-r from-white via-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-12 lg:py-0">
          
          {/* Left Column - Hero Image Slideshow */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] lg:aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl">
              {/* Slideshow Images */}
              {foodImages.map((image, index) => (
                <Image
                  key={image}
                  src={image}
                  alt="Traditional Romanian cuisine"
                  fill
                  className={`object-cover transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                  priority={index === 0}
                />
              ))}
              
              {/* Romanian flag accent overlay */}
              <div className="absolute top-0 left-0 w-full h-2 bg-romanian-flag"></div>
              <div className="absolute bottom-0 right-0 w-2 h-full bg-gradient-to-t from-romanian-red via-romanian-yellow to-romanian-blue"></div>
            </div>
            
            {/* Slideshow Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {foodImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex ? 'bg-romanian-yellow scale-125' : 'bg-white/60 hover:bg-white/80'
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Decorative Romanian pattern behind image */}
            <div className="absolute -top-4 -left-4 -right-4 -bottom-4 traditional-pattern opacity-20 rounded-3xl -z-10"></div>
          </div>
          
          {/* Right Column - Content */}
          <div className="relative order-1 lg:order-2 text-center lg:text-left">
            <div className="animate-fade-in-up">
              {/* Massive Title for Split Layout */}
              <h1 className="text-7xl sm:text-8xl lg:text-9xl xl:text-[10rem] font-bold mb-8 leading-none">
                <span className="block text-romanian-blue drop-shadow-sm">Romanian</span>
                <span className="block text-romanian-yellow drop-shadow-sm -mt-4">Food</span>
                <span className="block text-romanian-red drop-shadow-sm -mt-4">Festival</span>
              </h1>
              
              {/* Year with Romanian flag accent */}
              <div className="flex items-center justify-center lg:justify-start mb-8">
                <div className="bg-romanian-flag h-1 w-16 mr-4"></div>
                <span className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-700">
                  {currentYear}
                </span>
                <div className="bg-romanian-flag h-1 w-16 ml-4"></div>
              </div>
              
              <p className="text-xl sm:text-2xl lg:text-3xl mb-12 text-gray-700 font-medium max-w-2xl mx-auto lg:mx-0">
                Experience authentic Romanian cuisine and culture at our annual celebration
              </p>
              
              {/* Event Details - Horizontal Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                <div className="romanian-card-border bg-white rounded-xl p-6 shadow-lg">
                  <Calendar className="w-6 h-6 text-romanian-red mx-auto lg:mx-0 mb-3" />
                  <div className="text-gray-800">
                    <p className="font-bold text-lg">September 20-21</p>
                    <p className="text-sm text-gray-600">{currentYear}</p>
                  </div>
                </div>
                <div className="romanian-card-border bg-white rounded-xl p-6 shadow-lg">
                  <Clock className="w-6 h-6 text-romanian-blue mx-auto lg:mx-0 mb-3" />
                  <div className="text-gray-800">
                    <p className="font-bold text-lg">12 PM - 7 PM</p>
                    <p className="text-sm text-gray-600">Both Days</p>
                  </div>
                </div>
                <div className="romanian-card-border bg-white rounded-xl p-6 shadow-lg">
                  <MapPin className="w-6 h-6 text-romanian-yellow mx-auto lg:mx-0 mb-3" />
                  <div className="text-gray-800">
                    <p className="font-bold text-lg">Rochester Hills</p>
                    <p className="text-sm text-gray-600">Michigan</p>
                  </div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-romanian-red hover:bg-romanian-red/80 text-white text-xl px-10 py-6 rounded-xl shadow-xl">
                  <Link href="/about">Learn More</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-transparent text-romanian-blue border-2 border-romanian-blue hover:bg-romanian-blue hover:text-white text-xl px-10 py-6 rounded-xl shadow-xl transition-all">
                  <Link href="/gallery">View Gallery</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Romanian flag accent elements */}
      <div className="absolute top-0 right-0 w-32 h-1 bg-romanian-flag"></div>
      <div className="absolute bottom-0 left-0 w-32 h-1 bg-romanian-flag"></div>
    </section>
  );
}