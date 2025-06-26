'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Eye } from 'lucide-react';
import Image from 'next/image';

// Map dish names to actual food images
const dishImages: { [key: string]: string } = {
  'Vegetable Soup': '/Food/ciorba-de-legume.jpg',
  'Ciorba de Burta': '/Food/ciorba-de-burta.jpg',
  'Goulash': '/Food/hungarian-goulash.jpg',
  'Stuffed Cabbage Rolls (Meat)': '/Food/sarmale.jpg',
  'Stuffed Cabbage Rolls (Rice)': '/Food/sarmale.jpg',
  'Skinless Sausages': '/Food/mici.jpg',
  'Homemade Sausage w/ Beans': '/Food/carnati.jpg',
  'Homemade Sausage w/ Fries': '/Food/carnati.jpg',
  'Grilled Chicken Thigh': '/Food/pui-gratar.jpg',
  'Hot Dog Combo': '/Food/hot-dog.jpg',
  'French Fries': '/Food/french-fries.jpg',
  'Beans': '/Food/iahnie.jpg',
  'Polenta': '/Food/mamaliga.jpg',
  'Coleslaw': '/Food/salata-de-varza.jpg',
  'Polenta w/ Cheese & Sour Cream': '/Food/mamaliga-branza-smantana.jpg',
  'Chimney Cakes Simple': '/Food/kurtos.jpg',
  'Chimney Cakes with Walnuts': '/Food/kurtos-nuca.jpg',
  'Must': '/Food/must.jpg'
};

// Items that should NOT have View Image button
const itemsWithoutImages = [
  'Romanian Donuts with Chocolate',
  'Cheese filled Donuts', 
  'Ice cream',
  'Cotton Candy',
  'Popcorn',
  'Wine (bottle)',
  'Wine (glass) 9 oz',
  'Coffee',
  'Water (bottle)',
  'Pop (can)',
  'Capri Sun',
  'Club soda (can)',
  'Beer Stella (glass) 16 oz',
  'Beer Stella (pitcher)',
  'Beer IPA (glass) 16 oz',
  'Beer IPA (pitcher)'
];

const menuCategories = [
  {
    name: 'Soups',
    items: [
      { name: 'Vegetable Soup', description: 'Fresh seasonal vegetable soup', price: '' },
      { name: 'Ciorba de Burta', description: 'Traditional tripe soup', price: '', popular: true },
    ]
  },
  {
    name: 'Stews',
    items: [
      { name: 'Goulash', description: 'Stew w/ Meat & Potatoes', price: '' },
    ]
  },
  {
    name: 'Stuffed Cabbage',
    items: [
      { name: 'Stuffed Cabbage Rolls (Meat)', description: 'With polenta and sour cream', price: '', popular: true },
      { name: 'Stuffed Cabbage Rolls (Rice)', description: 'With polenta and sour cream', price: '' },
    ]
  },
  {
    name: 'Grill Combos',
    items: [
      { name: 'Skinless Sausages', description: 'With bread and mustard', price: '', popular: true },
      { name: 'Homemade Sausage w/ Beans', description: 'With coleslaw and bread', price: '' },
      { name: 'Homemade Sausage w/ Fries', description: 'With coleslaw and bread', price: '' },
      { name: 'Grilled Chicken Thigh', description: 'With fries, coleslaw, and bread', price: '' },
    ]
  },
  {
    name: 'Kid\'s Combo',
    items: [
      { name: 'Hot Dog Combo', description: 'Hot dog, fries, cookie & juice', price: '' },
    ]
  },
  {
    name: 'Sides',
    items: [
      { name: 'French Fries', description: 'Crispy golden fries', price: '' },
      { name: 'Beans', description: 'Traditional bean side', price: '' },
      { name: 'Polenta', description: 'Traditional cornmeal dish', price: '' },
      { name: 'Coleslaw', description: 'Fresh cabbage salad', price: '' },
      { name: 'Polenta w/ Cheese & Sour Cream', description: 'Rich and creamy polenta', price: '' },
    ]
  },
  {
    name: 'Desserts',
    items: [
      { name: 'Romanian Donuts with Chocolate', description: 'Sweet fried pastries with chocolate', price: ''},
      { name: 'Cheese filled Donuts', description: 'Sweet donuts filled with cheese', price: '' },
      { name: 'Chimney Cakes Simple', description: 'Traditional sweet bread', price: '' },
      { name: 'Chimney Cakes with Walnuts', description: 'Sweet bread with walnuts', price: '', popular: true  },
      { name: 'Ice cream', description: 'Available during warm weather only', price: '' },
      { name: 'Cotton Candy', description: 'Spun sugar treat', price: '' },
      { name: 'Popcorn', description: 'Fresh popped corn', price: '' },
    ]
  },
  {
    name: 'Soft Drinks',
    items: [
      { name: 'Coffee', description: 'Fresh brewed coffee', price: '' },
      { name: 'Water (bottle)', description: 'Bottled water', price: '' },
      { name: 'Pop (can)', description: 'Canned soft drinks', price: '' },
      { name: 'Capri Sun', description: 'Juice pouches', price: '' },
      { name: 'Club soda (can)', description: 'Canned club soda', price: '' },
    ]
  },
  {
    name: 'Wine',
    items: [
      { name: 'Wine (bottle)', description: 'Full bottle of wine', price: '' },
      { name: 'Wine (glass) 9 oz', description: '9 oz glass of wine', price: '' },
      { name: 'Must', description: 'Traditional grape must', price: '' },
    ]
  },
  {
    name: 'Beer',
    items: [
      { name: 'Beer Stella (glass) 16 oz', description: '16 oz glass of Stella', price: '' },
      { name: 'Beer Stella (pitcher)', description: 'Full pitcher of Stella', price: '' },
      { name: 'Beer IPA (glass) 16 oz', description: '16 oz glass of IPA', price: '' },
      { name: 'Beer IPA (pitcher)', description: 'Full pitcher of IPA', price: '' },
    ]
  }
];

