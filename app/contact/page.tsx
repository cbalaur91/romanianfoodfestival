import { Metadata } from 'next';
import { ContactInfo } from '@/components/contact/contact-info';

export const metadata: Metadata = {
  title: 'Contact | Romanian Food Festival',
  description: 'Get in touch with the Romanian Food Festival organizers. Find our location, contact information, and send us a message.',
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      <div className="bg-romanian-flag text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Have questions about the festival? Need more information? 
            We&apos;d love to hear from you and help make your visit memorable.
          </p>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ContactInfo />
      </div>
    </div>
  );
}