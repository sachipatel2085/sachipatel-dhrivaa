export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description: string }[];
}

export const mainNavItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  {
    label: 'Products',
    href: '/products',
    children: [
      {
        label: 'Rapeseed Meal',
        href: '/products/rapeseed-meal',
        description: 'High-protein agricultural processing by-product for animal nutrition.'
      },
      {
        label: 'Castorseed Meal',
        href: '/products/castorseed-meal',
        description: 'Organic nutrient-rich meal for bio-fertilizers and soil conditioning.'
      },
      {
        label: 'Castor Oil',
        href: '/products/castor-oil',
        description: 'Industrial and technical grade vegetable oil for global manufacturing.'
      }
    ]
  },
  { label: 'Sourcing & Procurement', href: '/sourcing-procurement' },
  { label: 'Quality Assurance', href: '/quality-assurance' },
  { label: 'Buyer Resources', href: '/buyer-resources' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' }
];

export const footerQuickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About DHRIVAA', href: '/about-us' },
  { label: 'Our Products', href: '/products' },
  { label: 'Buyer Resources', href: '/buyer-resources' },
  { label: 'Trade Insights', href: '/insights' },
  { label: 'Sourcing Process', href: '/sourcing-procurement' },
  { label: 'Quality Coordination', href: '/quality-assurance' },
  { label: 'Contact Us', href: '/contact' }
];

export const footerProductLinks = [
  { label: 'Rapeseed Meal', href: '/products/rapeseed-meal' },
  { label: 'Castorseed Meal', href: '/products/castorseed-meal' },
  { label: 'Castor Oil', href: '/products/castor-oil' },
  { label: 'All Products Overview', href: '/products' }
];

export const footerResourceLinks = [
  { label: 'Product Specifications Guide', href: '/buyer-resources#specifications-guide' },
  { label: 'Packaging Standards Guide', href: '/buyer-resources#packaging-standards' },
  { label: 'Export Documentation Package', href: '/buyer-resources#export-documentation' },
  { label: 'Incoterms for Commodity Buyers', href: '/buyer-resources#incoterms-explained' },
  { label: 'Bulk Procurement Roadmap', href: '/buyer-resources#procurement-workflow' }
];

export const footerServiceLinks = [
  { label: 'Buyer-Led Sourcing', href: '/sourcing-procurement#capabilities' },
  { label: 'Supplier Identification', href: '/sourcing-procurement#process' },
  { label: 'Quality Coordination', href: '/quality-assurance' },
  { label: 'Pre-Shipment Inspection', href: '/quality-assurance#inspection' },
  { label: 'Export Documentation Support', href: '/quality-assurance#documentation' }
];

export const footerLegalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions' }
];
