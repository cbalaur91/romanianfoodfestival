'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, GraduationCap, Users, Download, CreditCard, Mail } from 'lucide-react';

const impactAreas = [
  {
    icon: GraduationCap,
    title: 'New Classrooms',
    description: 'Building dedicated spaces for children\'s religious education and spiritual growth.',
    impact: 'Provides a nurturing environment for our young ones to grow in faith'
  },
  {
    icon: Users,
    title: 'Community Future',
    description: 'Investing in the spiritual foundation of our future generations.',
    impact: 'Shapes the spiritual development of children in our community'
  },
  {
    icon: Heart,
    title: 'Faith & Knowledge',
    description: 'Creating spaces where children can learn about their heritage and faith.',
    impact: 'Preserves Romanian Orthodox traditions for generations to come'
  }
];

const donationMethods = [
  {
    title: 'Online Donation',
    description: 'Make a secure donation using your credit card through our dedicated donation platform.',
    icon: CreditCard,
    buttonText: 'Donate Online',
    buttonAction: 'external',
    url: 'https://fundraising-pogorarea-sfantului-duh.vercel.app/'
  },
  {
    title: 'Venmo',
    description: 'Send your donation quickly and easily through Venmo.',
    icon: Heart,
    buttonText: 'Download Details',
    buttonAction: 'download',
    details: 'Venmo ID and mailing address included in donation letter'
  },
  {
    title: 'Check Payment',
    description: 'Mail your check donation to support our classroom building project.',
    icon: Mail,
    buttonText: 'Download Details',
    buttonAction: 'download',
    details: 'Mailing address and check instructions included in donation letter'
  }
];

export function Donations() {
  const handleDownloadLetter = () => {
    // This would trigger a download of the donation details letter
    console.log('Download donation letter with Venmo ID and mailing address');
  };

  const handleOnlineDonation = () => {
    window.open('https://fundraising-pogorarea-sfantului-duh.vercel.app/', '_blank');
  };

  return (
    <div className="space-y-4">
      <div className="text-center">
        <Heart className="w-12 h-12 text-romanian-red mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-romanian-blue mb-4">
          Building Our Future
        </h2>
        <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed mb-6">
          Our parish is embarking on a crucial mission to build new classrooms dedicated to children's religious studies. 
          These spaces will provide a nurturing environment where our young ones can grow in faith, knowledge, and community. 
          Your support will directly contribute to shaping the spiritual foundation of our future generations.
        </p>
      </div>

      {/* Mission Impact */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {impactAreas.map((area) => {
          const IconComponent = area.icon;
          return (
            <Card key={area.title} className="text-center border-2 hover:border-romanian-blue/30 transition-colors">
              <CardHeader>
                <IconComponent className="w-10 h-10 text-romanian-blue mx-auto mb-3" />
                <CardTitle className="text-lg">{area.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3">{area.description}</p>
                <p className="text-sm text-romanian-blue font-medium">{area.impact}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Call to Action Section */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Online Donation Card */}
        <Card className="bg-romanian-blue text-white">
          <CardContent className="p-8 text-center">
            <CreditCard className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">
              Donate Online
            </h3>
            <p className="mb-6">
              Make a secure donation using your credit card through our dedicated donation platform. 
              Quick, easy, and secure payment processing for your convenience.
            </p>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={handleOnlineDonation}
              className="w-full"
            >
              <CreditCard className="w-5 h-5 mr-2" />
              Donate Online
            </Button>
          </CardContent>
        </Card>

        {/* Download Details Card */}
        <Card className="bg-romanian-blue text-white">
          <CardContent className="p-8 text-center">
            <Download className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">
              Download Details
            </h3>
            <p className="mb-6">
              Get our donation letter with Venmo ID and mailing address for check donations. 
              Multiple convenient ways to support our mission. Contact us for any questions.
            </p>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={handleDownloadLetter}
              className="w-full"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Details
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Project Vision */}
      <Card className="bg-gray-50">
        <CardContent className="p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-romanian-blue mb-4">
                Our Vision for the Future
              </h3>
              <p className="text-gray-600 mb-4">
                The new classrooms will feature modern educational facilities while maintaining 
                the sacred atmosphere essential for religious instruction. These spaces will serve 
                as the foundation for:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Weekly religious education classes</li>
                <li>• Romanian language and culture lessons</li>
                <li>• Youth group activities and discussions</li>
                <li>• Community events and celebrations</li>
                <li>• Intergenerational learning opportunities</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <GraduationCap className="w-16 h-16 text-romanian-blue mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-romanian-blue mb-2">
                Building Tomorrow's Faith Leaders
              </h4>
              <p className="text-gray-600 text-sm">
                Your donation helps create spaces where children can develop a strong 
                spiritual foundation and deep connection to their Romanian Orthodox heritage.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tax Information */}
      <Card className="border-romanian-blue border-2">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-romanian-blue mb-3">
            Tax Deductible Donations
          </h3>
          <p className="text-gray-600 mb-3">
            The Descent of the Holy Spirit & St. Theodora of Sihla Romanian Orthodox Church 
            is a 501(c)(3) nonprofit organization. All donations are tax-deductible to the 
            full extent allowed by law.
          </p>
          <p className="text-sm text-gray-500">
            Tax ID: 38-1234567 • You will receive a receipt for your records
          </p>
        </CardContent>
      </Card>
    </div>
  );
}