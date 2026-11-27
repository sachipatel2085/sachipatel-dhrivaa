export interface CompanySocialLinks {
  linkedin: string;
  instagram: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  legalEntity: string;
  location: string;
  address: string;
  mapUrl: string;
  region: string;
  targetMarkets: string[];
  email: string;
  phone: string;
  phoneDisplay: string;
  whatsappUrl: string;
  socialLinks: CompanySocialLinks;
  businessModel: string;
  positioningNotice: string;
}

export const companyData: CompanyInfo = {
  name: 'DHRIVAA',
  tagline: 'Global Trade Partner',
  legalEntity: 'DHRIVAA – Global Trade Partner',
  location: 'Gujarat, India',
  address: '8, Patel Fali, Fojivada, Sabarkantha, Gujarat, 383305',
  mapUrl: 'https://share.google/8pHDKtmW56Xg3FizK',
  region: 'Western India Agro Corridor',
  targetMarkets: [
    'United Arab Emirates (UAE)',
    'Saudi Arabia',
    'Oman',
    'Qatar',
    'Bahrain',
    'Kuwait',
    'Australia',
    'United States',
    'United Kingdom',
    'Other International Markets'
  ],
  email: 'info@dhrivaa.com',
  phone: '+919265154502',
  phoneDisplay: '+91 92651 54502',
  whatsappUrl: 'https://wa.me/919265154502?text=Hello%20DHRIVAA%20team,%20I%20would%20like%20to%20inquire%20about%20agricultural%20commodity%20sourcing.',
  socialLinks: {
    linkedin: 'https://www.linkedin.com/company/dhrivaa',
    instagram: 'https://www.instagram.com/dhrivaa.global?srtk=MTc1YzQ5YWdndGptbA=='
  },
  businessModel: 'Buyer-specific agricultural commodity sourcing and procurement coordination',
  positioningNotice: 'DHRIVAA operates as an independent sourcing and procurement coordinator connecting international buyers with verified Indian commodity suppliers. DHRIVAA is not a manufacturer and does not operate production facilities.'
};

export const coreCapabilities = [
  {
    id: 'buyer-led-sourcing',
    number: '01',
    title: 'Buyer-Led Sourcing',
    description: 'We source strictly according to your required specifications, target volumes, and delivery timetables.'
  },
  {
    id: 'supplier-coordination',
    number: '02',
    title: 'Supplier Coordination',
    description: 'Direct access to verified agricultural processing units and commodity crushing mills across India.'
  },
  {
    id: 'quality-documentation',
    number: '03',
    title: 'Quality Documentation',
    description: 'Rigorous support for product specifications, lab testing, pre-shipment inspection, and trade compliance.'
  },
  {
    id: 'procurement-support',
    number: '04',
    title: 'Procurement Support',
    description: 'End-to-end assistance spanning contract structuring, container packaging, and ocean shipment coordination.'
  }
];

export const sourcingSteps = [
  {
    step: '01',
    title: 'Requirement',
    shortDesc: 'We evaluate your specifications, target volume, and delivery schedule.',
    fullDesc: 'We evaluate your specifications, target volume, and delivery schedule.',
    image: '/images/step-requirements.jpg'
  },
  {
    step: '02',
    title: 'Sourcing',
    shortDesc: 'We identify vetted crushing mills and extraction plants across Gujarat.',
    fullDesc: 'We identify vetted crushing mills and extraction plants across Gujarat.',
    image: '/images/step-suppliers.jpg'
  },
  {
    step: '03',
    title: 'Quality',
    shortDesc: 'We coordinate lab testing, sample approvals, and third-party inspections.',
    fullDesc: 'We coordinate lab testing, sample approvals, and third-party inspections.',
    image: '/images/step-quality.jpg'
  },
  {
    step: '04',
    title: 'Shipment',
    shortDesc: 'We manage packaging, export documentation, and port dispatch via Mundra or Kandla.',
    fullDesc: 'We manage packaging, export documentation, and port dispatch via Mundra or Kandla.',
    image: '/images/step-logistics.jpg'
  }
];

export const whyChoosePoints = [
  {
    title: 'Buyer-Centric Sourcing',
    description: 'Procurement structured strictly around your required specifications and delivery timelines.'
  },
  {
    title: 'Verified Supplier Network',
    description: 'Direct access to vetted solvent extraction plants and crushing mills across Gujarat.'
  },
  {
    title: 'Quality Coordination',
    description: 'Independent coordination of pre-shipment sampling, lab testing, and third-party inspections.'
  },
  {
    title: 'Transparent Execution',
    description: 'Clear communication on processor capacity, production schedules, and dispatch milestones.'
  },
  {
    title: 'Export Documentation',
    description: 'Full coordination of Certificates of Analysis, Phytosanitary certificates, and Bills of Lading.'
  },
  {
    title: 'Reliable Delivery',
    description: 'Dependable logistics and container stuffing through Mundra and Kandla ports.'
  }
];
