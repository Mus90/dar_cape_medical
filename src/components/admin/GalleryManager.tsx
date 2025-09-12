'use client';

import { useState, useEffect } from 'react';
import React from 'react';
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
  const [editingPhoto, setEditingPhoto] = useState<string | null>(null);
  const [editingVideo, setEditingVideo] = useState<string | null>(null);
  const [editPhotoData, setEditPhotoData] = useState({
    title: '',
    description: '',
    category: '',
    tags: ''
  });
  const [editVideoData, setEditVideoData] = useState({
    title: '',
    description: '',
    category: '',
    tags: ''
  });

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
      const updatedPhotos = photos.filter(photo => photo.id !== id);
      setPhotos(updatedPhotos);
      localStorage.setItem('dar_cape_gallery_photos', JSON.stringify(updatedPhotos));
    }
  };

  const handleDeleteVideo = (id: string) => {
    if (confirm('Are you sure you want to delete this video?')) {
      const updatedVideos = videos.filter(video => video.id !== id);
      setVideos(updatedVideos);
      localStorage.setItem('dar_cape_gallery_videos', JSON.stringify(updatedVideos));
    }
  };

  const handlePublishPhoto = (id: string) => {
    const updatedPhotos = photos.map(photo =>
      photo.id === id ? { ...photo, status: 'published' } : photo
    );
    setPhotos(updatedPhotos);
    localStorage.setItem('dar_cape_gallery_photos', JSON.stringify(updatedPhotos));
  };

  const handlePublishVideo = (id: string) => {
    const updatedVideos = videos.map(video =>
      video.id === id ? { ...video, status: 'published' } : video
    );
    setVideos(updatedVideos);
    localStorage.setItem('dar_cape_gallery_videos', JSON.stringify(updatedVideos));
  };

  // Load data from localStorage on component mount
  React.useEffect(() => {
    const savedPhotos = localStorage.getItem('dar_cape_gallery_photos');
    const savedVideos = localStorage.getItem('dar_cape_gallery_videos');
    if (savedPhotos) {
      setPhotos(JSON.parse(savedPhotos));
    }
    if (savedVideos) {
      setVideos(JSON.parse(savedVideos));
    }
  }, []);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setIsUploading(true);
      // Simulate upload process and add to gallery
      setTimeout(() => {
        const newPhotos = Array.from(files).map((file, index) => ({
          id: (Date.now() + index).toString(),
          title: file.name.replace(/\.[^/.]+$/, ""),
          description: `Uploaded image: ${file.name}`,
          url: URL.createObjectURL(file),
          category: 'uploaded',
          tags: ['Upload', 'New'],
          uploadDate: new Date().toISOString().split('T')[0],
          status: 'draft'
        }));
        const updatedPhotos = [...newPhotos, ...photos];
        setPhotos(updatedPhotos);
        localStorage.setItem('dar_cape_gallery_photos', JSON.stringify(updatedPhotos));
        setIsUploading(false);
        alert(`${files.length} file(s) uploaded successfully!`);
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

      {/* Edit Photo Modal */}
      {editingPhoto && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl shadow-xl max-w-2xl w-full"
          >
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">Edit Photo</h3>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  value={editPhotoData.title}
                  onChange={(e) => setEditPhotoData({ ...editPhotoData, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={editPhotoData.description}
                  onChange={(e) => setEditPhotoData({ ...editPhotoData, description: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={editPhotoData.category}
                  onChange={(e) => setEditPhotoData({ ...editPhotoData, category: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="landscapes">Landscapes</option>
                  <option value="wine-tours">Wine Tours</option>
                  <option value="safari">Safari</option>
                  <option value="city-tours">City Tours</option>
                  <option value="uploaded">Uploaded</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tags (comma separated)</label>
                <input
                  type="text"
                  value={editPhotoData.tags}
                  onChange={(e) => setEditPhotoData({ ...editPhotoData, tags: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-end space-x-4">
              <button
                onClick={() => setEditingPhoto(null)}
                className="btn-secondary"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  const updatedPhotos = photos.map(photo =>
                    photo.id === editingPhoto ? {
                      ...photo,
                      title: editPhotoData.title,
                      description: editPhotoData.description,
                      category: editPhotoData.category,
                      tags: editPhotoData.tags.split(',').map(tag => tag.trim())
                    } : photo
                  );
                  setPhotos(updatedPhotos);
                  localStorage.setItem('dar_cape_gallery_photos', JSON.stringify(updatedPhotos));
                  setEditingPhoto(null);
                  alert('Photo updated successfully!');
                }}
                className="btn-primary"
              >
                Update Photo
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Edit Video Modal */}
      {editingVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl shadow-xl max-w-2xl w-full"
          >
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">Edit Video</h3>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  value={editVideoData.title}
                  onChange={(e) => setEditVideoData({ ...editVideoData, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={editVideoData.description}
                  onChange={(e) => setEditVideoData({ ...editVideoData, description: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={editVideoData.category}
                  onChange={(e) => setEditVideoData({ ...editVideoData, category: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="city-tours">City Tours</option>
                  <option value="wine-tours">Wine Tours</option>
                  <option value="safari">Safari</option>
                  <option value="landscapes">Landscapes</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tags (comma separated)</label>
                <input
                  type="text"
                  value={editVideoData.tags}
                  onChange={(e) => setEditVideoData({ ...editVideoData, tags: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-end space-x-4">
              <button
                onClick={() => setEditingVideo(null)}
                className="btn-secondary"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  const updatedVideos = videos.map(video =>
                    video.id === editingVideo ? {
                      ...video,
                      title: editVideoData.title,
                      description: editVideoData.description,
                      category: editVideoData.category,
                      tags: editVideoData.tags.split(',').map(tag => tag.trim())
                    } : video
                  );
                  setVideos(updatedVideos);
                  localStorage.setItem('dar_cape_gallery_videos', JSON.stringify(updatedVideos));
                  setEditingVideo(null);
                  alert('Video updated successfully!');
                }}
                className="btn-primary"
              >
                Update Video
              </button>
            </div>
          </motion.div>
        </div>
      )}

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
                    <button 
                      onClick={() => window.open(photo.url, '_blank')}
                      className="p-1 text-gray-400 hover:text-gray-600"
                      title="View full size"
                    >
                      <EyeIcon className="h-4 w-4" />
                    </button>
                    <button 
                      onClick={() => {
                        setEditPhotoData({
                          title: photo.title,
                          description: photo.description,
                          category: photo.category,
                          tags: photo.tags.join(', ')
                        });
                        setEditingPhoto(photo.id);
                      }}
                      className="p-1 text-blue-600 hover:text-blue-800"
                      title="Edit photo"
                    >
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
                    <button 
                      onClick={() => window.open(video.url, '_blank')}
                      className="p-1 text-gray-400 hover:text-gray-600"
                      title="Watch video"
                    >
                      <EyeIcon className="h-4 w-4" />
                    </button>
                    <button 
                      onClick={() => {
                        setEditVideoData({
                          title: video.title,
                          description: video.description,
                          category: video.category,
                          tags: video.tags.join(', ')
                        });
                        setEditingVideo(video.id);
                      }}
                      className="p-1 text-blue-600 hover:text-blue-800"
                      title="Edit video"
                    >
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
