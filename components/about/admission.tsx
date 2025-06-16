'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Ticket, Clock, Users, Star } from 'lucide-react';

export function Admission() {
  return (
    <div className="space-y-8">

      {/* Festival Schedule */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-romanian-blue flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Festival Schedule
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-romanian-blue">Saturday, September 20</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>12:00 PM</span>
                  <span>Festival Opens</span>
                </div>
                <div className="flex justify-between">
                  <span>1:00 PM</span>
                  <span>Traditional Music Begins</span>
                </div>
                <div className="flex justify-between">
                  <span>2:00 PM</span>
                  <span>Cooking Demonstrations</span>
                </div>
                <div className="flex justify-between">
                  <span>3:00 PM</span>
                  <span>Folk Dance Performances</span>
                </div>
                <div className="flex justify-between">
                  <span>4:00 PM</span>
                  <span>Romanian Language Workshop</span>
                </div>
                <div className="flex justify-between">
                  <span>6:00 PM</span>
                  <span>Evening Entertainment</span>
                </div>
                <div className="flex justify-between">
                  <span>7:00 PM</span>
                  <span>Festival Closes</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-romanian-blue">Sunday, September 21</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>12:00 PM</span>
                  <span>Festival Opens</span>
                </div>
                <div className="flex justify-between">
                  <span>1:00 PM</span>
                  <span>Children&apos;s Activities</span>
                </div>
                <div className="flex justify-between">
                  <span>2:00 PM</span>
                  <span>Cultural Presentations</span>
                </div>
                <div className="flex justify-between">
                  <span>3:00 PM</span>
                  <span>Traditional Crafts Display</span>
                </div>
                <div className="flex justify-between">
                  <span>4:00 PM</span>
                  <span>Live Music Performances</span>
                </div>
                <div className="flex justify-between">
                  <span>6:00 PM</span>
                  <span>Closing Ceremony</span>
                </div>
                <div className="flex justify-between">
                  <span>7:00 PM</span>
                  <span>Festival Closes</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}