export function FoodMenu() {
  const [selectedDish, setSelectedDish] = useState<string | null>(null);

  const openImageModal = (dishName: string) => {
    setSelectedDish(dishName);
  };

  const closeImageModal = () => {
    setSelectedDish(null);
  };

  return (
    <div className="space-y-8" id="menu">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-romanian-blue mb-4">
          Authentic Romanian Menu
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Our menu features traditional Romanian dishes prepared with authentic recipes 
          passed down through generations. Each dish is made with care using fresh, 
          high-quality ingredients to ensure an authentic taste of Romania.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-0">
          {menuCategories.filter((_, index) => index % 2 === 0).map((category) => (
            <Card key={category.name} className="h-fit rounded-none first:rounded-t-lg last:rounded-b-lg border-b-0 last:border-b">
              <CardHeader>
                <CardTitle className="text-xl text-romanian-blue flex items-center gap-2">
                  {category.name}
                  <span className="h-px bg-romanian-yellow flex-1" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.items.map((item) => (
                  <div key={item.name} className="flex justify-between items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-gray-900">{item.name}</h4>
                        {item.popular && (
                          <Badge variant="secondary" className="bg-romanian-yellow text-romanian-blue">
                            Popular
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                      {!itemsWithoutImages.includes(item.name) && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => openImageModal(item.name)}
                          className="text-xs"
                        >
                          <Eye className="w-3 h-3 mr-1" />
                          View Image
                        </Button>
                      )}
                    </div>
                    <span className="font-bold text-romanian-red whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="space-y-0">
          {menuCategories.filter((_, index) => index % 2 === 1).map((category) => (
            <Card key={category.name} className="h-fit rounded-none first:rounded-t-lg last:rounded-b-lg border-b-0 last:border-b">
              <CardHeader>
                <CardTitle className="text-xl text-romanian-blue flex items-center gap-2">
                  {category.name}
                  <span className="h-px bg-romanian-yellow flex-1" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.items.map((item) => (
                  <div key={item.name} className="flex justify-between items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-gray-900">{item.name}</h4>
                        {item.popular && (
                          <Badge variant="secondary" className="bg-romanian-yellow text-romanian-blue">
                            Popular
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                      {!itemsWithoutImages.includes(item.name) && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => openImageModal(item.name)}
                          className="text-xs"
                        >
                          <Eye className="w-3 h-3 mr-1" />
                          View Image
                        </Button>
                      )}
                    </div>
                    <span className="font-bold text-romanian-red whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      <Dialog open={selectedDish !== null} onOpenChange={closeImageModal}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl text-romanian-blue">
              {selectedDish}
            </DialogTitle>
          </DialogHeader>
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image
              src={selectedDish ? (dishImages[selectedDish] || '/Food/22.jpg') : '/Food/22.jpg'}
              alt={selectedDish ? `${selectedDish} - Traditional Romanian dish` : 'Traditional Romanian food'}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}