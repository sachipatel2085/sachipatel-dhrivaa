export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description: string }[];
}

// Simplified Primary Navigation (Home, About Us, Products, Contact)
export const mainNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  {
    label: "Products",
    href: "/products",
    children: [
      {
        label: "Rapeseed Meal",
        href: "/products/rapeseed-meal",
        description: "High-protein meal for commercial livestock & animal nutrition.",
      },
      {
        label: "Castorseed Meal",
        href: "/products/castorseed-meal",
        description: "Organic nutrient-rich meal for soil conditioning & fertilizer.",
      },
      {
        label: "Castor Oil",
        href: "/products/castor-oil",
        description: "Industrial and commercial grade vegetable oil.",
      },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const footerQuickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

export const footerProductLinks = [
  { label: "Rapeseed Meal", href: "/products/rapeseed-meal" },
  { label: "Castorseed Meal", href: "/products/castorseed-meal" },
  { label: "Castor Oil", href: "/products/castor-oil" },
];

export const footerResourceLinks = [
  { label: "Buyer Resources & Guides", href: "/buyer-resources" },
  { label: "Sourcing & Quality Approach", href: "/about-us#approach" },
  { label: "Export Packaging Standards", href: "/buyer-resources#packaging-standards" },
  { label: "Product Specifications Guide", href: "/buyer-resources#specifications-guide" },
];

export const footerLegalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];
