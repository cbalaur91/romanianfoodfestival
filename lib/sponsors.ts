interface Sponsor {
  id: number;
  name: string;
  displayText: string;
}

const defaultSponsors: Sponsor[] = [
  { id: 1, name: "Romanian Orthodox Church", displayText: "Romanian Orthodox Church" },
  { id: 2, name: "Community Partners", displayText: "Community Partners" },
  { id: 3, name: "Local Businesses", displayText: "Local Businesses" },
  { id: 4, name: "Cultural Foundation", displayText: "Cultural Foundation" },
  { id: 5, name: "Heritage Society", displayText: "Heritage Society" },
  { id: 6, name: "Festival Supporters", displayText: "Festival Supporters" }
];

export async function loadSponsors(): Promise<Sponsor[]> {
  try {
    const response = await fetch('/sponsors/sponsorslist.txt', { cache: 'no-store' });

    if (!response.ok) {
      console.warn('Failed to load sponsors list, using defaults');
      return defaultSponsors;
    }

    const text = await response.text();
    const lines = text
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0);

    if (lines.length === 0) {
      return defaultSponsors;
    }

    return lines.map((line, index) => ({
      id: index + 1,
      name: line,
      displayText: line
    }));
  } catch (error) {
    console.error('Error loading sponsors:', error);
    return defaultSponsors;
  }
}

export function getRandomBackgroundClass(index: number): string {
  const backgrounds = [
    'bg-gradient-to-br from-romanian-blue/10 to-romanian-blue/20',
    'bg-gradient-to-br from-romanian-yellow/10 to-romanian-yellow/20',
    'bg-gradient-to-br from-romanian-red/10 to-romanian-red/20',
    'bg-gradient-to-br from-gray-50 to-gray-100',
    'bg-gradient-to-br from-blue-50 to-blue-100',
    'bg-gradient-to-br from-amber-50 to-amber-100'
  ];

  return backgrounds[index % backgrounds.length];
}

export function getTextColorClass(index: number): string {
  const textColors = [
    'text-romanian-blue',
    'text-romanian-red',
    'text-gray-800',
    'text-romanian-blue',
    'text-romanian-red',
    'text-gray-700'
  ];

  return textColors[index % textColors.length];
}

export function calculateTextSize(text: string): string {
  const length = text.length;

  if (length <= 15) {
    return 'text-3xl sm:text-4xl lg:text-5xl xl:text-6xl';
  } else if (length <= 25) {
    return 'text-2xl sm:text-3xl lg:text-4xl xl:text-5xl';
  } else if (length <= 35) {
    return 'text-xl sm:text-2xl lg:text-3xl xl:text-4xl';
  } else {
    return 'text-lg sm:text-xl lg:text-2xl xl:text-3xl';
  }
}

export type { Sponsor };