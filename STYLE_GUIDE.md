# Cape Home   Website - Style Guide & Design System

## Overview
This style guide extracts the complete design system, layout patterns, and styling instructions from the Cape Home   website. Use this as a reference to replicate the design aesthetic and user experience patterns in other projects.

## 🎨 Design Framework

### CSS Framework
- **Primary**: Tailwind CSS v3.3.5
- **PostCSS**: Autoprefixer for browser compatibility
- **Animations**: Framer Motion v10.18.0 for advanced animations
- **Icons**: Heroicons v2.0.18 (outline and solid variants)

### Build System
- **Framework**: Next.js 14.2.32 with TypeScript
- **Internationalization**: next-intl v3.0.0 (Arabic/English RTL support)
- **Image Optimization**: Next.js Image component with priority loading

## 🎯 Color Palette

### Primary Colors (Blue Spectrum)
```css
primary: {
  50: '#f0f9ff',   /* Very light blue */
  100: '#e0f2fe',  /* Light blue */
  200: '#bae6fd',  /* Soft blue */
  300: '#7dd3fc',  /* Medium light blue */
  400: '#38bdf8',  /* Medium blue */
  500: '#0ea5e9',  /* Base primary blue */
  600: '#0284c7',  /* Primary action blue */
  700: '#0369a1',  /* Dark blue */
  800: '#075985',  /* Darker blue */
  900: '#0c4a6e'   /* Darkest blue */
}
```

### Secondary Colors (Yellow/Gold Spectrum)
```css
secondary: {
  50: '#fefce8',   /* Very light yellow */
  100: '#fef9c3',  /* Light yellow */
  200: '#fef08a',  /* Soft yellow */
  300: '#fde047',  /* Medium yellow */
  400: '#facc15',  /* Bright yellow */
  500: '#eab308',  /* Base secondary yellow */
  600: '#ca8a04',  /* Gold */
  700: '#a16207',  /* Dark gold */
  800: '#854d0e',  /* Darker gold */
  900: '#713f12'   /* Darkest gold */
}
```

### Accent Colors (Orange Spectrum)
```css
accent: {
  50: '#fff7ed',   /* Very light orange */
  100: '#ffedd5',  /* Light orange */
  200: '#fed7aa',  /* Soft orange */
  300: '#fdba74',  /* Medium orange */
  400: '#fb923c',  /* Bright orange */
  500: '#f97316',  /* Base accent orange */
  600: '#ea580c',  /* Primary accent orange */
  700: '#c2410c',  /* Dark orange */
  800: '#9a3412',  /* Darker orange */
  900: '#7c2d12'   /* Darkest orange */
}
```

### Usage Guidelines
- **Primary (Blue)**: Main branding, primary buttons, links, navigation active states
- **Secondary (Yellow/Gold)**: Highlights, secondary buttons, accent elements
- **Accent (Orange)**: Call-to-action elements, important highlights, hover states

## 📝 Typography System

### Font Families
```css
/* English Content */
font-family: 'Inter', system-ui, sans-serif;
font-weights: 300, 400, 500, 600, 700

/* Arabic Content */
font-family: 'Noto Sans Arabic', Arial, sans-serif;
font-weights: 300, 400, 500, 600, 700
```

### Typography Scale
```css
/* Headings */
.text-4xl    /* 36px - Section titles */
.text-5xl    /* 48px - Main page titles */
.text-6xl    /* 60px - Hero titles */

/* Body Text */
.text-base   /* 16px - Regular body text */
.text-lg     /* 18px - Large body text */
.text-xl     /* 20px - Subtitle text */
.text-2xl    /* 24px - Card titles */

/* Small Text */
.text-sm     /* 14px - Captions, labels */
.text-xs     /* 12px - Fine print */
```

### Font Weights
- **300**: Light text, subtle elements
- **400**: Regular body text
- **500**: Medium emphasis, navigation
- **600**: Semibold headings, important text
- **700**: Bold headings, primary emphasis

## 🧩 Component Library

