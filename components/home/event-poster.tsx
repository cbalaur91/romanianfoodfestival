'use client';

import Image from 'next/image';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { event, eventYear, dateRange } from '@/lib/event';

const alt = `${eventYear} Romanian Food Festival poster: ${dateRange}, ${event.indoors ? `held indoors ${event.rainReason.toLowerCase()} ` : ''}at ${event.venue.name}, ${event.venue.city}, ${event.venue.region}${event.freeAdmission ? '; free entrance' : ''}`;

export function EventPoster() {
  const { src, width, height } = event.poster;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className="group block w-full cursor-zoom-in rounded-2xl focus:outline-none focus-visible:ring-4 focus-visible:ring-romanian-yellow"
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="w-full h-auto rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]"
            priority
          />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none shadow-none">
        <VisuallyHidden.Root>
          <DialogTitle>{eventYear} festival poster - full view</DialogTitle>
        </VisuallyHidden.Root>
        <div className="relative w-full flex justify-center">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes="(min-width: 896px) 896px, 100vw"
            className="max-w-full max-h-[90vh] w-auto h-auto rounded-lg shadow-2xl"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
