import { describe, expect, test } from 'bun:test';
import {
  event,
  getEventPhase,
  eventYear,
  dateRange,
  dayHours,
  venueAddress,
} from '@/lib/event';

describe('getEventPhase', () => {
  test('is before prior to Saturday noon Detroit time', () => {
    expect(getEventPhase(new Date('2026-09-18T21:00:00-04:00'))).toBe('before');
    expect(getEventPhase(new Date('2026-09-19T11:59:00-04:00'))).toBe('before');
  });

  test('is during at Saturday noon Detroit time', () => {
    expect(getEventPhase(new Date('2026-09-19T12:00:00-04:00'))).toBe('during');
  });

  test('is still during at Sunday 6:59 PM Detroit time', () => {
    expect(getEventPhase(new Date('2026-09-20T18:59:00-04:00'))).toBe('during');
  });

  test('is after from Sunday 7:00 PM Detroit time', () => {
    expect(getEventPhase(new Date('2026-09-20T19:00:00-04:00'))).toBe('after');
    expect(getEventPhase(new Date('2026-11-01T12:00:00-04:00'))).toBe('after');
  });

  test('uses absolute instants when now is supplied in UTC', () => {
    // Sunday 6:59 PM Detroit (EDT, UTC-4) is 22:59 UTC; 7:00 PM is 23:00 UTC.
    expect(getEventPhase(new Date('2026-09-20T22:59:00Z'))).toBe('during');
    expect(getEventPhase(new Date('2026-09-20T23:00:00Z'))).toBe('after');
    // Saturday 11:59 AM Detroit is 15:59 UTC.
    expect(getEventPhase(new Date('2026-09-19T15:59:00Z'))).toBe('before');
    expect(getEventPhase(new Date('2026-09-19T16:00:00Z'))).toBe('during');
  });
});

describe('display strings', () => {
  test('Saturday and Sunday hours differ and match the poster', () => {
    expect(dayHours).toEqual([
      { day: 'Saturday', hours: '12 PM – 10 PM' },
      { day: 'Sunday', hours: '12 PM – 7 PM' },
    ]);
  });

  test('year is 2026 from config', () => {
    expect(eventYear).toBe(2026);
  });

  test('date range reads September 19–20', () => {
    expect(dateRange).toBe('September 19–20');
  });
});

describe('facts', () => {
  test('address is the Warren venue, not Rochester Hills', () => {
    expect(venueAddress).toContain('Warren');
    expect(venueAddress).not.toContain('Rochester Hills');
    expect(venueAddress).toBe('31500 Ryan Rd, Warren, MI 48092');
  });

  test('directions URL is the supplied Maps link', () => {
    expect(event.directionsUrl).toBe('https://maps.app.goo.gl/PiQkm39wcuGpEbjs7');
  });

  test('admission is free', () => {
    expect(event.freeAdmission).toBe(true);
  });

  test('poster is a 2026-specific file, never last year\'s filenames', () => {
    expect(event.poster.src).toContain(String(event.year));
    expect(event.poster.src).not.toMatch(/afis-(en|ro)\./);
  });

  test('show-sponsors flag is off', () => {
    expect(event.showSponsors).toBe(false);
  });
});