### Button Styles
```css
/* Primary Button */
.btn-primary {
  @apply bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center;
}

/* Secondary Button */
.btn-secondary {
  @apply bg-white hover:bg-gray-50 text-primary-600 border border-primary-600 font-medium py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center;
}

/* Accent Button */
.btn-accent {
  @apply bg-accent-500 hover:bg-accent-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center;
}
```

### Card Components
```css
.card {
  @apply bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300;
}

/* Card with hover scale effect */
.card-interactive {
  @apply card hover:scale-105 transition-transform duration-300;
}

/* Glass morphism card */
.card-glass {
  @apply bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors duration-300;
}
```

## 📐 Layout System

### Container & Spacing
```css
/* Maximum width container */
.container-max {
  @apply max-w-7xl mx-auto;
}

/* Standard section padding */
.section-padding {
  @apply py-16 px-4 sm:px-6 lg:px-8;
}

/* Compact section padding */
.section-padding-sm {
  @apply py-8 px-4 sm:px-6 lg:px-8;
}
```

### Grid Systems
```css
/* Service cards grid */
.grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8

/* Two column layout */
.grid-cols-1 md:grid-cols-2 gap-6

/* Four column footer */
.grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8
```

### Responsive Breakpoints
- **sm**: 640px and up (mobile landscape)
- **md**: 768px and up (tablet)
- **lg**: 1024px and up (desktop)
- **xl**: 1280px and up (large desktop)
- **2xl**: 1536px and up (extra large)

## 🎭 Animation System

### Custom Animations
```css
/* Fade in animation */
.animate-fade-in {
  animation: fadeIn 0.5s ease-in-out;
}

/* Slide up animation */
.animate-slide-up {
  animation: slideUp 0.5s ease-out;
}

/* Floating animation */
.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* Slow bounce */
.animate-bounce-slow {
  animation: bounce 2s infinite;
}
```

### Keyframes
```css
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes slideUp {
  0% { transform: translateY(20px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
```

### Framer Motion Patterns
```jsx
/* Standard entrance animation */
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
viewport={{ once: true }}

/* Staggered animations */
transition={{ duration: 0.8, delay: index * 0.2 }}

/* Hover interactions */
whileHover={{ scale: 1.05 }}
transition={{ duration: 0.3 }}
```

## 🌍 Internationalization (RTL Support)

### RTL-Specific Styles
```css
/* RTL text direction */
[dir="rtl"] {
  font-family: 'Noto Sans Arabic', Arial, sans-serif;
}

[dir="ltr"] {
  font-family: 'Inter', system-ui, sans-serif;
}

/* RTL spacing utilities */
.rtl:space-x-reverse > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 1;
}

/* RTL flip utility */
.rtl-flip {
  transform: scaleX(-1);
}

[dir="rtl"] .rtl-flip {
  transform: scaleX(1);
}
```

### RTL Layout Patterns
```jsx
/* Spacing with RTL support */
className="space-x-4 rtl:space-x-reverse"

/* Margins with RTL support */
className="ml-2 rtl:ml-0 rtl:mr-2"

/* Icon rotation for RTL */
className="rtl:rotate-180"

/* Transform animations for RTL */
className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
```

## 🎨 Visual Effects

### Gradients
```css
/* Primary gradient */
.bg-gradient-to-r.from-primary-600.to-accent-500

/* Text gradient */
.text-gradient {
  @apply bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent;
}

/* Service card gradients */
.from-green-500.to-green-600    /* Safari/Nature */
.from-purple-500.to-purple-600  /* Wine/Culture */
.from-orange-500.to-orange-600  /* Adventure/Culture */
```

### Shadows & Effects
```css
/* Card shadows */
.shadow-lg        /* Standard card shadow */
.hover:shadow-xl  /* Hover enhanced shadow */

/* Glass morphism */
.bg-white/10.backdrop-blur-sm

/* Overlay effects */
.bg-black.bg-opacity-40          /* Standard overlay */
.group-hover:bg-opacity-30       /* Hover lightened overlay */
```

## 📱 Component Patterns

