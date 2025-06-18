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
  'Mici': '/Food/26.jpg',
  'Carnati': '/Food/22.jpg',
  'Sarmale': '/Food/28.jpg',
  'Ciorbă de Burtă': '/Food/28.jpg',
  'Ciorbă de Fasole': '/Food/43.jpg',
  'Mămăligă': '/Food/23.jpg',
  'Salată de Icre': '/Food/26.jpg',
  'Murături': '/Food/43.jpg',
  'Papanași': '/Food/22.jpg',
  'Kurtos Kalacs': '/Food/22.jpg',
  'Clătite': '/Food/26.jpg',
  'Țuică': '/Food/43.jpg',
  'Pălincă': '/Food/22.jpg',
  'Romanian Wine': '/Food/23.jpg',
  'Coffee & Tea': '/Food/28.jpg'
};

const menuCategories = [
  {
    name: 'Main Dishes',
    items: [
      { name: 'Mici', description: 'Grilled seasoned meat rolls', price: '', popular: true },
      { name: 'Carnati', description: 'Romanian sausage', price: '' },
      { name: 'Sarmale', description: 'Cabbage rolls with meat and rice', price: '', popular: true },
      { name: 'Ciorbă de Burtă', description: 'Traditional tripe soup', price: '' },
      { name: 'Ciorbă de Fasole', description: 'Bean soup with smoked meat', price: '' },
    ]
  },
  {
    name: 'Side Dishes',
    items: [
      { name: 'Mămăligă', description: 'Traditional cornmeal porridge', price: '' },
      { name: 'Salată de Icre', description: 'Fish roe salad', price: '' },
      { name: 'Murături', description: 'Pickled vegetables', price: '' },
      { name: 'Cartofi Prajiti', description: 'French fries', price: '' },
    ]
  },
  {
    name: 'Desserts',
    items: [
      { name: 'Papanași', description: 'Sweet doughnuts with cream and jam', price: '', popular: true },
      { name: 'Langoși cu brânză', description: 'Sweet bread with cheese', price: '' },
      { name: 'Kurtos Kalacs', description: 'Chimney cake', price: '' },
    ]
  },
  {
    name: 'Beverages',
    items: [
      { name: 'Țuică', description: 'Traditional plum brandy', price: '' },
      { name: 'Pălincă', description: 'Fruit brandy', price: '' },
      { name: 'Romanian Wine', description: 'Selection of Romanian wines', price: '' },
      { name: 'Bere', description: 'Romanian beer', price: '' },
      { name: 'Coffee & Tea', description: 'Romanian coffee and herbal teas', price: '' },
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
        {menuCategories.map((category) => (
          <Card key={category.name} className="h-fit">
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
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => openImageModal(item.name)}
                      className="text-xs"
                    >
                      <Eye className="w-3 h-3 mr-1" />
                      View Image
                    </Button>
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