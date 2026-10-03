// Pricing Configuration
// Set showPricing to true to enable pricing display across the site
// This allows pricing to be enabled without redesigning pages

export const pricingConfig = {
  showPricing: false, // Set to true to display pricing
  
  currency: 'USD',
  
  stages: {
    preliminaryProfileCheck: {
      enabled: true,
      price: 250,
      priceDisplay: '$250',
      duration: '1-2 weeks',
      description: 'Comprehensive profile assessment and pathway analysis'
    },
    candidateStrategy: {
      enabled: true,
      price: 750,
      priceDisplay: '$750',
      duration: '2-3 weeks',
      description: 'Individualized strategy and university matching'
    },
    applicationSupport: {
      enabled: true,
      price: 1200,
      priceDisplay: '$1,200',
      duration: 'Ongoing',
      description: 'Application preparation and submission support'
    },
    registrationSupport: {
      enabled: true,
      price: 600,
      priceDisplay: '$600',
      duration: '4-8 weeks',
      description: 'HPCSA registration and regulatory guidance'
    }
  },
  
  packages: {
    enabled: false, // Enable package pricing when ready
    comprehensive: {
      name: 'Comprehensive Package',
      stages: ['preliminaryProfileCheck', 'candidateStrategy', 'applicationSupport', 'registrationSupport'],
      discount: 0.15, // 15% discount
      priceDisplay: '$2,340' // Calculated from individual stages
    },
    trainingFocus: {
      name: 'Training Focus Package',
      stages: ['preliminaryProfileCheck', 'candidateStrategy', 'applicationSupport'],
      discount: 0.10, // 10% discount
      priceDisplay: '$1,890'
    },
    registrationOnly: {
      name: 'Registration Support Package',
      stages: ['registrationSupport'],
      discount: 0,
      priceDisplay: '$600'
    }
  },
  
  notes: [
    'All prices are in USD and subject to change',
    'Payment terms: 50% deposit, 50% on completion',
    'Additional services may be required based on individual circumstances',
    'Pricing does not include university application fees or HPCSA registration fees'
  ]
};

export default pricingConfig;
