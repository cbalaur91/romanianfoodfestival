'use client';

import Image from 'next/image';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';

export function FlyersSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Event Flyers
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="flex justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <button className="w-full max-w-md group cursor-pointer">
                  <Image
                    src="/AFIS/afis-en.jpg"
                    alt="Romanian Food Festival English Flyer"
                    width={600}
                    height={800}
                    className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                    priority
                  />
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none shadow-none">
                <VisuallyHidden.Root>
                  <DialogTitle>English Flyer - Full View</DialogTitle>
                </VisuallyHidden.Root>
                <div className="relative w-full flex justify-center">
                  <Image
                    src="/AFIS/afis-en.jpg"
                    alt="Romanian Food Festival English Flyer - Full View"
                    width={800}
                    height={1067}
                    className="max-w-full max-h-[90vh] w-auto h-auto rounded-lg shadow-2xl"
                    priority
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>
          
          <div className="flex justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <button className="w-full max-w-md group cursor-pointer">
                  <Image
                    src="/AFIS/afis-ro.jpg"
                    alt="Romanian Food Festival Romanian Flyer"
                    width={600}
                    height={800}
                    className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                    priority
                  />
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none shadow-none">
                <VisuallyHidden.Root>
                  <DialogTitle>Romanian Flyer - Full View</DialogTitle>
                </VisuallyHidden.Root>
                <div className="relative w-full flex justify-center">
                  <Image
                    src="/AFIS/afis-ro.jpg"
                    alt="Romanian Food Festival Romanian Flyer - Full View"
                    width={800}
                    height={1067}
                    className="max-w-full max-h-[90vh] w-auto h-auto rounded-lg shadow-2xl"
                    priority
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
}