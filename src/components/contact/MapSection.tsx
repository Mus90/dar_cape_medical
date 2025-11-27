'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { MapPinIcon } from '@heroicons/react/24/outline';

// Declare global types for Google Maps
declare global {
  interface Window {
    google: any;
  }
}

const MapSection = () => {
  const t = useTranslations('contact');
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadGoogleMaps = async () => {
      // Check if Google Maps is already loaded
      if (window.google && window.google.maps) {
        initializeMap();
        return;
      }

      // Load Google Maps API
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = initializeMap;
      document.head.appendChild(script);
    };

    const initializeMap = () => {
      if (!mapRef.current) return;

      // Cape Town coordinates
      const capeTown = { lat: -33.9249, lng: 18.4241 };

      const map = new (window as any).google.maps.Map(mapRef.current, {
        zoom: 12,
        center: capeTown,
        styles: [
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#e9e9e9' }, { lightness: 17 }]
          },
          {
            featureType: 'landscape',
            elementType: 'geometry',
            stylers: [{ color: '#f5f5f5' }, { lightness: 20 }]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.fill',
            stylers: [{ color: '#ffffff' }, { lightness: 17 }]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#ffffff' }, { lightness: 29 }, { weight: 0.2 }]
          },
          {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [{ color: '#ffffff' }, { lightness: 18 }]
          },
          {
            featureType: 'road.local',
            elementType: 'geometry',
            stylers: [{ color: '#ffffff' }, { lightness: 16 }]
          },
          {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [{ color: '#f5f5f5' }, { lightness: 21 }]
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{ color: '#dedede' }, { lightness: 21 }]
          },
          {
            elementType: 'labels.text.stroke',
            stylers: [{ visibility: 'on' }, { color: '#ffffff' }, { lightness: 16 }]
          },
          {
            elementType: 'labels.text.fill',
            stylers: [{ saturation: 36 }, { color: '#333333' }, { lightness: 40 }]
          },
          {
            elementType: 'labels.icon',
            stylers: [{ visibility: 'off' }]
          },
          {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{ color: '#f2f2f2' }, { lightness: 19 }]
          },
          {
            featureType: 'administrative',
            elementType: 'geometry.fill',
            stylers: [{ color: '#fefefe' }, { lightness: 20 }]
          },
          {
            featureType: 'administrative',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#fefefe' }, { lightness: 17 }, { weight: 1.2 }]
          }
        ]
      });

      // Add marker for Dar Cape   office
      const marker = new (window as any).google.maps.Marker({
        position: capeTown,
        map: map,
        title: 'Dar Cape  ',
        icon: {
          path: (window as any).google.maps.SymbolPath.CIRCLE,
          scale: 10,
          fillColor: '#0ea5e9',
          fillOpacity: 1,
          strokeColor: '#ffffff',
          strokeWeight: 2
        }
      });

      // Add info window
      const infoWindow = new (window as any).google.maps.InfoWindow({
        content: `
          <div style="padding: 10px; font-family: Arial, sans-serif;">
            <h3 style="margin: 0 0 8px 0; color: #0ea5e9;">Dar Cape  </h3>
            <p style="margin: 0 0 4px 0; color: #666;">CBD</p>
            <p style="margin: 0 0 4px 0; color: #666;">Cape Town, 7925</p>
            <p style="margin: 0 0 8px 0; color: #666;">Cape Town</p>
            <p style="margin: 0; color: #0ea5e9; font-weight: bold;">+27749548756</p>
          </div>
        `
      });

      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });

      setIsLoaded(true);
    };

    loadGoogleMaps();
  }, []);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('visitOffice.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('visitOffice.description')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="card overflow-hidden">
            {!isLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-xl">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                  <p className="text-gray-600">{t('loadingMap')}</p>
                </div>
              </div>
            )}
            <div
              ref={mapRef}
              className={`h-96 w-full ${!isLoaded ? 'hidden' : ''}`}
            />
          </div>

          {/* Floating contact card */}
          <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg max-w-sm">
            <div className="flex items-center mb-3">
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                <MapPinIcon className="h-5 w-5" />
                {t('directions')}
              </button>
              <h3 className="font-bold text-gray-900">Dar Cape  </h3>
            </div>
            <div className="space-y-1 text-sm text-gray-600">
              <p>CBD</p>
              <p>Cape Town, 7925, South Africa</p>
              <p className="font-medium text-primary-600">+27749548756</p>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500">
                Monday - Friday: 8:00 AM - 6:00 PM<br />
                Saturday: 9:00 AM - 4:00 PM
              </p>
            </div>
          </div>
        </motion.div>

        {/* Directions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <a
            href="https://maps.google.com/?q=Cape+Town+ +Office"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
          >
            <MapPinIcon className="h-5 w-5 mr-2 rtl:mr-0 rtl:ml-2" />
            Get Directions
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;
