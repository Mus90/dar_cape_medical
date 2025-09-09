'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const t = useTranslations('whatsapp');

  // Replace with actual WhatsApp Business number
  const whatsappNumber = '+27123456789'; // Placeholder - replace with actual number
  const message = encodeURIComponent(t('message'));
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce-slow"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        title={t('tooltip')}
      >
        <ChatBubbleLeftRightIcon className="h-7 w-7" />
        
        {/* Tooltip */}
        {isHovered && (
          <div className="absolute bottom-16 right-0 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap animate-fade-in">
            {t('tooltip')}
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        )}
        
        {/* Pulse animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
      </a>
    </div>
  );
};

export default WhatsAppButton;
