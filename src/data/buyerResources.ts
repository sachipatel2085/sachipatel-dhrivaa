export interface ResourceSection {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  items: {
    title: string;
    description: string;
    details?: string[];
    highlight?: string;
  }[];
}

export const buyerResourcesData = {
  hero: {
    eyebrow: 'Buyer Reference Guide',
    title: 'Agricultural Commodity Buyer Resources',
    titleAccent: 'Specifications, Packaging & Export Documentation',
    description: 'A practical trade reference for buyers sourcing bulk Rapeseed Meal, Castorseed Meal, and Castor Oil from Gujarat, India.',
    bannerImage: '/images/banner-about.jpg',
    bannerAlt: 'International shipping logistics and agricultural trade operations in Gujarat'
  },

  specsGuide: {
    id: 'specifications-guide',
    badge: 'TECHNICAL COMPLIANCE',
    title: 'Product Specifications Coordination Guide',
    subtitle: 'How Technical Parameters are Evaluated, Matched, and Verified',
    description: 'DHRIVAA coordinates procurement based strictly on buyer parameters. Every commercial contract is aligned with your required chemical, physical, and regulatory standards.',
    principles: [
      {
        title: 'Buyer-Mandated Parameter Mapping',
        description: 'We match your target thresholds against vetted crushing lots to identify capable processors.'
      },
      {
        title: 'Pre-Shipment Laboratory Analysis (COA)',
        description: 'Composite samples are tested at accredited laboratories and an authentic Certificate of Analysis (COA) is issued before port dispatch.'
      },
      {
        title: 'Third-Party Independent Inspection Support',
        description: 'Buyers may appoint international surveyors (SGS, Bureau Veritas) for independent sampling, testing, and container inspection.'
      },
      {
        title: 'Retention Sample Management',
        description: 'Sealed duplicate samples are retained for each export batch to ensure full voyage traceability.'
      }
    ]
  },

  packagingGuide: {
    id: 'packaging-standards',
    badge: 'CONTAINERIZED LOGISTICS',
    title: 'International Export Packaging Standards',
    subtitle: 'Engineered for Maritime Transit and Middle Eastern Climates',
    description: 'We coordinate packaging solutions engineered to withstand maritime transit and protect product integrity.',
    formats: [
      {
        title: '50 kg Polypropylene (PP) Woven Bags',
        capacity: '50 kg net weight',
        commodities: 'Rapeseed Meal, Castorseed Meal',
        description: 'Double-stitched woven polypropylene bags with optional inner polyethylene moisture liners for standard handling.',
        advantages: ['Manual handling friendly', 'Facilitates direct distributor re-sale', 'Standard 20–22 MT per 20ft container']
      },
      {
        title: '1,000 kg (1 MT) Industrial Jumbo Bags (FIBC)',
        capacity: '1,000 kg (1 Metric Ton)',
        commodities: 'Rapeseed Meal, Castorseed Meal',
        description: 'Four-point lifting loop FIBC bags designed for rapid crane handling and automated feed mill intake.',
        advantages: ['Rapid crane and forklift maneuvering', 'Optimized for commercial feed mill silos', 'Reduces terminal labor costs']
      },
      {
        title: 'Bulk Sea Container Liners (20ft FCL)',
        capacity: 'Up to 24 MT net',
        commodities: 'Rapeseed Meal',
        description: 'Heavy-duty food-grade polyethylene liners installed inside 20ft containers for maximum freight payload.',
        advantages: ['Maximum freight payload per container', 'Zero bag packaging cost', 'Pneumatic unloading directly into mill silos']
      },
      {
        title: 'Bulk Flexitanks (24,000 Liters)',
        capacity: '21.5 MT to 24 MT net',
        commodities: 'Castor Oil',
        description: 'Single-use multi-layer polyethylene bladders with bulkheads for bulk liquid castor oil transport.',
        advantages: ['Lowest packaging cost per metric ton for bulk liquids', 'Zero contamination risk between shipments', 'Direct discharge into plant storage tanks']
      },
      {
        title: '200-Liter ISO Steel Drums',
        capacity: '200 Liters (approx. 195–200 kg net)',
        commodities: 'Castor Oil',
        description: 'New tight-head steel ISO drums packed 80 drums per 20ft container for modular chemical batching.',
        advantages: ['Modular batch dosing for small-to-mid chemical plants', 'Resistant to warehouse rough handling', 'Easily palletized and moved via drum lifters']
      },
      {
        title: '1,000-Liter IBC Totes',
        capacity: '1,000 Liters (approx. 960 kg net)',
        commodities: 'Castor Oil',
        description: 'Composite intermediate bulk containers with tubular steel cages and pallet bases for precision dispensing.',
        advantages: ['Precision valve-controlled liquid dispensing', 'Stackable for compact plant storage', 'Forklift-ready without special attachments']
      }
    ]
  },

  documentationGuide: {
    id: 'export-documentation',
    badge: 'TRADE COMPLIANCE',
    title: 'Essential Export Documentation Guide',
    subtitle: 'Streamlining Middle Eastern Customs Clearance & Trade Integrity',
    description: 'We coordinate complete document packages certified to meet Indian export regulations and destination customs authorities.',
    documents: [
      {
        code: 'BL',
        name: 'Ocean Bill of Lading (Clean on Board)',
        issuedBy: 'Shipping Line / Ocean Carrier',
        description: 'Definitive document of title and contract of carriage confirming receipt of goods on board the vessel.',
        importance: 'Mandatory for customs release and bank Letter of Credit negotiation.'
      },
      {
        code: 'COA',
        name: 'Certificate of Analysis (COA)',
        issuedBy: 'Accredited Laboratory / Manufacturer',
        description: 'Accredited laboratory report verifying contracted parameters against agreed tolerances before departure.',
        importance: 'Ensures contractual quality compliance prior to vessel departure.'
      },
      {
        code: 'COO',
        name: 'Certificate of Origin (Chamber Legalized)',
        issuedBy: 'Indian Chamber of Commerce / Authorized Agency',
        description: 'Official document certifying that the commodity was grown and processed in India for customs tariff clearance.',
        importance: 'Required for GCC customs tariff classification and preferential trade agreements.'
      },
      {
        code: 'PHYTO',
        name: 'Phytosanitary Certificate',
        issuedBy: 'Plant Quarantine Organization of India',
        description: 'Official health certificate confirming the plant-derived cargo is free from quarantine pests and diseases.',
        importance: 'Mandatory for importing plant-derived meals into GCC agriculture ministries.'
      },
      {
        code: 'INV-PL',
        name: 'Commercial Invoice & Detailed Packing List',
        issuedBy: 'Sourcing Company / Exporter',
        description: 'Itemized commercial document detailing values, weights, container numbers, and seal records.',
        importance: 'Essential for customs duty assessment and port terminal intake.'
      },
      {
        code: 'FUM-INSP',
        name: 'Fumigation & Third-Party Inspection Certificates',
        issuedBy: 'Accredited Fumigator / SGS / Bureau Veritas',
        description: 'Evidence of authorized container fumigation and third-party surveyor weight and quality certification.',
        importance: 'Satisfies port health and plant quarantine biosecurity mandates.'
      }
    ]
  },

  incotermsGuide: {
    id: 'incoterms-explained',
    badge: 'COMMERCIAL TERMS',
    title: 'Incoterms for International Commodity Buyers',
    subtitle: 'Understanding Risk Allocation, Freight Costs & Responsibilities',
    description: 'DHRIVAA offers commercial coordination under Incoterms 2020 rules, ensuring both buyer and supplier maintain absolute clarity over freight costs, insurance, and risk transfer points.',
    terms: [
      {
        term: 'FOB',
        name: 'Free on Board (Mundra Port / Kandla Port)',
        buyerRisk: 'Risk transfers once containers are loaded onto the ocean vessel at Gujarat seaports.',
        buyerPays: 'Ocean freight, marine insurance, destination port terminal handling charges, and import customs clearance.',
        sellerDoes: 'Inland transport from mill to seaport, export documentation, Indian port handling, and container loading aboard ship.',
        bestFor: 'Buyers with established global shipping contracts and volume container rate agreements.'
      },
      {
        term: 'CFR',
        name: 'Cost and Freight (Jebel Ali / Dammam / Sohar / Hamad)',
        buyerRisk: 'Risk transfers upon vessel loading in India, but ocean freight is prepaid by the seller.',
        buyerPays: 'Marine transit insurance, destination port charges, customs import duties, and local inland delivery.',
        sellerDoes: 'Commodity cost, export processing, Indian port charges, ocean container booking, and ocean freight to destination port.',
        bestFor: 'Buyers who prefer all-inclusive ocean freight arranged without arranging shipping lines.'
      },
      {
        term: 'CIF',
        name: 'Cost, Insurance and Freight (Destination Seaport)',
        buyerRisk: 'Risk transfers onboard ship, but seller arranges both ocean freight and minimum marine cargo insurance.',
        buyerPays: 'Destination port terminal handling, customs import clearance, and final transport from port to buyer warehouse.',
        sellerDoes: 'Commodity procurement, export customs, ocean freight, and international marine cargo insurance policy.',
        bestFor: 'Importers seeking maximum protection and simplified single-invoice commercial transactions.'
      }
    ]
  },

  procurementGuide: {
    id: 'procurement-workflow',
    badge: 'BUYER JOURNEY',
    title: 'The Bulk Commodity Procurement Roadmap',
    subtitle: 'Step-by-Step B2B Procurement Journey with DHRIVAA',
    description: 'A structured 5-step workflow designed to ensure contract compliance and reliable execution.',
    steps: [
      {
        step: '01',
        title: 'Requirement Definition & RFQ Submission',
        description: 'You share your technical parameters, volume, packaging preference, target Incoterms, and destination port.',
        output: 'Structured sourcing evaluation and commercial quotation.'
      },
      {
        step: '02',
        title: 'Supplier Vetting & Specification Matching',
        description: 'We audit regional crushing plants in Gujarat to identify processors matching your exact quality thresholds.',
        output: 'Procurement proposal and pre-shipment sample dispatch.'
      },
      {
        step: '03',
        title: 'Commercial Agreement & Trade Structuring',
        description: 'Contract parameters, packaging markings, shipment timetables, and payment terms are finalized.',
        output: 'Commercial sourcing agreement with mutually agreed specifications.'
      },
      {
        step: '04',
        title: 'Quality Verification & Pre-Shipment Testing',
        description: 'Production batches are tested at accredited laboratories and verified by optional third-party inspectors.',
        output: 'Certified Certificate of Analysis (COA) and stuffing inspection photos.'
      },
      {
        step: '05',
        title: 'Port Dispatch, Ocean Transit & Documentation',
        description: 'Containers are loaded at Mundra or Kandla ports and dispatched with full export documentation.',
        output: 'Clean on Board Bill of Lading, Phytosanitary, and Certificate of Origin package.'
      }
    ]
  }
};
