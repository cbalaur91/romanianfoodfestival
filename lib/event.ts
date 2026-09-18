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

// Parsed from the date strings directly (no Date/Intl) so output never depends
// on the runtime's timezone or ICU version, and server and client HTML match.
const monthOf = (date: string) => MONTHS[Number(date.slice(5, 7)) - 1];
const dayOf = (date: string) => Number(date.slice(8, 10));

const formatHour = (hour: number) =>
  `${hour % 12 === 0 ? 12 : hour % 12} ${hour < 12 ? 'AM' : 'PM'}`;

export const eventYear = event.year;

/** "September 19–20" (assumes the festival does not span a month boundary). */
export const dateRange = `${monthOf(firstDay.date)} ${dayOf(firstDay.date)}–${dayOf(lastDay.date)}`;

/** Per-day hours, e.g. { day: 'Saturday', hours: '12 PM – 10 PM' }. */
export const dayHours = event.days.map(({ day, opens, closes }) => ({
  day,
  hours: `${formatHour(opens)} – ${formatHour(closes)}`,
}));

/** "31500 Ryan Rd, Warren, MI 48092" */
export const venueAddress = `${event.venue.streetAddress}, ${event.venue.city}, ${event.venue.region} ${event.venue.postalCode}`;
