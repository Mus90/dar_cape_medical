import React from 'react';

export default function BlogCategories() {
  const categories = ['News', 'Guides', 'Tours', 'Tips'];
  return (
    <aside className="p-5 bg-white rounded-lg shadow-sm border border-gray-100">
      <h2 className="text-xl font-semibold mb-4">Categories</h2>
      <ul className="space-y-2 text-gray-700">
        {categories.map((c) => (
          <li key={c}>
            <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-sm">{c}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
