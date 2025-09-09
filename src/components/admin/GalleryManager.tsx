'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  PencilIcon,
  TrashIcon,
  PlusIcon,
  PhotoIcon,
  VideoCameraIcon,
  EyeIcon,
  CloudArrowUpIcon
} from '@heroicons/react/24/outline';

const GalleryManager = () => {
  const [activeTab, setActiveTab] = useState('photos');
  const [isUploading, setIsUploading] = useState(false);

  const [photos, setPhotos] = useState([
    {
      id: '1',
      title: 'Table Mountain Sunset',
      description: 'Beautiful sunset view from Table Mountain',
      url: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800',
      category: 'landscapes',
      tags: ['Table Mountain', 'Sunset', 'Cape Town'],
      uploadDate: '2024-01-15',
      status: 'published'
    },
    {
      id: '2',
      title: 'StrawberryEstate Vineyard',
      description: 'Scenic vineyard in Stellenbosch',
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      category: 'wine-tours',
      tags: ['Wine', 'Vineyard', 'Stellenbosch'],
      uploadDate: '2024-01-12',
      status: 'published'
    },
    {
      id: '3',
      title: 'Safari Wildlife',
      description: 'Elephant family at Kruger National Park',
      url: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800',
      category: 'safari',
      tags: ['Safari', 'Elephant', 'Wildlife'],
      uploadDate: '2024-01-10',
      status: 'draft'
    }
  ]);

  const [videos, setVideos] = useState([
    {
      id: '1',
      title: 'Cape Town Aerial Tour',
      description: 'Drone footage of Cape Town coastline',
      thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      category: 'city-tours',
      tags: ['Cape Town', 'Aerial', 'Coastline'],
      uploadDate: '2024-01-14',
      duration: '3:45',
      status: 'published'
    },
    {
      id: '2',
      title: 'Strawberry Tasting Experience',
      description: 'Behind the scenes at a Strawberry Tasting',
      thumbnail: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      category: 'wine-tours',
      tags: ['Wine', 'Tasting', 'Experience'],
      uploadDate: '2024-01-11',
      duration: '5:20',
      status: 'published'
    }
  ]);

  const handleDeletePhoto = (id: string) => {
    if (confirm('Are you sure you want to delete this photo?')) {
      setPhotos(photos.filter(photo => photo.id !== id));
    }
  };

  const handleDeleteVideo = (id: string) => {
    if (confirm('Are you sure you want to delete this video?')) {
      setVideos(videos.filter(video => video.id !== id));
    }
  };

  const handlePublishPhoto = (id: string) => {
    setPhotos(photos.map(photo =>
      photo.id === id ? { ...photo, status: 'published' } : photo
    ));
  };

  const handlePublishVideo = (id: string) => {
    setVideos(videos.map(video =>
      video.id === id ? { ...video, status: 'published' } : video
    ));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setIsUploading(true);
      // Simulate upload process
      setTimeout(() => {
        setIsUploading(false);
        alert('Files uploaded successfully!');
      }, 2000);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Gallery Management</h2>
        <div className="flex space-x-3">
          <label className="btn-secondary flex items-center cursor-pointer">
            <CloudArrowUpIcon className="h-4 w-4 mr-2" />
            Upload Files
            <input
              type="file"
              multiple
              accept="image/*,video/*"
              onChange={handleFileUpload}
              className="hidden"
            />
          </label>
        </div>
      </div>

      {/* Upload Progress */}
      {isUploading && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-3"></div>
            <span className="text-blue-800">Uploading files...</span>
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('photos')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${activeTab === 'photos'
              ? 'border-primary-500 text-primary-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
          >
            <PhotoIcon className="h-5 w-5 inline mr-2" />
            Photos ({photos.length})
          </button>
          <button
            onClick={() => setActiveTab('videos')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${activeTab === 'videos'
              ? 'border-primary-500 text-primary-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
          >
            <VideoCameraIcon className="h-5 w-5 inline mr-2" />
            Videos ({videos.length})
          </button>
        </nav>
      </div>

      {/* Photos Tab */}
      {activeTab === 'photos' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {photos.map((photo) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-48 object-cover"
                />
              </div>

              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-gray-900 text-sm line-clamp-1">{photo.title}</h3>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${photo.status === 'published'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                    }`}>
                    {photo.status}
                  </span>
                </div>

                <p className="text-gray-600 text-xs mb-3 line-clamp-2">{photo.description}</p>

                <div className="flex flex-wrap gap-1 mb-3">
                  {photo.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {photo.tags.length > 2 && (
                    <span className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      +{photo.tags.length - 2}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    {new Date(photo.uploadDate).toLocaleDateString()}
                  </span>

                  <div className="flex items-center space-x-1">
                    <button className="p-1 text-gray-400 hover:text-gray-600">
                      <EyeIcon className="h-4 w-4" />
                    </button>
                    <button className="p-1 text-blue-600 hover:text-blue-800">
                      <PencilIcon className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDeletePhoto(photo.id)}
                      className="p-1 text-red-600 hover:text-red-800"
                    >
                      <TrashIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {photo.status === 'draft' && (
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <button
                      onClick={() => handlePublishPhoto(photo.id)}
                      className="w-full btn-primary text-xs py-2"
                    >
                      Publish
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Videos Tab */}
      {activeTab === 'videos' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <div className="relative aspect-w-16 aspect-h-9 bg-gray-200">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
                    <VideoCameraIcon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>

              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-gray-900 text-sm line-clamp-1">{video.title}</h3>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${video.status === 'published'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                    }`}>
                    {video.status}
                  </span>
                </div>

                <p className="text-gray-600 text-xs mb-3 line-clamp-2">{video.description}</p>

                <div className="flex flex-wrap gap-1 mb-3">
                  {video.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {video.tags.length > 2 && (
                    <span className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      +{video.tags.length - 2}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    {new Date(video.uploadDate).toLocaleDateString()}
                  </span>

                  <div className="flex items-center space-x-1">
                    <button className="p-1 text-gray-400 hover:text-gray-600">
                      <EyeIcon className="h-4 w-4" />
                    </button>
                    <button className="p-1 text-blue-600 hover:text-blue-800">
                      <PencilIcon className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteVideo(video.id)}
                      className="p-1 text-red-600 hover:text-red-800"
                    >
                      <TrashIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {video.status === 'draft' && (
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <button
                      onClick={() => handlePublishVideo(video.id)}
                      className="w-full btn-primary text-xs py-2"
                    >
                      Publish
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GalleryManager;
