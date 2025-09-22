"use client";
import React, { useState } from 'react';

const tabs = [
  { key: 'photos', label: 'Photos' },
  { key: 'videos', label: 'Videos' }
];

export default function GalleryTabs() {
  const [active, setActive] = useState('photos');

  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="flex items-center gap-3 border-b border-gray-200 mb-6">
          {tabs.map(t => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`px-4 py-2 -mb-px border-b-2 transition-colors ${
                active === t.key
                  ? 'border-sky-500 text-sky-600 font-semibold'
                  : 'border-transparent text-gray-600 hover:text-gray-800'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {active === 'photos' ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="aspect-[4/3] bg-gray-200 rounded-lg" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="aspect-video bg-gray-200 rounded-lg" />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
