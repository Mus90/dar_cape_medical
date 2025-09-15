'use client';

import { useState, useEffect } from 'react';
import React from 'react';
import { motion } from 'framer-motion';
import {
  PencilIcon,
  TrashIcon,
  PlusIcon,
  EyeIcon,
  CalendarIcon,
  TagIcon
} from '@heroicons/react/24/outline';

const BlogManager = () => {
  const [isCreating, setIsCreating] = useState(false);
  const [editingPost, setEditingPost] = useState<string | null>(null);

  const [blogPosts, setBlogPosts] = useState([
    {
      id: '1',
      title: 'Top 10 Must-Visit Destinations in Cape Town',
      excerpt: 'Discover the most breathtaking locations that should be on every traveler\'s Cape Town itinerary.',
      author: 'Mujahid Mohamed',
      date: '2024-01-15',
      status: 'published',
      category: 'destinations',
      tags: ['Cape Town', 'Kruger', 'Garden Route']
    },
    {
      id: '2',
      title: 'Safari Photography: Capturing the Big 5',
      excerpt: 'Professional tips and techniques for photographing Africa\'s most magnificent wildlife.',
      author: 'Mustafa Ali',
      date: '2024-01-12',
      status: 'published',
      category: 'photography',
      tags: ['Safari', 'Photography', 'Wildlife']
    },
    {
      id: '3',
      title: 'Strawberry Tasting Guide: Stellenbosch vs Franschhoek',
      excerpt: 'Compare two of Cape Town\'s premier Strawberryregions and discover which suits your taste.',
      author: 'Mustafa Ali',
      date: '2024-01-10',
      status: 'draft',
      category: 'Grape',
      tags: ['Grape', 'Stellenbosch', 'Franschhoek']
    }
  ]);

  const [newPost, setNewPost] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: 'Admin',
    category: 'destinations',
    tags: '',
    status: 'draft'
  });

  const [editPost, setEditPost] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: '',
    category: '',
    tags: '',
    status: 'draft'
  });

  const handleCreatePost = () => {
    const post = {
      id: Date.now().toString(),
      ...newPost,
      date: new Date().toISOString().split('T')[0],
      tags: newPost.tags.split(',').map(tag => tag.trim())
    };
    setBlogPosts([post, ...blogPosts]);
    // Save to localStorage
    const updatedPosts = [post, ...blogPosts];
    localStorage.setItem('dar_cape_blog_posts', JSON.stringify(updatedPosts));
    setNewPost({
      title: '',
      excerpt: '',
      content: '',
      author: 'Admin',
      category: 'destinations',
      tags: '',
      status: 'draft'
    });
    setIsCreating(false);
  };

  const handleEditPost = () => {
    const updatedPosts = blogPosts.map(post =>
      post.id === editingPost ? {
        ...post,
        ...editPost,
        tags: editPost.tags.split(',').map(tag => tag.trim())
      } : post
    );
    setBlogPosts(updatedPosts);
    localStorage.setItem('dar_cape_blog_posts', JSON.stringify(updatedPosts));
    setEditingPost(null);
    alert('Post updated successfully!');
  };

  const startEditPost = (post: any) => {
    setEditPost({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content || '',
      author: post.author,
      category: post.category,
      tags: post.tags.join(', '),
      status: post.status
    });
    setEditingPost(post.id);
  };

  const handleDeletePost = (id: string) => {
    if (confirm('Are you sure you want to delete this post?')) {
      const updatedPosts = blogPosts.filter(post => post.id !== id);
      setBlogPosts(updatedPosts);
      localStorage.setItem('dar_cape_blog_posts', JSON.stringify(updatedPosts));
    }
  };

  const handlePublishPost = (id: string) => {
    const updatedPosts = blogPosts.map(post =>
      post.id === id ? { ...post, status: 'published' } : post
    );
    setBlogPosts(updatedPosts);
    localStorage.setItem('dar_cape_blog_posts', JSON.stringify(updatedPosts));
  };

  // Load posts from localStorage on component mount
  React.useEffect(() => {
    const savedPosts = localStorage.getItem('dar_cape_blog_posts');
    if (savedPosts) {
      setBlogPosts(JSON.parse(savedPosts));
    }
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Blog Management</h2>
        <button
          onClick={() => setIsCreating(true)}
          className="btn-primary flex items-center"
        >
          <PlusIcon className="h-4 w-4 mr-2" />
          New Post
        </button>
      </div>

      {/* Edit Post Modal */}
      {editingPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">Edit Blog Post</h3>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                  <input
                    type="text"
                    value={editPost.title}
                    onChange={(e) => setEditPost({ ...editPost, title: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={editPost.category}
                    onChange={(e) => setEditPost({ ...editPost, category: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="destinations">Destinations</option>
                    <option value="photography">Photography</option>
                    <option value="Grape">Grape & Food</option>
                    <option value="culture">Culture</option>
                    <option value="adventure">Adventure</option>
                    <option value="tips">Travel Tips</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Excerpt</label>
                <textarea
                  value={editPost.excerpt}
                  onChange={(e) => setEditPost({ ...editPost, excerpt: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tags (comma separated)</label>
                <input
                  type="text"
                  value={editPost.tags}
                  onChange={(e) => setEditPost({ ...editPost, tags: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
                <textarea
                  value={editPost.content}
                  onChange={(e) => setEditPost({ ...editPost, content: e.target.value })}
                  rows={10}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 flex justify-end space-x-4">
              <button
                onClick={() => setEditingPost(null)}
                className="btn-secondary"
              >
                Cancel
              </button>
              <button
                onClick={handleEditPost}
                className="btn-primary"
              >
                Update Post
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Create New Post Modal */}
      {isCreating && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">Create New Blog Post</h3>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                  <input
                    type="text"
                    value={newPost.title}
                    onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Enter post title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={newPost.category}
                    onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="destinations">Destinations</option>
                    <option value="photography">Photography</option>
                    <option value="Grape">Strawberry& Food</option>
                    <option value="culture">Culture</option>
                    <option value="adventure">Adventure</option>
                    <option value="tips">Travel Tips</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Excerpt</label>
                <textarea
                  value={newPost.excerpt}
                  onChange={(e) => setNewPost({ ...newPost, excerpt: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Brief description of the post"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tags (comma separated)</label>
                <input
                  type="text"
                  value={newPost.tags}
                  onChange={(e) => setNewPost({ ...newPost, tags: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="e.g. Cape Town, Safari, Adventure"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
                <textarea
                  value={newPost.content}
                  onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                  rows={10}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Write your blog post content here..."
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
                onClick={handleCreatePost}
                className="btn-primary"
                disabled={!newPost.title || !newPost.excerpt}
              >
                Create Post
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Blog Posts List */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Post
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Author
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {blogPosts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{post.title}</div>
                      <div className="text-sm text-gray-500 line-clamp-2">{post.excerpt}</div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                          >
                            <TagIcon className="h-3 w-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {post.author}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                      {post.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${post.status === 'published'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                      }`}>
                      {post.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-2">
                      <button
                        onClick={() => alert(`Preview: ${post.title}\n\n${post.excerpt}\n\nThis would show the full blog post preview.`)}
                        className="text-gray-400 hover:text-gray-600"
                        title="Preview post"
                      >
                        <EyeIcon className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => startEditPost(post)}
                        className="text-blue-600 hover:text-blue-900"
                        title="Edit post"
                      >
                        <PencilIcon className="h-4 w-4" />
                      </button>
                      {post.status === 'draft' && (
                        <button
                          onClick={() => handlePublishPost(post.id)}
                          className="text-green-600 hover:text-green-900 text-xs px-2 py-1 border border-green-300 rounded"
                        >
                          Publish
                        </button>
                      )}
                      <button
                        onClick={() => handleDeletePost(post.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <TrashIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BlogManager;
