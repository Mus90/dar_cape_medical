'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { ChatBubbleLeftRightIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface FloatingWhatsAppProps {
  phoneNumber?: string;
  pageContext?: string;
  specialty?: string;
}

const FloatingWhatsApp = ({ 
  phoneNumber = '27XXXXXXXXX', 
  pageContext = 'general',
  specialty 
}: FloatingWhatsAppProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('whatsapp');

  const getContextualMessage = () => {
    switch (pageContext) {
      case 'ophthalmology':
        return 'I would like to ask about Ophthalmology specialist training in South Africa.';
      case 'orthopaedic-surgery':
        return 'I would like to ask about Orthopaedic Surgery training in South Africa.';
      case 'hpcsa':
        return 'I would like help understanding my HPCSA registration pathway.';
      case 'specialty':
        return `I would like to ask about ${specialty} specialist training in South Africa.`;
      default:
        return 'I would like guidance regarding medical training or registration in South Africa.';
    }
  };

  const message = getContextualMessage();
  const source = pageContext === 'general' ? 'homepage' : pageContext;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}&source=${encodeURIComponent(source)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3 rtl:space-x-reverse rtl:items-start">
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl p-4 max-w-xs mb-2 animate-in slide-in-from-bottom-2 duration-300">
          <div className="flex items-start space-x-3 rtl:space-x-reverse">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <ChatBubbleLeftRightIcon className="h-6 w-6 text-green-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900 mb-1">{t('title')}</p>
              <p className="text-xs text-gray-600 mb-3">{t('description')}</p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-lg hover:bg-green-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t('startChat')}
              </a>
            </div>
          </div>
        </div>
      )}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-green-600 rounded-full shadow-2xl flex items-center justify-center hover:bg-green-700 transition-all duration-300 hover:scale-110 group"
        aria-label="WhatsApp"
      >
        {isOpen ? (
          <XMarkIcon className="h-7 w-7 text-white" />
        ) : (
          <ChatBubbleLeftRightIcon className="h-7 w-7 text-white group-hover:animate-pulse" />
        )}
      </button>
    </div>
  );
};

export default FloatingWhatsApp;
