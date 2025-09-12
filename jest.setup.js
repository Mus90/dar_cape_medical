import '@testing-library/jest-dom'

// Mock next-intl
jest.mock('next-intl', () => ({
  useTranslations: (namespace) => (key) => {
    // Return a mock translation based on the key
    const translations = {
      'about.team.title': 'Our Team',
      'about.team.subtitle': 'Meet our dedicated professionals',
      'about.team.members.Mustafa.name': 'Mustafa',
      'about.team.members.Mustafa.position': 'CEO & Founder',
      'about.team.members.Mustafa.description': 'Leading Dar Cape with vision and expertise',
      'about.team.members.mujahid.name': 'Mujahid',
      'about.team.members.mujahid.position': 'CTO',
      'about.team.members.mujahid.description': 'Technical excellence and innovation',
      'about.team.members.Ahmed.name': 'Ahmed',
      'about.team.members.Ahmed.position': 'Operations Manager',
      'about.team.members.Ahmed.description': 'Ensuring smooth operations',
    }
    return translations[`${namespace}.${key}`] || key
  },
  useLocale: () => 'en',
}))

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
    section: ({ children, ...props }) => <section {...props}>{children}</section>,
    h1: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
    h2: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
    h3: ({ children, ...props }) => <h3 {...props}>{children}</h3>,
    p: ({ children, ...props }) => <p {...props}>{children}</p>,
    img: ({ children, ...props }) => <img {...props}>{children}</img>,
    a: ({ children, ...props }) => <a {...props}>{children}</a>,
  },
  AnimatePresence: ({ children }) => children,
}))

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() { }
  disconnect() { }
  observe() { }
  unobserve() { }
}

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
}
global.localStorage = localStorageMock

// Mock sessionStorage
const sessionStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
}
global.sessionStorage = sessionStorageMock
