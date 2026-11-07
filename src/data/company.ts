export interface CompanyInfo {
  name: string;
  tagline: string;
  legalEntity: string;
  location: string;
  region: string;
  targetMarkets: string[];
  email: string;
  phone: string;
  phoneDisplay: string;
  whatsappUrl: string;
  businessModel: string;
  positioningNotice: string;
}

export const companyData: CompanyInfo = {
  name: 'DHRIVAA',
  tagline: 'Global Trade Partner',
  legalEntity: 'DHRIVAA – Global Trade Partner',
  location: 'Gujarat, India',
  region: 'Western India Agro Corridor',
  targetMarkets: [
    'United Arab Emirates (UAE)',
    'Saudi Arabia',
    'Oman',
    'Qatar',
    'Bahrain',
    'Kuwait',
    'Other International Markets'
  ],
  email: 'info@dhrivaa.global',
  phone: '+919876543210',
  phoneDisplay: '+91 98765 43210',
  whatsappUrl: 'https://wa.me/919876543210?text=Hello%20DHRIVAA%20team,%20I%20would%20like%20to%20inquire%20about%20agricultural%20commodity%20sourcing.',
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
    title: 'Understand Requirements',
    shortDesc: 'Your product specifications, quantity, and market needs.',
    fullDesc: 'We evaluate your technical parameters, intended industrial or feed application, delivery schedule, port destination, and target packaging requirements.',
    image: '/images/step-requirements.jpg'
  },
  {
    step: '02',
    title: 'Identify Suppliers',
    shortDesc: 'We connect with suitable suppliers across India based on your requirements.',
    fullDesc: 'Leveraging our regional presence in Gujarat, we survey established crushing units and extraction plants to match capacity, pricing, and quality standards.',
    image: '/images/step-suppliers.jpg'
  },
  {
    step: '03',
    title: 'Coordinate Quality',
    shortDesc: 'Product specifications, samples, and documentation support.',
    fullDesc: 'We coordinate pre-shipment sample testing, independent Certificate of Analysis (COA) verification, and contract packaging specifications prior to dispatch.',
    image: '/images/step-quality.jpg'
  },
  {
    step: '04',
    title: 'Procurement & Shipment',
    shortDesc: 'Packaging and logistics coordination as per requirements.',
    fullDesc: 'We assist with container stuffing, stuffing photographs, customs documentation coordination, and timely dispatch through Mundra or Kandla ports.',
    image: '/images/step-logistics.jpg'
  }
];

export const whyChoosePoints = [
  {
    title: 'Buyer-Centric Approach',
    description: 'Every procurement inquiry is treated as a bespoke mandate tailored exclusively to the buyer\'s specifications rather than pushing surplus inventory.'
  },
  {
    title: 'Reliable Sourcing Network',
    description: 'Established access to vetted solvent extraction plants and crushing units across Gujarat and major western Indian agricultural belts.'
  },
  {
    title: 'Quality Coordination',
    description: 'Independent coordination of sample dispatch, batch testing, and third-party inspection agencies to preserve contract integrity.'
  },
  {
    title: 'Transparent Process',
    description: 'Open communication regarding market trends, supplier capacity, dispatch milestones, and complete documentation trail.'
  },
  {
    title: 'Documentation Support',
    description: 'Assistance with essential export compliance, bills of lading, phytosanitary certifications, certificates of origin, and COAs.'
  },
  {
    title: 'Long-Term Partnerships',
    description: 'Focus on cultivating enduring trade relationships with international buyers through dependable execution and honest advisory.'
  }
];
