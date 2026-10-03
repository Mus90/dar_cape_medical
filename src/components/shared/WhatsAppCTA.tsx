'use client';

import { useTranslations } from 'next-intl';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

interface WhatsAppCTAProps {
  phoneNumber?: string;
  message?: string;
  pageContext?: string;
  specialty?: string;
}

const WhatsAppCTA = ({ 
  phoneNumber = '27XXXXXXXXX', 
  message,
  pageContext = 'general',
  specialty
}: WhatsAppCTAProps) => {
  const t = useTranslations('whatsapp');
  
  const getContextualMessage = () => {
    if (message) return message;
    
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

  const finalMessage = getContextualMessage();
  const source = pageContext === 'general' ? 'contact-page' : pageContext;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMessage)}&source=${encodeURIComponent(source)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-green-700 hover:shadow-lg hover:scale-105"
    >
      <ChatBubbleLeftRightIcon className="h-5 w-5 mr-2" />
      {t('cta')}
    </a>
  );
};

export default WhatsAppCTA;
