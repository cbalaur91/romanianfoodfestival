'use client';

import { useEffect, useState } from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { event, getEventPhase, venueAddress, type EventPhase } from '@/lib/event';

// Routes are statically generated, so the phase is checked in the browser.
// The banner renders by default and only disappears once the festival is over.
export function LocationBanner() {
  const [phase, setPhase] = useState<EventPhase | null>(null);

  useEffect(() => {
    setPhase(getEventPhase(new Date()));
  }, []);

  if (phase === 'after') return null;

  return (
    <aside
      aria-label="Festival location change"
      className="bg-romanian-red text-white border-b-4 border-[rgb(var(--romanian-yellow))]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
        <p className="flex-1 text-sm sm:text-base leading-snug">
          <span className="inline-flex items-center gap-1 mr-2 px-2 py-0.5 rounded bg-romanian-yellow text-black text-xs font-bold uppercase tracking-wide align-middle">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            Location change
          </span>
          {event.rainReason}, the festival has moved indoors to{' '}
          <strong className="font-bold">{event.venue.name}</strong>, {venueAddress}.
        </p>
        <a
          href={event.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 shrink-0 rounded-md bg-romanian-yellow px-4 py-2 text-sm font-bold text-black shadow hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--romanian-red))]"
        >
          <Navigation className="h-4 w-4" aria-hidden="true" />
          Directions
        </a>
      </div>
    </aside>
  );
}
