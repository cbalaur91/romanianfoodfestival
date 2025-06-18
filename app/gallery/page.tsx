import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const GalleryGrid = dynamic(() => import('@/components/gallery/gallery-grid'), {
  loading: () => <div className="flex justify-center items-center min-h-[400px]">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-romanian-blue"></div>
  </div>
});

export const metadata: Metadata = {
  title: 'Gallery | Romanian Food Festival',
  description: 'Browse photos and videos from past Romanian Food Festival events. See the delicious food, vibrant performances, and joyful community celebrations.',
};

export default function GalleryPage() {
  return (
    <div className="pt-16">
      <div className="bg-romanian-flag text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Festival Gallery
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Relive the memories and experience the joy of past Romanian Food Festivals 
            through our collection of photos and videos.
          </p>
        </div>
      </div>
      <GalleryGrid />
    </div>
  );
}