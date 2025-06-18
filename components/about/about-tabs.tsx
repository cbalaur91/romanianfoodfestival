'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FestivalInfo } from './festival-info';
import { FoodMenu } from './food-menu';
import { Sponsorship } from './sponsorship';
import { Donations } from './donations';

export function AboutTabs() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      <Tabs defaultValue="festival" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-6 sm:mb-8 h-auto p-1">
          <TabsTrigger value="festival">Festival</TabsTrigger>
          <TabsTrigger value="menu">Menu</TabsTrigger>
          <TabsTrigger value="sponsorship">Sponsors</TabsTrigger>
          <TabsTrigger value="donations">Donations</TabsTrigger>
        </TabsList>
        
        <TabsContent value="festival">
          <FestivalInfo />
        </TabsContent>
        
        <TabsContent value="menu">
          <FoodMenu />
        </TabsContent>
        
        <TabsContent value="sponsorship">
          <Sponsorship />
        </TabsContent>
        
        <TabsContent value="donations">
          <Donations />
        </TabsContent>
      </Tabs>
    </div>
  );
}