### Hero Section Pattern
```jsx
<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  {/* Background with overlay */}
  <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" />
    <div className="absolute inset-0 bg-black bg-opacity-40" />
  </div>
  
  {/* Content */}
  <div className="relative z-10 container-max section-padding text-center text-white">
    {/* Animated content */}
  </div>
  
  {/* Floating decorative elements */}
  <div className="absolute top-20 left-10 w-20 h-20 bg-primary-500/20 rounded-full animate-float" />
</section>
```

### Card Grid Pattern
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {items.map((item, index) => (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="card hover:scale-105 transition-transform duration-300"
    >
      {/* Card content */}
    </motion.div>
  ))}
</div>
```

### Navigation Pattern
```jsx
<header className="bg-white shadow-lg sticky top-0 z-50">
  <nav className="container-max section-padding py-4">
    <div className="flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-2 rtl:space-x-reverse">
        <Image src="/logo.png" alt="Logo" width={120} height={120} />
      </Link>
      
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
        {/* Navigation items */}
      </div>
      
      {/* Mobile menu button */}
      <button className="lg:hidden">
        {/* Hamburger icon */}
      </button>
    </div>
  </nav>
</header>
```

## 🔧 Utility Classes

### Custom Utilities
```css
/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Antialiased text */
body {
  @apply antialiased;
}

/* RTL border adjustments */
[dir="rtl"] .border-l-4 {
  border-left: none;
  border-right: 4px solid;
}
```

### Spacing Scale
- **Gap/Padding**: 4, 6, 8, 12, 16, 20, 24 (in Tailwind units)
- **Margins**: 2, 4, 6, 8, 12, 16 (in Tailwind units)
- **Section Padding**: py-16 px-4 sm:px-6 lg:px-8

## 🎯 Interactive States

### Hover Effects
```css
/* Button hovers */
.hover:bg-primary-700     /* Primary button */
.hover:bg-gray-50         /* Secondary button */
.hover:scale-105          /* Card hover */
.hover:shadow-xl          /* Shadow enhancement */

/* Icon animations */
.group-hover:translate-x-1  /* Arrow slide */
.hover:scale-110           /* Icon scale */
```

### Transition Patterns
```css
/* Standard transitions */
.transition-colors.duration-200    /* Color changes */
.transition-transform.duration-300 /* Scale/transform */
.transition-shadow.duration-300    /* Shadow changes */
.transition-all.duration-300       /* Multiple properties */
```

## 📋 Implementation Checklist

### Required Dependencies
```json
{
  "tailwindcss": "^3.3.5",
  "framer-motion": "^10.18.0",
  "@heroicons/react": "^2.0.18",
  "next-intl": "^3.0.0",
  "autoprefixer": "^10.4.16",
  "postcss": "^8.4.31"
}
```

### Font Setup
1. Import Google Fonts in globals.css:
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@300;400;500;600;700&display=swap');
```

2. Configure Tailwind font families in tailwind.config.js

### Color Implementation
1. Add custom colors to Tailwind config
2. Create component utility classes in globals.css
3. Implement consistent color usage across components

### Animation Setup
1. Configure Framer Motion provider
2. Add custom keyframes to globals.css
3. Implement consistent animation patterns

## 🎨 Design Principles

### Visual Hierarchy
- **Large, bold headings** for primary content
- **Consistent spacing** using the 8px grid system
- **Color contrast** for accessibility (WCAG AA compliant)
- **Progressive disclosure** with animations

### User Experience
- **Smooth animations** with appropriate timing
- **Responsive design** mobile-first approach
- **RTL support** for international audiences
- **Accessibility** with proper ARIA labels and keyboard navigation

### Performance
- **Optimized images** with Next.js Image component
- **Lazy loading** for animations (viewport triggers)
- **Efficient CSS** with Tailwind's purging
- **Minimal JavaScript** with server-side rendering

---

## 📞 Usage Notes

This style guide provides a complete foundation for replicating the Cape Home   website's design system. The patterns are modular and can be adapted for different content types while maintaining visual consistency.

Key implementation files to reference:
- `tailwind.config.js` - Color system and custom utilities
- `globals.css` - Component classes and base styles
- Component files - Layout and animation patterns

For RTL support, ensure proper text direction attributes and use the provided RTL utility classes throughout your implementation.
