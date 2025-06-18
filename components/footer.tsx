'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Church Information */}
          <div>
            <h3 className="text-lg font-semibold text-romanian-blue mb-4">
              Descent of the Holy Spirit & St. Theodora of Sihla
            </h3>
            <p className="text-gray-600 mb-4">
              Romanian Food Festival
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-romanian-red" />
                <span className="text-sm text-gray-600">
                  1808 School Rd. Rochester Hills, Michigan
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-romanian-red" />
                <span className="text-sm text-gray-600">
                  (586) 942-6839
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-romanian-red" />
                <span className="text-sm text-gray-600">
                  romanianfestival@yahoo.com
                </span>
              </div>
            </div>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-romanian-blue mb-4">
              Connect With Us
            </h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="#"
                className="p-2 bg-romanian-blue text-white rounded-full hover:bg-opacity-80 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/rofoodfestival?igsh=MWI4ZWNnN2FzZmFqdA=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-romanian-blue text-white rounded-full hover:bg-opacity-80 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
            <p className="text-sm text-gray-600">
              Follow us for the latest updates on the Romanian Food Festival and community events.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Romanian Food Festival. All rights reserved. | Powered by{' '}
              <a 
                href="https://aiwebhub.io" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-romanian-blue hover:text-romanian-blue/80 transition-colors font-medium"
              >
                AiWebHub
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}