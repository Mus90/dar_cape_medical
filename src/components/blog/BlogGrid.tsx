import React from 'react';

export default function BlogGrid() {
  // Placeholder grid until blog system is implemented
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {[1,2,3,4].map((i) => (
        <article key={i} className="p-5 bg-white rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-2">Sample Article {i}</h3>
          <p className="text-gray-600">Content coming soon. Stay tuned for our latest news and guides.</p>
        </article>
      ))}
    </div>
  );
}
