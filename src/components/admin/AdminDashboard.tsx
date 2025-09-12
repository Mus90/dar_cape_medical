'use client';

import { useState, useEffect } from 'react';
import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
  HomeIcon,
  DocumentTextIcon,
  PhotoIcon,
  UserGroupIcon,
  Cog6ToothIcon,
  ChartBarIcon,
  PlusIcon,
  ShieldCheckIcon,
  KeyIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import ContentManager from './ContentManager';
import BlogManager from './BlogManager';
import GalleryManager from './GalleryManager';
import ServicesManager from './ServicesManager';
import { SecureAuth } from '@/utils/secureAuth';

// Forgot Password Form Component
const ForgotPasswordForm = ({
  resetEmail,
  setResetEmail,
  resetSent,
  setResetSent,
  onBack
}: {
  resetEmail: string;
  setResetEmail: (email: string) => void;
  resetSent: boolean;
  setResetSent: (sent: boolean) => void;
  onBack: () => void;
}) => {
  const handleResetSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = SecureAuth.sendPasswordResetEmail(resetEmail);

    if (result.success) {
      setResetSent(true);
      alert(result.message);
    } else {
      alert(result.message);
    }
  };

  if (resetSent) {
    return (
      <div className="text-center">
        <div className="mb-6">
          <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-900 mb-2">Reset Email Sent!</h2>
          <p className="text-gray-600">
            We've sent password reset instructions to <strong>{resetEmail}</strong>
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Check your email and follow the instructions. The link will expire in 15 minutes.
          </p>
        </div>
        <button
          onClick={() => {
            setResetSent(false);
            setResetEmail('');
            onBack();
          }}
          className="btn-secondary w-full"
        >
          Back to Login
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="text-center mb-6">
        <KeyIcon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
        <h2 className="text-xl font-bold text-gray-900 mb-2">Reset Password</h2>
        <p className="text-gray-600">
          Enter your email address and we'll send you instructions to reset your password.
        </p>
      </div>

      <form onSubmit={handleResetSubmit}>
        <div className="mb-6">
          <label htmlFor="resetEmail" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="resetEmail"
            value={resetEmail}
            onChange={(e) => setResetEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            placeholder="admin@darcape.com"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full btn-primary py-3 mb-4"
        >
          Send Reset Instructions
        </button>

        <button
          type="button"
          onClick={onBack}
          className="w-full btn-secondary py-3"
        >
          Back to Login
        </button>
      </form>
    </div>
  );
};

const AdminDashboard = () => {
  const t = useTranslations('admin');
  const [activeTab, setActiveTab] = useState('overview');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetSent, setResetSent] = useState(false);

  // Enhanced password authentication with attempt tracking
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [lockoutTime, setLockoutTime] = useState<number | null>(null);
  const [ipAttempts, setIpAttempts] = useState<{ [key: string]: number }>({});
  const [suspiciousActivity, setSuspiciousActivity] = useState<string[]>([]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (isLocked) {
      const timeLeft = Math.ceil((lockoutTime! - Date.now()) / 1000);
      alert(`Account locked. Try again in ${timeLeft} seconds.`);
      return;
    }

    // Validate email first
    if (!SecureAuth.isValidEmail(email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Track IP-based attempts (simulated)
    const userIP = 'simulated_ip_' + Math.random().toString(36).substr(2, 9);
    const currentIpAttempts = ipAttempts[userIP] || 0;

    // Admin credentials - using secure hash comparison
    const validCredentials = {
      email: 'mustafaalamin.07@gmail.com',
      passwordHash: '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92' // SHA-256 hash
    };

    // Validate email and password using secure hash
    const passwordCheck = SecureAuth.validatePasswordStrength(password);
    const isValidCredentials = SecureAuth.validateCredentials(email, password, validCredentials);

    if (isValidCredentials && passwordCheck.valid) {
      setIsAuthenticated(true);
      setLoginAttempts(0);
      setIpAttempts(prev => ({ ...prev, [userIP]: 0 }));

      // Create ultra-secure session with email
      const secureSession = SecureAuth.createSecureSession(email);
      sessionStorage.setItem('cape_admin_session', JSON.stringify(secureSession));

      // Log successful login
      console.log(`[SECURITY] Successful admin login: ${email} from ${userIP} at ${new Date().toISOString()}`);
    } else {
      const newAttempts = loginAttempts + 1;
      const newIpAttempts = currentIpAttempts + 1;

      setLoginAttempts(newAttempts);
      setIpAttempts(prev => ({ ...prev, [userIP]: newIpAttempts }));

      // Log suspicious activity
      const suspiciousLog = `Failed login attempt from ${userIP} at ${new Date().toISOString()} - Attempt ${newIpAttempts}`;
      setSuspiciousActivity(prev => [...prev.slice(-9), suspiciousLog]);
      console.warn(`[SECURITY ALERT] ${suspiciousLog}`);

      if (newAttempts >= 3) {
        setIsLocked(true);
        const lockTime = Date.now() + (5 * 60 * 1000); // 5 minutes lockout
        setLockoutTime(lockTime);
        setTimeout(() => {
          setIsLocked(false);
          setLoginAttempts(0);
          setLockoutTime(null);
        }, 5 * 60 * 1000);
        alert('Too many failed attempts. Account locked for 5 minutes.');
      } else {
        // Show specific error feedback
        if (!SecureAuth.isValidEmail(email)) {
          alert('Invalid email format');
        } else if (!SecureAuth.validatePasswordStrength(password).valid) {
          const feedback = SecureAuth.validatePasswordStrength(password).feedback;
          alert(`Weak password detected. Requirements: ${feedback.join(', ')}`);
        } else {
          alert(`Invalid credentials. ${3 - newAttempts} attempts remaining before lockout.`);
        }
      }
    }
  };

  // Check for existing session on component mount
  React.useEffect(() => {
    const session = sessionStorage.getItem('cape_admin_session');
    if (session) {
      const sessionData = JSON.parse(session);
      if (sessionData.authenticated && Date.now() < sessionData.expires) {
        setIsAuthenticated(true);
      } else {
        sessionStorage.removeItem('cape_admin_session');
      }
    }
  }, []);

  const menuItems = [
    { id: 'overview', name: t('menu.overview'), icon: HomeIcon },
    { id: 'content', name: t('menu.content'), icon: DocumentTextIcon },
    { id: 'blog', name: t('menu.blog'), icon: DocumentTextIcon },
    { id: 'services', name: t('menu.services'), icon: UserGroupIcon },
    { id: 'gallery', name: t('menu.gallery'), icon: PhotoIcon },
    { id: 'settings', name: t('menu.settings'), icon: Cog6ToothIcon },
  ];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full mx-4"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-2xl">CH</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">{t('login.title')}</h1>
            <p className="text-gray-600">{t('login.subtitle')}</p>
          </div>

          {!showForgotPassword ? (
            <form onSubmit={handleLogin}>
              {/* Email Field */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="admin@darcape.com"
                  required
                />
              </div>

              {/* Password Field */}
              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('login.password')}
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder={t('login.placeholder')}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary py-3"
              >
                {t('login.loginButton')}
              </button>

              {/* Forgot Password Link */}
              <div className="mt-4 text-center">
                <button
                  type="button"
                  onClick={() => setShowForgotPassword(true)}
                  className="text-sm text-primary-600 hover:text-primary-500 underline"
                >
                  Forgot your password?
                </button>
              </div>
            </form>
          ) : (
            <ForgotPasswordForm
              resetEmail={resetEmail}
              setResetEmail={setResetEmail}
              resetSent={resetSent}
              setResetSent={setResetSent}
              onBack={() => setShowForgotPassword(false)}
            />
          )}

        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-accent-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">CH</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">{t('header.title')}</h1>
                <p className="text-sm text-gray-500">{t('header.subtitle')}</p>
              </div>
            </div>

            <button
              onClick={() => {
                setIsAuthenticated(false);
                sessionStorage.removeItem('cape_admin_session');
                setPassword('');
              }}
              className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              {t('header.logout')}
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <nav className="bg-white rounded-xl shadow-sm p-4">
              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center px-3 py-2 rounded-lg text-left transition-colors duration-200 ${activeTab === item.id
                        ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-500'
                        : 'text-gray-700 hover:bg-gray-50'
                        }`}
                    >
                      <item.icon className="h-5 w-5 mr-3" />
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'overview' && <OverviewTab t={t} />}
              {activeTab === 'content' && <ContentManager />}
              {activeTab === 'blog' && <BlogManager />}
              {activeTab === 'services' && <ServicesManager />}
              {activeTab === 'gallery' && <GalleryManager />}
              {activeTab === 'settings' && <SettingsTab t={t} />}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

const OverviewTab = ({ t }: { t: any }) => {
  const stats = [
    { name: t('overview.stats.blogPosts'), value: '12', change: `+2 ${t('overview.stats.changes.thisMonth')}`, icon: DocumentTextIcon },
    { name: t('overview.stats.galleryImages'), value: '48', change: `+8 ${t('overview.stats.changes.thisWeek')}`, icon: PhotoIcon },
    { name: t('overview.stats.servicePackages'), value: '6', change: t('overview.stats.changes.noChanges'), icon: UserGroupIcon },
    { name: t('overview.stats.monthlyVisitors'), value: '2,847', change: `+12% ${t('overview.stats.changes.fromLastMonth')}`, icon: ChartBarIcon },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">{t('overview.title')}</h2>
        <div className="text-sm text-gray-500">
          {t('overview.lastUpdated')} {new Date().toLocaleDateString()}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <stat.icon className="h-8 w-8 text-primary-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.change}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('overview.recentActivity.title')}</h3>
          <div className="space-y-3">
            <div className="flex items-center text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
              <span className="text-gray-600">{t('overview.recentActivity.newBlogPost')} "Safari Photography Tips"</span>
            </div>
            <div className="flex items-center text-sm">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
              <span className="text-gray-600">{t('overview.recentActivity.galleryUpdated')}</span>
            </div>
            <div className="flex items-center text-sm">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
              <span className="text-gray-600">{t('overview.recentActivity.servicePricing')}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('overview.quickActions.title')}</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200">
              <PlusIcon className="h-4 w-4 mr-2" />
              {t('overview.quickActions.addBlogPost')}
            </button>
            <button className="w-full flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200">
              <PhotoIcon className="h-4 w-4 mr-2" />
              {t('overview.quickActions.uploadImages')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const SettingsTab = ({ t }: { t: any }) => {
  const [settings, setSettings] = React.useState({
    siteTitle: 'Dar Cape Tourism',
    contactEmail: 'info@darcape.com',
    whatsappNumber: '+27817394084',
    googleMapsApiKey: '',
    adminPassword: '••••••••••••', // Hidden for security
    sessionTimeout: 30,
    maxLoginAttempts: 3
  });

  const [isSaving, setIsSaving] = React.useState(false);

  // Load settings from localStorage
  React.useEffect(() => {
    const savedSettings = localStorage.getItem('dar_cape_settings');
    if (savedSettings) {
      setSettings({ ...settings, ...JSON.parse(savedSettings) });
    }
  }, []);

  const handleSaveSettings = () => {
    setIsSaving(true);
    // Save to localStorage
    localStorage.setItem('dar_cape_settings', JSON.stringify(settings));

    setTimeout(() => {
      setIsSaving(false);
      alert('Settings saved successfully!');
    }, 1000);
  };

  const handleInputChange = (field: string, value: string | number) => {
    setSettings(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Settings</h2>

      <div className="space-y-8">
        {/* Site Configuration */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Site Configuration</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Site Title</label>
              <input
                type="text"
                value={settings.siteTitle}
                onChange={(e) => handleInputChange('siteTitle', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Contact Email</label>
              <input
                type="email"
                value={settings.contactEmail}
                onChange={(e) => handleInputChange('contactEmail', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>
        </div>

        {/* WhatsApp Configuration */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">WhatsApp Integration</h3>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">WhatsApp Number</label>
            <input
              type="tel"
              value={settings.whatsappNumber}
              onChange={(e) => handleInputChange('whatsappNumber', e.target.value)}
              className="w-full md:w-1/2 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="+27817394084"
            />
            <p className="text-sm text-gray-500 mt-1">Include country code (e.g., +27 for South Africa)</p>
          </div>
        </div>

        {/* Google Maps Configuration */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Google Maps Integration</h3>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Google Maps API Key</label>
            <input
              type="password"
              value={settings.googleMapsApiKey}
              onChange={(e) => handleInputChange('googleMapsApiKey', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Enter your Google Maps API key"
            />
            <p className="text-sm text-gray-500 mt-1">Required for map functionality on contact page</p>
          </div>
        </div>

        {/* Security Settings */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Security Settings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Session Timeout (minutes)</label>
              <input
                type="number"
                value={settings.sessionTimeout}
                onChange={(e) => handleInputChange('sessionTimeout', parseInt(e.target.value))}
                min="5"
                max="120"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Max Login Attempts</label>
              <input
                type="number"
                value={settings.maxLoginAttempts}
                onChange={(e) => handleInputChange('maxLoginAttempts', parseInt(e.target.value))}
                min="3"
                max="10"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>
        </div>

        {/* Data Management */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Management</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => {
                const data = {
                  content: localStorage.getItem('dar_cape_content'),
                  blogPosts: localStorage.getItem('dar_cape_blog_posts'),
                  gallery: localStorage.getItem('dar_cape_gallery_photos'),
                  services: localStorage.getItem('dar_cape_services'),
                  settings: localStorage.getItem('dar_cape_settings')
                };
                const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `dar-cape-backup-${new Date().toISOString().split('T')[0]}.json`;
                a.click();
              }}
              className="btn-secondary"
            >
              Export Data
            </button>
            <button
              onClick={() => {
                if (confirm('This will clear all content data. Are you sure?')) {
                  localStorage.removeItem('dar_cape_content');
                  localStorage.removeItem('dar_cape_blog_posts');
                  localStorage.removeItem('dar_cape_gallery_photos');
                  localStorage.removeItem('dar_cape_services');
                  alert('Content data cleared successfully!');
                }
              }}
              className="btn-secondary text-red-600 border-red-300 hover:bg-red-50"
            >
              Clear Content Data
            </button>
            <button
              onClick={() => {
                if (confirm('This will reset all settings to defaults. Are you sure?')) {
                  localStorage.removeItem('dar_cape_settings');
                  setSettings({
                    siteTitle: 'Dar Cape Tourism',
                    contactEmail: 'info@darcape.com',
                    whatsappNumber: '+27817394084',
                    googleMapsApiKey: '',
                    adminPassword: 'darcape2024',
                    sessionTimeout: 30,
                    maxLoginAttempts: 3
                  });
                  alert('Settings reset successfully!');
                }
              }}
              className="btn-secondary text-orange-600 border-orange-300 hover:bg-orange-50"
            >
              Reset Settings
            </button>
          </div>
        </div>

        {/* Save Button */}
        <div className="pt-4 border-t border-gray-200">
          <button
            onClick={handleSaveSettings}
            disabled={isSaving}
            className={`btn-primary ${isSaving ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isSaving ? 'Saving...' : 'Save Settings'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
