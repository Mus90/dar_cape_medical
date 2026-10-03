'use client';

import { ArrowTopRightOnSquareIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

interface Source {
  organization: string;
  documentTitle: string;
  url: string;
  publicationDate?: string;
  lastChecked: string;
}

interface OfficialSourcesProps {
  sources: Source[];
  title?: string;
  disclaimer?: string;
}

const OfficialSources = ({ 
  sources, 
  title = 'Official Sources',
  disclaimer = 'These are official sources referenced in this guide. Dar Cape Medica does not endorse or represent these organizations.'
}: OfficialSourcesProps) => {
  return (
    <section className="bg-stone-50 border border-stone-200 rounded-xl p-8">
      <div className="flex items-center space-x-3 rtl:space-x-reverse mb-6">
        <CheckCircleIcon className="h-6 w-6 text-teal-600" />
        <h3 className="text-xl font-bold text-navy-900 font-serif">{title}</h3>
      </div>
      
      <div className="space-y-4">
        {sources.map((source, index) => (
          <div
            key={index}
            className="bg-white border border-stone-200 rounded-lg p-5 hover:border-stone-300 transition-colors"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
                  <span className="text-sm font-semibold text-navy-700">
                    {source.organization}
                  </span>
                  <span className="text-stone-300">—</span>
                  <span className="text-sm text-stone-600">
                    {source.documentTitle}
                  </span>
                </div>
                
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-teal-600 hover:text-teal-700 text-sm font-medium"
                >
                  <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-1" />
                  View official source
                </a>
              </div>
              
              <div className="flex flex-col md:text-right text-sm text-stone-500">
                {source.publicationDate && (
                  <span>Published: {source.publicationDate}</span>
                )}
                <span className="text-teal-600 font-medium">
                  Checked: {source.lastChecked}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <p className="text-xs text-stone-500 mt-6 italic leading-relaxed">
        {disclaimer}
      </p>
    </section>
  );
};

export default OfficialSources;
