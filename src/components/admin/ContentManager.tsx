'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  PencilIcon,
  TrashIcon,
  PlusIcon,
  EyeIcon
} from '@heroicons/react/24/outline';

const ContentManager = () => {
  const [selectedContent, setSelectedContent] = useState('home');
  const [isEditing, setIsEditing] = useState(false);

  const contentSections = [
    { id: 'home', name: 'Home Page', description: 'Hero section, services overview' },
    { id: 'about', name: 'About Us', description: 'Company information, team, values' },
    { id: 'services', name: 'Services', description: 'Tour packages and descriptions' },
    { id: 'contact', name: 'Contact', description: 'Contact information and forms' },
    { id: 'footer', name: 'Footer', description: 'Footer links and information' },
  ];

  const [homeContent, setHomeContent] = useState({
    heroTitle: 'Discover the Beauty of Cape Town with Cape Home',
    heroSubtitle: 'Exceptional tourism experiences and unforgettable adventures in Cape Town\'s most beautiful destinations',
    heroButtonText: 'Book Your Trip Now',
    servicesTitle: 'Our Tourism Services',
    servicesSubtitle: 'We offer a diverse range of tours and travel experiences'
  });

  const handleSave = () => {
    // In a real application, this would save to a database or CMS
    alert('Content saved successfully!');
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Content Management</h2>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${isEditing
              ? 'bg-green-600 text-white hover:bg-green-700'
              : 'bg-primary-600 text-white hover:bg-primary-700'
            }`}
        >
          {isEditing ? 'Save Changes' : 'Edit Content'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Content Sections List */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm p-4">
            <h3 className="font-semibold text-gray-900 mb-4">Content Sections</h3>
            <nav className="space-y-2">
              {contentSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setSelectedContent(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 ${selectedContent === section.id
                      ? 'bg-primary-50 text-primary-700 border-l-2 border-primary-500'
                      : 'text-gray-700 hover:bg-gray-50'
                    }`}
                >
                  <div className="font-medium">{section.name}</div>
                  <div className="text-sm text-gray-500">{section.description}</div>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Content Editor */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                {contentSections.find(s => s.id === selectedContent)?.name}
              </h3>
              <div className="flex space-x-2">
                <button className="p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100">
                  <EyeIcon className="h-5 w-5" />
                </button>
              </div>
            </div>

            {selectedContent === 'home' && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hero Title
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={homeContent.heroTitle}
                      onChange={(e) => setHomeContent({ ...homeContent, heroTitle: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  ) : (
                    <p className="text-gray-900 bg-gray-50 p-3 rounded-lg">{homeContent.heroTitle}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hero Subtitle
                  </label>
                  {isEditing ? (
                    <textarea
                      value={homeContent.heroSubtitle}
                      onChange={(e) => setHomeContent({ ...homeContent, heroSubtitle: e.target.value })}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  ) : (
                    <p className="text-gray-900 bg-gray-50 p-3 rounded-lg">{homeContent.heroSubtitle}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hero Button Text
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={homeContent.heroButtonText}
                      onChange={(e) => setHomeContent({ ...homeContent, heroButtonText: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  ) : (
                    <p className="text-gray-900 bg-gray-50 p-3 rounded-lg">{homeContent.heroButtonText}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Services Section Title
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={homeContent.servicesTitle}
                      onChange={(e) => setHomeContent({ ...homeContent, servicesTitle: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  ) : (
                    <p className="text-gray-900 bg-gray-50 p-3 rounded-lg">{homeContent.servicesTitle}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Services Section Subtitle
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={homeContent.servicesSubtitle}
                      onChange={(e) => setHomeContent({ ...homeContent, servicesSubtitle: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  ) : (
                    <p className="text-gray-900 bg-gray-50 p-3 rounded-lg">{homeContent.servicesSubtitle}</p>
                  )}
                </div>

                {isEditing && (
                  <div className="flex space-x-4 pt-4">
                    <button
                      onClick={handleSave}
                      className="btn-primary"
                    >
                      Save Changes
                    </button>
                    <button
                      onClick={() => setIsEditing(false)}
                      className="btn-secondary"
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            )}

            {selectedContent !== 'home' && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <PencilIcon className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Content Editor Coming Soon
                </h3>
                <p className="text-gray-500">
                  This section will allow you to edit {contentSections.find(s => s.id === selectedContent)?.name.toLowerCase()} content.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentManager;
