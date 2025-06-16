'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const foodImages = [
  '/Food/22.jpg',
  '/Food/23.jpg',
  '/Food/26.jpg',
  '/Food/28.jpg',
  '/Food/43.jpg'
];

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === foodImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {foodImages.map((image, index) => (
          <Image
            key={image}
            src={image}
            alt="Romanian traditional food"
            fill
            className={`object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            } object-center`}
            style={{
              objectPosition: 'center center'
            }}
            priority={index === 0}
          />
        ))}
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Romanian Food Festival
            <span className="block text-2xl sm:text-3xl lg:text-4xl mt-2 text-romanian-yellow">
              {currentYear}
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto">
            Experience authentic Romanian cuisine and culture at our annual celebration
          </p>
          
          {/* Event Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <Calendar className="w-5 h-5 text-romanian-yellow" />
              <div>
                <p className="font-semibold">September 20-21</p>
                <p className="text-sm opacity-90">{currentYear}</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <Clock className="w-5 h-5 text-romanian-yellow" />
              <div>
                <p className="font-semibold">12 PM - 7 PM</p>
                <p className="text-sm opacity-90">Both Days</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <MapPin className="w-5 h-5 text-romanian-yellow" />
              <div>
                <p className="font-semibold">Rochester Hills</p>
                <p className="text-sm opacity-90">Michigan</p>
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-romanian-red hover:bg-romanian-red/80 text-white">
              <Link href="/about">Learn More</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/20 border-white text-white hover:bg-white/30">
              <Link href="/gallery">View Gallery</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Image Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {foodImages.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}