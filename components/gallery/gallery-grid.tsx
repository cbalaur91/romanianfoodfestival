'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ChevronLeft, ChevronRight, Filter, Play } from 'lucide-react';

const galleryItems = [
  // 2025 Images
  {
    id: 34,
    src: '/videos/PresentationVideo2025.mp4',
    videoSrc: '/videos/PresentationVideo2025.mp4',
    alt: 'Romanian Food Festival 2025',
    year: '2025',
    type: 'video'
  },
  {
    id: 12,
    src: '/2025/_MG_7087.JPG',
    alt: 'Romanian Food Festival',
    year: '2025',
    type: 'image'
  },
  {
    id: 13,
    src: '/2025/_MG_7096.JPG',
    alt: 'Romanian Food Festival',
    year: '2025',
    type: 'image'
  },
  {
    id: 14,
    src: '/2025/_MG_7155.JPG',
    alt: 'Romanian Food Festival',
    year: '2025',
    type: 'image'
  },
  {
    id: 15,
    src: '/2025/_MG_7174.JPG',
    alt: 'Romanian Food Festival',
    year: '2025',
    type: 'image'
  },
  {
    id: 16,
    src: '/2025/_MG_7183.JPG',
    alt: 'Romanian Food Festival',
    year: '2025',
    type: 'image'
  },
  {
    id: 17,
    src: '/2025/_MG_7187.JPG',
    alt: 'Romanian Food Festival',
    year: '2025',
    type: 'image'
  },
  {
    id: 18,
    src: '/2025/_MG_7190.JPG',
    alt: 'Romanian Food Festival',
    year: '2025',
    type: 'image'
  },
  {
    id: 19,
    src: '/2025/_MG_7193.JPG',
    alt: 'Romanian Food Festival',
    year: '2025',
    type: 'image'
  },
  {
    id: 20,
    src: '/2025/_MG_7204.JPG',
    alt: 'Romanian Food Festival',
    year: '2025',
    type: 'image'
  },
  {
    id: 21,
    src: '/2025/_MG_7213.JPG',
    alt: 'Romanian Food Festival',
    year: '2025',
    type: 'image'
  },
  {
    id: 22,
    src: '/2025/_MG_7216.JPG',
    alt: 'Romanian Food Festival',
    year: '2025',
    type: 'image'
  },
  {
    id: 23,
    src: '/2025/_MG_7243.JPG',
    alt: 'Romanian Food Festival',
    year: '2025',
    type: 'image'
  },
  {
    id: 24,
    src: '/2025/_MG_7250.JPG',
    alt: 'Romanian Food Festival',
    year: '2025',
    type: 'image'
  },
  {
    id: 25,
    src: '/2025/_MG_7265.JPG',
    alt: 'Romanian Food Festival',
    year: '2025',
    type: 'image'
  },
  {
    id: 26,
    src: '/2025/_MG_7270.JPG',
    alt: 'Romanian Food Festival',
    year: '2025',
    type: 'image'
  },
  {
    id: 27,
    src: '/2025/_MG_7281.JPG',
    alt: 'Romanian Food Festival',
    year: '2025',
    type: 'image'
  },
  {
    id: 28,
    src: '/2025/_MG_7300.JPG',
    alt: 'Romanian Food Festival',
    year: '2025',
    type: 'image'
  },
  {
    id: 29,
    src: '/2025/_MG_7337.JPG',
    alt: 'Romanian Food Festival',
    year: '2025',
    type: 'image'
  },
  {
    id: 30,
    src: '/2025/_MG_7344.JPG',
    alt: 'Romanian Food Festival',
    year: '2025',
    type: 'image'
  },
  {
    id: 31,
    src: '/2025/_MG_7365.JPG',
    alt: 'Romanian Food Festival',
    year: '2025',
    type: 'image'
  },
  {
    id: 32,
    src: '/2025/_MG_7375.JPG',
    alt: 'Romanian Food Festival',
    year: '2025',
    type: 'image'
  },
  {
    id: 33,
    src: '/2025/_MG_7376.JPG',
    alt: 'Romanian Food Festival',
    year: '2025',
    type: 'image'
  },
  // 2024 Videos
  {
    id: 5,
    src: '/videos/PresentationVideo2024.mp4',
    videoSrc: '/videos/PresentationVideo2024.mp4',
    alt: 'Presentation Video 2024',
    year: '2024',
    type: 'video'
  },
  {
    id: 6,
    src: '/videos/Dance1.mp4',
    videoSrc: '/videos/Dance1.mp4',
    alt: 'Group of dancers',
    year: '2024',
    type: 'video'
  },
  {
    id: 7,
    src: '/videos/Dance2.mp4',
    videoSrc: '/videos/Dance2.mp4',
    alt: 'Group of dancers',
    year: '2024',
    type: 'video'
  },
  {
    id: 8,
    src: '/videos/Dance3.mp4',
    videoSrc: '/videos/Dance3.mp4',
    alt: 'Group of dancers',
    year: '2024',
    type: 'video'
  },
  {
    id: 9,
    src: '/videos/Food.mp4',
    videoSrc: '/videos/Food.mp4',
    alt: 'Selection of food',
    year: '2024',
    type: 'video'
  },
  {
    id: 10,
    src: '/videos/Mici.mp4',
    videoSrc: '/videos/Mici.mp4',
    alt: 'Mici on the grill',
    year: '2024',
    type: 'video'
  },
  {
    id: 11,
    src: '/videos/CiorbaBurta.mp4',
    videoSrc: '/videos/CiorbaBurta.mp4',
    alt: 'Tripe Soup in a pot',
    year: '2024',
    type: 'video'
  },
  // 2023 Images and Videos
  {
    id: 1,
    src: '/2023/1.jpg',
    alt: 'Romanian traditional dance',
    year: '2023',
    type: 'image'
  },
  {
    id: 2,
    src: '/2023/12.jpg',
    alt: 'Romanian traditional attire',
    year: '2023',
    type: 'image'
  },
  {
    id: 3,
    src: '/2023/2.JPG',
    alt: 'Group of volunteers',
    year: '2023',
    type: 'image'
  },
  {
    id: 4,
    src: '/videos/RFF2023.png',
    videoSrc: '/videos/PresentationVideo2023.mp4',
    alt: 'Festival 2023',
    year: '2023',
    type: 'video'
  }
];

