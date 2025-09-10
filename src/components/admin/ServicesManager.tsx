'use client';

import { useState, useEffect } from 'react';
import React from 'react';
import { motion } from 'framer-motion';
import {
  PencilIcon,
  TrashIcon,
  PlusIcon,
  EyeIcon,
  MapPinIcon,
  CurrencyDollarIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const ServicesManager = () => {
  const [isCreating, setIsCreating] = useState(false);
  const [editingService, setEditingService] = useState<string | null>(null);
  const [editServiceData, setEditServiceData] = useState({
    name: '',
    description: '',
    price: 0,
    duration: '',
    maxGuests: 1,
    category: 'city-tours',
    features: '',
    status: 'draft'
  });

  const [services, setServices] = useState([
    {
      id: '1',
      name: 'Cape Town City Tour',
      description: 'Explore the vibrant city of Cape Town with our comprehensive city tour.',
      price: 850,
      duration: '8 hours',
      maxGuests: 12,
      category: 'city-tours',
      features: ['Table Mountain', 'V&A Waterfront', 'Bo-Kaap District', 'Professional Guide'],
      rating: 4.8,
      status: 'active'
    },
    {
      id: '2',
      name: 'Strawberry Tasting Safari',
      description: 'Discover the finest Strawberries in Stellenbosch and Franschhoek regions.',
      price: 1200,
      duration: '10 hours',
      maxGuests: 8,
      category: 'wine-tours',
      features: ['3 StrawberryEstates', 'Gourmet Lunch', 'Transportation', 'StrawberryExpert Guide'],
      rating: 4.9,
      status: 'active'
    },
    {
      id: '3',
      name: 'Garden Route Adventure',
      description: 'Multi-day adventure through Cape Town\'s scenic Garden Route.',
      price: 2500,
      duration: '3 days',
      maxGuests: 6,
      category: 'adventure',
      features: ['Accommodation', 'All Meals', 'Activities', 'Transportation'],
      rating: 4.7,
      status: 'draft'
    }
  ]);

  const [newService, setNewService] = useState({
    name: '',
    description: '',
    price: 0,
    duration: '',
    maxGuests: 1,
    category: 'city-tours',
    features: '',
    status: 'draft'
  });

  const handleCreateService = () => {
    const service = {
      id: Date.now().toString(),
      ...newService,
      features: newService.features.split(',').map(f => f.trim()),
      rating: 0,
    };
    const updatedServices = [service, ...services];
    setServices(updatedServices);
    localStorage.setItem('cape_home_services', JSON.stringify(updatedServices));
    setNewService({
      name: '',
      description: '',
      price: 0,
      duration: '',
      maxGuests: 1,
      category: 'city-tours',
      features: '',
      status: 'draft'
    });
    setIsCreating(false);
  };

  const handleDeleteService = (id: string) => {
    if (confirm('Are you sure you want to delete this service?')) {
      const updatedServices = services.filter(service => service.id !== id);
      setServices(updatedServices);
      localStorage.setItem('cape_home_services', JSON.stringify(updatedServices));
    }
  };

  const handleActivateService = (id: string) => {
    const updatedServices = services.map(service =>
      service.id === id ? { ...service, status: 'active' } : service
    );
    setServices(updatedServices);
    localStorage.setItem('cape_home_services', JSON.stringify(updatedServices));
  };

  // Load services from localStorage on component mount
  React.useEffect(() => {
    const savedServices = localStorage.getItem('cape_home_services');
    if (savedServices) {
      setServices(JSON.parse(savedServices));
    }
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Services Management</h2>
        <button
          onClick={() => setIsCreating(true)}
          className="btn-primary flex items-center"
        >
          <PlusIcon className="h-4 w-4 mr-2" />
          New Service
        </button>
      </div>

      {/* Edit Service Modal */}
      {editingService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">Edit Service</h3>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Name</label>
                  <input
                    type="text"
                    value={editServiceData.name}
                    onChange={(e) => setEditServiceData({ ...editServiceData, name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={editServiceData.category}
                    onChange={(e) => setEditServiceData({ ...editServiceData, category: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="city-tours">City Tours</option>
                    <option value="wine-tours">Wine Tours</option>
                    <option value="safari">Safari</option>
                    <option value="adventure">Adventure</option>
                    <option value="cultural">Cultural</option>
                    <option value="photography">Photography</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={editServiceData.description}
                  onChange={(e) => setEditServiceData({ ...editServiceData, description: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price (ZAR)</label>
                  <input
                    type="number"
                    value={editServiceData.price}
                    onChange={(e) => setEditServiceData({ ...editServiceData, price: parseInt(e.target.value) })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                  <input
                    type="text"
                    value={editServiceData.duration}
                    onChange={(e) => setEditServiceData({ ...editServiceData, duration: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Max Guests</label>
                  <input
                    type="number"
                    value={editServiceData.maxGuests}
                    onChange={(e) => setEditServiceData({ ...editServiceData, maxGuests: parseInt(e.target.value) })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    min="1"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Features (comma separated)</label>
                <input
                  type="text"
                  value={editServiceData.features}
                  onChange={(e) => setEditServiceData({ ...editServiceData, features: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select
                  value={editServiceData.status}
                  onChange={(e) => setEditServiceData({ ...editServiceData, status: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="draft">Draft</option>
                  <option value="active">Active</option>
                </select>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 flex justify-end space-x-4">
              <button
                onClick={() => setEditingService(null)}
                className="btn-secondary"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  const updatedServices = services.map(service =>
                    service.id === editingService ? {
                      ...service,
                      name: editServiceData.name,
                      description: editServiceData.description,
                      price: editServiceData.price,
                      duration: editServiceData.duration,
                      maxGuests: editServiceData.maxGuests,
                      category: editServiceData.category,
                      features: editServiceData.features.split(',').map(f => f.trim()),
                      status: editServiceData.status
                    } : service
                  );
                  setServices(updatedServices);
                  localStorage.setItem('cape_home_services', JSON.stringify(updatedServices));
                  setEditingService(null);
                  alert('Service updated successfully!');
                }}
                className="btn-primary"
              >
                Update Service
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Create New Service Modal */}
      {isCreating && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">Create New Service</h3>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Name</label>
                  <input
                    type="text"
                    value={newService.name}
                    onChange={(e) => setNewService({ ...newService, name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Enter service name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={newService.category}
                    onChange={(e) => setNewService({ ...newService, category: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="city-tours">City Tours</option>
                    <option value="wine-tours">Strawberry Tours</option>
                    <option value="safari">Safari</option>
                    <option value="adventure">Adventure</option>
                    <option value="cultural">Cultural</option>
                    <option value="photography">Photography</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={newService.description}
                  onChange={(e) => setNewService({ ...newService, description: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Describe the service"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price (ZAR)</label>
                  <input
                    type="number"
                    value={newService.price}
                    onChange={(e) => setNewService({ ...newService, price: parseInt(e.target.value) })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                  <input
                    type="text"
                    value={newService.duration}
                    onChange={(e) => setNewService({ ...newService, duration: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="e.g. 8 hours, 3 days"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Max Guests</label>
                  <input
                    type="number"
                    value={newService.maxGuests}
                    onChange={(e) => setNewService({ ...newService, maxGuests: parseInt(e.target.value) })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    min="1"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Features (comma separated)</label>
                <input
                  type="text"
                  value={newService.features}
                  onChange={(e) => setNewService({ ...newService, features: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="e.g. Professional Guide, Transportation, Lunch"
                />
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 flex justify-end space-x-4">
              <button
                onClick={() => setIsCreating(false)}
                className="btn-secondary"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateService}
                className="btn-primary"
                disabled={!newService.name || !newService.description}
              >
                Create Service
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {services.map((service) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{service.name}</h3>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${service.status === 'active'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                    }`}>
                    {service.status}
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <button
                    onClick={() => alert(`Preview Service: ${service.name}\n\nPrice: R${service.price}\nDuration: ${service.duration}\nMax Guests: ${service.maxGuests}\n\nDescription: ${service.description}\n\nFeatures: ${service.features.join(', ')}`)}
                    className="p-1 text-gray-400 hover:text-gray-600"
                    title="Preview service"
                  >
                    <EyeIcon className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => {
                      setEditServiceData({
                        name: service.name,
                        description: service.description,
                        price: service.price,
                        duration: service.duration,
                        maxGuests: service.maxGuests,
                        category: service.category,
                        features: service.features.join(', '),
                        status: service.status
                      });
                      setEditingService(service.id);
                    }}
                    className="p-1 text-blue-600 hover:text-blue-800"
                    title="Edit service"
                  >
                    <PencilIcon className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleDeleteService(service.id)}
                    className="p-1 text-red-600 hover:text-red-800"
                  >
                    <TrashIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{service.description}</p>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <CurrencyDollarIcon className="h-4 w-4 mr-1" />
                    R{service.price.toLocaleString()}
                  </div>
                  {service.rating > 0 && (
                    <div className="flex items-center text-sm text-gray-500">
                      <StarIcon className="h-4 w-4 mr-1 text-yellow-400 fill-current" />
                      {service.rating}
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{service.duration}</span>
                  <span>Max {service.maxGuests} guests</span>
                </div>

                <div className="flex flex-wrap gap-1">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                  {service.features.length > 3 && (
                    <span className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      +{service.features.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {service.status === 'draft' && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => handleActivateService(service.id)}
                    className="w-full btn-primary text-sm py-2"
                  >
                    Activate Service
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesManager;
