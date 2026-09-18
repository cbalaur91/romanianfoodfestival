'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FestivalInfo } from './festival-info';
import { FoodMenu } from './food-menu';
import { Sponsorship } from './sponsorship';
// NOTE: ./donations.tsx is intentionally not rendered (no donation content in
// 2026). Keep or delete it in Release B.

// Tab values double as `?tab=` values, e.g. /about?tab=menu.
const TABS = ['festival', 'menu', 'sponsors'];

function AboutTabsView({ defaultTab }: { defaultTab: string }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      <Tabs defaultValue={defaultTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6 sm:mb-8 h-auto p-1">
          <TabsTrigger value="festival">Festival</TabsTrigger>
          <TabsTrigger value="menu">Menu</TabsTrigger>
          <TabsTrigger value="sponsors">Sponsors</TabsTrigger>
        </TabsList>
        
        <TabsContent value="festival">
          <FestivalInfo />
        </TabsContent>
        
        <TabsContent value="menu">
          <FoodMenu />
        </TabsContent>
        
        <TabsContent value="sponsors">
          <Sponsorship />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function AboutTabsFromQuery() {
  const tab = useSearchParams().get('tab');
  return <AboutTabsView defaultTab={tab && TABS.includes(tab) ? tab : 'festival'} />;
}

// useSearchParams needs a Suspense boundary to keep /about statically
// generated; the fallback is the Festival tab, so the static HTML has content.
export function AboutTabs() {
  return (
    <Suspense fallback={<AboutTabsView defaultTab="festival" />}>
      <AboutTabsFromQuery />
    </Suspense>
  );
}