const years = ['2025', '2024', '2023'];

export default function GalleryGrid() {
  const [selectedYear, setSelectedYear] = useState('2025');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const filteredItems = galleryItems.filter(item => {
    return item.year === selectedYear;
  });

  const openLightbox = (id: number) => {
    setSelectedImage(id);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateLightbox = useCallback((direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === filteredItems.length - 1 ? 0 : currentIndex + 1;
    }
    
    setSelectedImage(filteredItems[newIndex].id);
  }, [selectedImage, filteredItems]);

  const selectedItem = filteredItems.find(item => item.id === selectedImage);

  const renderGalleryItem = (item: typeof galleryItems[0], className?: string) => (
    <div
      key={item.id}
      className={`group relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-gray-100 ${className || ''}`}
      onClick={() => openLightbox(item.id)}
    >
      {item.type === 'video' && !item.src.endsWith('.png') ? (
        <video
          src={item.src}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          muted
          playsInline
          preload="metadata"
        />
      ) : (
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="(max-width: 768px) 80vw, (max-width: 1200px) 33vw, 25vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      )}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
      
      {/* Video indicator */}
      {item.type === 'video' && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 group-hover:bg-white/30 transition-colors">
            <Play className="w-6 h-6 text-white" />
          </div>
        </div>
      )}
      
      {/* Info overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-white text-sm font-medium">{item.alt}</p>
        <div className="flex gap-2 mt-1">
          <Badge variant="secondary" className="text-xs">
            {item.year}
          </Badge>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Filters */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-2xl font-bold text-romanian-blue">
            Festival Memories ({filteredItems.length} items)
          </h2>
          
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="sm:hidden"
          >
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
        </div>
        
        <div className={`mt-4 space-y-4 ${showFilters ? 'block' : 'hidden sm:block'}`}>
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-medium text-gray-600">Year:</span>
            {years.map(year => (
              <Badge
                key={year}
                variant={selectedYear === year ? 'default' : 'outline'}
                className={`cursor-pointer ${
                  selectedYear === year 
                    ? 'bg-romanian-red hover:bg-romanian-red/80' 
                    : 'hover:bg-gray-100'
                }`}
                onClick={() => setSelectedYear(year)}
              >
                {year}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Content */}
      {isMobile ? (
        /* Mobile Carousel */
        <Carousel className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {filteredItems.map((item) => (
              <CarouselItem key={item.id} className="pl-2 md:pl-4 basis-4/5">
                {renderGalleryItem(item)}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      ) : (
        /* Desktop Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => renderGalleryItem(item))}
        </div>
      )}

      {/* Empty state */}
      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No items found for the selected filters.</p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => {
              setSelectedYear('2025');
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}

      {/* Lightbox */}
      <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
          {selectedItem && (
            <div className="relative w-full h-full">
              <DialogHeader className="sr-only">
                <DialogTitle>
                  {selectedItem.alt}
                </DialogTitle>
              </DialogHeader>
              {selectedItem.type === 'video' ? (
                <video
                  src={selectedItem.videoSrc || selectedItem.src}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                  poster={selectedItem.src}
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  src={selectedItem.src}
                  alt={selectedItem.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              )}
              
              {/* Navigation */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white"
                onClick={() => navigateLightbox('prev')}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white"
                onClick={() => navigateLightbox('next')}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
              
              {/* Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg p-4 text-white">
                <h3 className="font-medium">{selectedItem.alt}</h3>
                <div className="flex gap-2 mt-2">
                  <Badge variant="secondary">
                    {selectedItem.year}
                  </Badge>
                  {selectedItem.type === 'video' && (
                    <Badge variant="secondary">
                      Video
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}