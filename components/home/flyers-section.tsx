import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText } from 'lucide-react';

export function FlyersSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Event Flyers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Download our official event flyers available in English and Romanian
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="group hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <FileText className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">English Flyer</h3>
              <p className="text-gray-600 text-center mb-6">
                Official event information and details in English
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  asChild 
                  className="flex-1"
                  variant="outline"
                >
                  <a 
                    href="/AFIS/AFIS-EN.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <FileText className="w-4 h-4" />
                    View PDF
                  </a>
                </Button>
                <Button 
                  asChild 
                  className="flex-1"
                >
                  <a 
                    href="/AFIS/AFIS-EN.pdf" 
                    download="Romanian-Food-Festival-Flyer-EN.pdf"
                    className="flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-200 transition-colors">
                  <FileText className="w-8 h-8 text-red-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Romanian Flyer</h3>
              <p className="text-gray-600 text-center mb-6">
                Informații oficiale despre eveniment în română
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  asChild 
                  className="flex-1"
                  variant="outline"
                >
                  <a 
                    href="/AFIS/AFIS-RO.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <FileText className="w-4 h-4" />
                    View PDF
                  </a>
                </Button>
                <Button 
                  asChild 
                  className="flex-1"
                >
                  <a 
                    href="/AFIS/AFIS-RO.pdf" 
                    download="Romanian-Food-Festival-Flyer-RO.pdf"
                    className="flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}