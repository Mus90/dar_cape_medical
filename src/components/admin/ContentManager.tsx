'use client';

import { useState, useEffect } from 'react';
import React from 'react';
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

  const [aboutContent, setAboutContent] = useState({
    title: 'About Cape Home Tourism',
    description: 'We are passionate about showcasing the beauty of Cape Town and South Africa.'
  });

  const [servicesContent, setServicesContent] = useState({
    title: 'Our Tourism Services'
  });

  const [contactContent, setContactContent] = useState({
    title: 'Get in Touch',
    email: 'info@capehome.co.za'
  });

  const [footerContent, setFooterContent] = useState({
    copyright: '© 2024 Cape Home Tourism. All rights reserved.'
  });

  const handleSave = () => {
    // Save all content to localStorage
    const allContent = {
      home: homeContent,
      about: aboutContent,
      services: servicesContent,
      contact: contactContent,
      footer: footerContent
    };
    localStorage.setItem('cape_home_content', JSON.stringify(allContent));
    alert('Content saved successfully!');
    setIsEditing(false);
  };

  // Load content from localStorage on component mount
  const loadContent = () => {
    const saved = localStorage.getItem('cape_home_content');
    if (saved) {
      const allContent = JSON.parse(saved);
      if (allContent.home) setHomeContent(allContent.home);
      if (allContent.about) setAboutContent(allContent.about);
      if (allContent.services) setServicesContent(allContent.services);
      if (allContent.contact) setContactContent(allContent.contact);
      if (allContent.footer) setFooterContent(allContent.footer);
    }
  };

  // Load content when component mounts
  React.useEffect(() => {
    loadContent();
  }, []);

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
                <button 
                  onClick={() => alert('Preview functionality would show how this content appears on the live website')}
                  className="p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100"
                  title="Preview content"
                >
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

            {selectedContent === 'about' && (
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-800 text-sm">
                    <strong>About Us Content:</strong> Edit your About page content here.
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">About Title</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={aboutContent.title}
                      onChange={(e) => setAboutContent({ ...aboutContent, title: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  ) : (
                    <p className="text-gray-900 bg-gray-50 p-3 rounded-lg">{aboutContent.title}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">About Description</label>
                  {isEditing ? (
                    <textarea
                      rows={4}
                      value={aboutContent.description}
                      onChange={(e) => setAboutContent({ ...aboutContent, description: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  ) : (
                    <p className="text-gray-900 bg-gray-50 p-3 rounded-lg">{aboutContent.description}</p>
                  )}
                </div>
                {isEditing && (
                  <div className="flex space-x-4 pt-4">
                    <button onClick={handleSave} className="btn-primary">Save Changes</button>
                    <button onClick={() => setIsEditing(false)} className="btn-secondary">Cancel</button>
                  </div>
                )}
              </div>
            )}

            {selectedContent === 'services' && (
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800 text-sm">
                    <strong>Services Content:</strong> Edit your services page header content. 
                    Use the Services Manager tab for detailed service management.
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Services Page Title</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={servicesContent.title}
                      onChange={(e) => setServicesContent({ ...servicesContent, title: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  ) : (
                    <p className="text-gray-900 bg-gray-50 p-3 rounded-lg">{servicesContent.title}</p>
                  )}
                </div>
                {isEditing && (
                  <div className="flex space-x-4 pt-4">
                    <button onClick={handleSave} className="btn-primary">Save Changes</button>
                    <button onClick={() => setIsEditing(false)} className="btn-secondary">Cancel</button>
                  </div>
                )}
              </div>
            )}

            {selectedContent === 'contact' && (
              <div className="space-y-6">
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <p className="text-purple-800 text-sm">
                    <strong>Contact Content:</strong> Edit your contact page content.
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Contact Title</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={contactContent.title}
                      onChange={(e) => setContactContent({ ...contactContent, title: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  ) : (
                    <p className="text-gray-900 bg-gray-50 p-3 rounded-lg">{contactContent.title}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Contact Email</label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={contactContent.email}
                      onChange={(e) => setContactContent({ ...contactContent, email: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  ) : (
                    <p className="text-gray-900 bg-gray-50 p-3 rounded-lg">{contactContent.email}</p>
                  )}
                </div>
                {isEditing && (
                  <div className="flex space-x-4 pt-4">
                    <button onClick={handleSave} className="btn-primary">Save Changes</button>
                    <button onClick={() => setIsEditing(false)} className="btn-secondary">Cancel</button>
                  </div>
                )}
              </div>
            )}

            {selectedContent === 'footer' && (
              <div className="space-y-6">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <p className="text-gray-800 text-sm">
                    <strong>Footer Content:</strong> Edit your footer content.
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Copyright Text</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={footerContent.copyright}
                      onChange={(e) => setFooterContent({ ...footerContent, copyright: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  ) : (
                    <p className="text-gray-900 bg-gray-50 p-3 rounded-lg">{footerContent.copyright}</p>
                  )}
                </div>
                {isEditing && (
                  <div className="flex space-x-4 pt-4">
                    <button onClick={handleSave} className="btn-primary">Save Changes</button>
                    <button onClick={() => setIsEditing(false)} className="btn-secondary">Cancel</button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentManager;
