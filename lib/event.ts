// Single source of truth for festival facts. Next year's update is an edit to
// this object only. Nothing here reads the system clock: callers pass `now`.

// America/Detroit is on EDT (UTC-4) for the whole festival weekend.
const DETROIT_OFFSET = '-04:00';

export const event = {
  year: 2026,
  days: [
    { day: 'Saturday', date: '2026-09-19', opens: 12, closes: 22 },
    { day: 'Sunday', date: '2026-09-20', opens: 12, closes: 19 },
  ],
  venue: {
    name: 'Armonia Event Hall',
    alternateName: 'Parish Social Hall',
    streetAddress: '31500 Ryan Rd',
    city: 'Warren',
    region: 'MI',
    postalCode: '48092',
  },
  directionsUrl: 'https://maps.app.goo.gl/PiQkm39wcuGpEbjs7',
  indoors: true,
  rainReason: 'Due to rain',
  freeAdmission: true,
  toGoNote: 'Dine in or take it to go.',
  performers: [
    { name: 'Ciprian Zopota', role: 'Live music' },
    { name: 'DJ Oli & Orga', role: 'DJ' },
  ],
  organizer:
    'Descent of the Holy Spirit & St. Theodora of Sihla Romanian Orthodox Church',
  // New filename every year so browser/CDN caches can never serve an old poster.
  poster: { src: '/AFIS/afis-2026.jpg', width: 1206, height: 1501 },
  showSponsors: false,
} as const;

export type EventPhase = 'before' | 'during' | 'after';

const firstDay = event.days[0];
const lastDay = event.days[event.days.length - 1];

const toIso = (date: string, hour: number) =>
  `${date}T${String(hour).padStart(2, '0')}:00:00${DETROIT_OFFSET}`;

/** ISO 8601 instants with the Detroit offset, e.g. for schema.org Event. */
export const startIso = toIso(firstDay.date, firstDay.opens);
export const endIso = toIso(lastDay.date, lastDay.closes);

const startMs = new Date(startIso).getTime();
const endMs = new Date(endIso).getTime();

export function getEventPhase(now: Date): EventPhase {
  const t = now.getTime();
  if (t < startMs) return 'before';
  if (t < endMs) return 'during';
  return 'after';
}

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];
const SHORT_MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June',
  'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec',
];

// Parsed from the date strings directly (no Date/Intl) so output never depends
// on the runtime's timezone or ICU version, and server and client HTML match.
const monthOf = (date: string) => MONTHS[Number(date.slice(5, 7)) - 1];
const shortMonthOf = (date: string) => SHORT_MONTHS[Number(date.slice(5, 7)) - 1];
const dayOf = (date: string) => Number(date.slice(8, 10));

const formatHour = (hour: number) =>
  `${hour % 12 === 0 ? 12 : hour % 12} ${hour < 12 ? 'AM' : 'PM'}`;

export const eventYear = event.year;

/** "September 19–20" (assumes the festival does not span a month boundary). */
export const dateRange = `${monthOf(firstDay.date)} ${dayOf(firstDay.date)}–${dayOf(lastDay.date)}`;

/** "Sept 19–20", for page titles. */
export const shortDateRange = `${shortMonthOf(firstDay.date)} ${dayOf(firstDay.date)}–${dayOf(lastDay.date)}`;

/** Per-day hours, e.g. { day: 'Saturday', hours: '12 PM – 10 PM' }. */
export const dayHours = event.days.map(({ day, opens, closes }) => ({
  day,
  hours: `${formatHour(opens)} – ${formatHour(closes)}`,
}));

/** "31500 Ryan Rd, Warren, MI 48092" */
export const venueAddress = `${event.venue.streetAddress}, ${event.venue.city}, ${event.venue.region} ${event.venue.postalCode}`;

/** Poster alt text: the poster's key facts, for the lightbox and share cards. */
export const posterAlt = `${eventYear} Romanian Food Festival poster: ${dateRange}, ${event.indoors ? `held indoors ${event.rainReason.toLowerCase()} ` : ''}at ${event.venue.name}, ${event.venue.city}, ${event.venue.region}${event.freeAdmission ? '; free entrance' : ''}`;

/** Live domain; absolute URLs for share images and structured data. */
export const siteUrl = 'https://www.romanianfoodfestival.org';

/** One-sentence summary for meta descriptions and structured data. */
export const eventSummary = `Authentic Romanian food, live music and culture, ${dateRange}, ${event.year}, at ${event.venue.name}, ${venueAddress}${event.indoors ? ' (indoors)' : ''}.${event.freeAdmission ? ' Free entrance.' : ''} ${event.toGoNote}`;

/** schema.org Event, rendered as JSON-LD on the home page. */
export const eventJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: `Romanian Food Festival ${event.year}`,
  description: eventSummary,
  startDate: startIso,
  endDate: endIso,
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  eventStatus: 'https://schema.org/EventScheduled',
  location: {
    '@type': 'Place',
    name: event.venue.name,
    alternateName: event.venue.alternateName,
    address: {
      '@type': 'PostalAddress',
      streetAddress: event.venue.streetAddress,
      addressLocality: event.venue.city,
      addressRegion: event.venue.region,
      postalCode: event.venue.postalCode,
      addressCountry: 'US',
    },
  },
  image: [`${siteUrl}${event.poster.src}`],
  isAccessibleForFree: event.freeAdmission,
  // A paid year needs a real price here; the config only knows "free".
  ...(event.freeAdmission && {
    offers: {
      '@type': 'Offer',
      price: 0,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: siteUrl,
    },
  }),
  organizer: {
    '@type': 'Organization',
    name: event.organizer,
    url: siteUrl,
  },
};
