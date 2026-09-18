import type { ReactNode } from 'react';
import { Calendar, Clock, MapPin, Ticket, Music, UtensilsCrossed, type LucideIcon } from 'lucide-react';
import { event, eventYear, dateRange, dayHours, venueAddress } from '@/lib/event';

// The poster's key facts as real text (the poster itself is in the hero).
const facts: { icon: LucideIcon; label: string; content: ReactNode }[] = [
  {
    icon: Calendar,
    label: 'When',
    content: (
      <>
        <p className="font-bold">{event.days.map((d) => d.day).join(' & ')}</p>
        <p>{dateRange}, {eventYear}</p>
      </>
    ),
  },
  {
    icon: Clock,
    label: 'Hours',
    content: dayHours.map(({ day, hours }) => (
      <p key={day}>
        <span className="font-bold">{day}</span> {hours}
      </p>
    )),
  },
  {
    icon: MapPin,
    label: 'Where',
    content: (
      <>
        <p className="font-bold">
          {event.venue.name} ({event.venue.alternateName})
        </p>
        <p>{venueAddress}</p>
        {event.indoors && <p>Indoors ({event.rainReason.toLowerCase()})</p>}
        <a
          href={event.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-1 font-semibold text-romanian-blue underline underline-offset-4 hover:text-romanian-red"
        >
          Get directions
        </a>
      </>
    ),
  },
  ...(event.freeAdmission
    ? [{ icon: Ticket, label: 'Admission', content: <p className="font-bold">Free entrance</p> }]
    : []),
  {
    icon: Music,
    label: 'Performers',
    content: event.performers.map(({ name, role }) => (
      <p key={name}>
        <span className="font-bold">{name}</span> · {role}
      </p>
    )),
  },
  {
    icon: UtensilsCrossed,
    label: 'Food',
    content: <p>{event.toGoNote}</p>,
  },
];

export function FestivalFacts() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50" aria-labelledby="festival-facts-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 id="festival-facts-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Festival at a Glance
          </h2>
        </div>

        <dl className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {facts.map(({ icon: Icon, label, content }) => (
            <div key={label} className="romanian-card-border bg-white rounded-xl p-6 shadow-lg">
              <dt className="flex items-center gap-2 mb-3 text-sm font-semibold uppercase tracking-widest text-gray-500">
                <Icon className="w-5 h-5 text-romanian-blue" aria-hidden="true" />
                {label}
              </dt>
              <dd className="space-y-1 text-lg text-gray-800">{content}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
