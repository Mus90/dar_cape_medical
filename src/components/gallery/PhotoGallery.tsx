import React from 'react';

export default function PhotoGallery() {
  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="aspect-[4/3] bg-gray-200 rounded-lg" />
          ))}
        </div>
      </div>
    </section>
  );
}
