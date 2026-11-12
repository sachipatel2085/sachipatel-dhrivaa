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
    eyebrow: 'INTERNATIONAL PROCUREMENT INTELLIGENCE',
    title: 'B2B Agricultural Commodity Buyer Resources',
    titleAccent: 'Clarity, Compliance & Coordination.',
    description: 'An authoritative procurement reference for international buyers, commodity traders, and commercial feed & chemical manufacturers sourcing agricultural products from western India.',
    bannerImage: '/images/banner-about.jpg',
    bannerAlt: 'International shipping logistics and agricultural trade operations in Gujarat'
  },

  specsGuide: {
    id: 'specifications-guide',
    badge: 'TECHNICAL COMPLIANCE',
    title: 'Product Specifications Coordination Guide',
    subtitle: 'How Technical Parameters are Evaluated, Matched, and Verified',
    description: 'DHRIVAA operates as an independent sourcing coordinator. We do not manufacture standardized retail products; rather, every commercial contract is engineered to fulfill the buyer\'s exact chemical, physical, and regulatory parameters.',
    principles: [
      {
        title: 'Buyer-Mandated Parameter Mapping',
        description: 'You provide target thresholds (e.g., minimum protein for rapeseed meal, nitrogen/NPK for castorseed meal, or acid/color values for castor oil). We cross-reference regional crushing lot databases to identify processors equipped to meet your thresholds.'
      },
      {
        title: 'Pre-Shipment Laboratory Analysis (COA)',
        description: 'Before any container is cleared for seaport dispatch, composite representative samples are analyzed at ISO/IEC 17025 accredited laboratory facilities in India. An authentic Certificate of Analysis (COA) is transmitted for buyer review.'
      },
      {
        title: 'Third-Party Independent Inspection Support',
        description: 'Buyers may elect to nominate international surveyor agencies—such as SGS, Bureau Veritas, or Intertek—to perform independent draft survey, sampling, moisture testing, and container stuffing supervision.'
      },
      {
        title: 'Retention Sample Management',
        description: 'Sealed duplicate representative samples are cataloged and preserved for each export dispatch lot to provide complete traceability and audit verification across the maritime voyage.'
      }
    ]
  },

  packagingGuide: {
    id: 'packaging-standards',
    badge: 'CONTAINERIZED LOGISTICS',
    title: 'International Export Packaging Standards',
    subtitle: 'Engineered for Maritime Transit and Middle Eastern Climates',
    description: 'Agricultural commodities shipped through tropical and maritime corridors face moisture variations. We coordinate packaging solutions tailored to ocean freight and terminal handling equipment.',
    formats: [
      {
        title: '50 kg Polypropylene (PP) Woven Bags',
        capacity: '50 kg net weight',
        commodities: 'Rapeseed Meal, Castorseed Meal',
        description: 'High-tensile UV-treated woven polypropylene bags with double-lock bottom stitching. Can be specified with inner polyethylene liners for moisture-sensitive destinations.',
        advantages: ['Manual handling friendly', 'Facilitates direct distributor re-sale', 'Standard 20–22 MT per 20ft container']
      },
      {
        title: '1,000 kg (1 MT) Industrial Jumbo Bags (FIBC)',
        capacity: '1,000 kg (1 Metric Ton)',
        commodities: 'Rapeseed Meal, Castorseed Meal',
        description: 'Four-point lifting loop Flexible Intermediate Bulk Containers constructed from heavy-gauge polypropylene with top duffle filling and bottom discharge spouts.',
        advantages: ['Rapid crane and forklift maneuvering', 'Optimized for commercial feed mill silos', 'Reduces terminal labor costs']
      },
      {
        title: 'Bulk Sea Container Liners (20ft FCL)',
        capacity: 'Up to 24 MT net',
        commodities: 'Rapeseed Meal',
        description: 'Heavy-duty food-grade polyethylene liners installed inside standard 20ft ocean containers, loaded through specialized pneumatic blowing equipment.',
        advantages: ['Maximum freight payload per container', 'Zero bag packaging cost', 'Pneumatic unloading directly into mill silos']
      },
      {
        title: 'Bulk Flexitanks (24,000 Liters)',
        capacity: '21.5 MT to 24 MT net',
        commodities: 'Castor Oil',
        description: 'Single-use food/chemical-grade multi-layer polyethylene bladders installed with steel bulkheads inside 20ft ocean containers, equipped with bottom discharge valves.',
        advantages: ['Lowest packaging cost per metric ton for bulk liquids', 'Zero contamination risk between shipments', 'Direct discharge into plant storage tanks']
      },
      {
        title: '200-Liter ISO Steel Drums',
        capacity: '200 Liters (approx. 195–200 kg net)',
        commodities: 'Castor Oil',
        description: 'Brand-new epoxy-lined or mild steel tight-head ISO drums with 2-inch and ¾-inch bungs. Loaded 80 drums per standard 20ft container (approx. 16 MT net).',
        advantages: ['Modular batch dosing for small-to-mid chemical plants', 'Resistant to warehouse rough handling', 'Easily palletized and moved via drum lifters']
      },
      {
        title: '1,000-Liter IBC Totes',
        capacity: '1,000 Liters (approx. 960 kg net)',
        commodities: 'Castor Oil',
        description: 'Composite Intermediate Bulk Containers featuring high-density polyethylene inner bottle reinforced with tubular steel cage and integrated pallet base.',
        advantages: ['Precision valve-controlled liquid dispensing', 'Stackable for compact plant storage', 'Forklift-ready without special attachments']
      }
    ]
  },

  documentationGuide: {
    id: 'export-documentation',
    badge: 'TRADE COMPLIANCE',
    title: 'Essential Export Documentation Guide',
    subtitle: 'Streamlining Middle Eastern Customs Clearance & Trade Integrity',
    description: 'International agricultural trade demands flawless documentation. DHRIVAA coordinates complete, auditable document packages certified to meet Indian export regulations and destination customs authorities in the UAE, Saudi Arabia, Oman, Qatar, Bahrain, and Kuwait.',
    documents: [
      {
        code: 'BL',
        name: 'Ocean Bill of Lading (Clean on Board)',
        issuedBy: 'Shipping Line / Ocean Carrier',
        description: 'The definitive document of title and contract of carriage confirming that the containerized commodity has been received onboard the vessel in apparent good condition.',
        importance: 'Mandatory for customs release and bank Letter of Credit negotiation.'
      },
      {
        code: 'COA',
        name: 'Certificate of Analysis (COA)',
        issuedBy: 'Accredited Laboratory / Manufacturer',
        description: 'Comprehensive laboratory report detailing test results for contracted parameters (e.g., protein, moisture, sand/silica, acid value, color) matched against contracted tolerances.',
        importance: 'Ensures contractual quality compliance prior to vessel departure.'
      },
      {
        code: 'COO',
        name: 'Certificate of Origin (Chamber Legalized)',
        issuedBy: 'Indian Chamber of Commerce / Authorized Agency',
        description: 'Legal document certifying that the commodity was wholly grown, harvested, and processed within India.',
        importance: 'Required for GCC customs tariff classification and preferential trade agreements.'
      },
      {
        code: 'PHYTO',
        name: 'Phytosanitary Certificate',
        issuedBy: 'Plant Quarantine Organization of India',
        description: 'Official agricultural health certificate certifying that the plant-derived commodity has been inspected and found free from quarantine pests, noxious weeds, and diseases.',
        importance: 'Mandatory for importing plant-derived meals into GCC agriculture ministries.'
      },
      {
        code: 'INV-PL',
        name: 'Commercial Invoice & Detailed Packing List',
        issuedBy: 'Sourcing Company / Exporter',
        description: 'Itemized invoice disclosing full commercial terms, Incoterms, container numbers, seal numbers, gross weight, net weight, and bag/package counts.',
        importance: 'Essential for customs duty assessment and port terminal intake.'
      },
      {
        code: 'FUM-INSP',
        name: 'Fumigation & Third-Party Inspection Certificates',
        issuedBy: 'Accredited Fumigator / SGS / Bureau Veritas',
        description: 'Confirms authorized container fumigation (e.g., Methyl Bromide or Phosphine) and independent third-party surveyor weight/quality certificates where contracted.',
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
    description: 'We demystify the agricultural sourcing process into a structured, predictable 5-step workflow designed to eliminate counterparty risk and protect international buyers.',
    steps: [
      {
        step: '01',
        title: 'Requirement Definition & RFQ Submission',
        description: 'You share your detailed specification requirements (target protein, moisture, packaging format, monthly or spot metric tonnage, target Incoterm, and destination port).',
        output: 'Structured Sourcing Evaluation and commercial feasibility indication.'
      },
      {
        step: '02',
        title: 'Supplier Vetting & Specification Matching',
        description: 'DHRIVAA surveys solvent extraction and crushing facilities across the Gujarat agro corridor, auditing mill processing capacity, raw seed quality, and batch consistency.',
        output: 'Transparent procurement proposal and pre-contract sample dispatch if requested.'
      },
      {
        step: '03',
        title: 'Commercial Agreement & Trade Structuring',
        description: 'Contract terms, specifications, packaging markings, shipment schedules, and payment terms (e.g., Irrevocable Letter of Credit or Bank Wire Transfer) are finalized.',
        output: 'Binding Commercial Sourcing Agreement with mutually agreed specifications.'
      },
      {
        step: '04',
        title: 'Quality Verification & Pre-Shipment Testing',
        description: 'Production lots are sampled and tested at accredited laboratories. Optional independent inspection agencies (SGS, Bureau Veritas) conduct container stuffing inspection.',
        output: 'Certified Certificate of Analysis (COA) and stuffing photographic documentation.'
      },
      {
        step: '05',
        title: 'Port Dispatch, Ocean Transit & Documentation Delivery',
        description: 'Containers are gated into Mundra or Kandla deep-sea ports, loaded on rapid Gulf-bound container vessels, and complete legalized export document packages are dispatched.',
        output: 'Full Clean Bill of Lading, Phyto, COO, and customs clearance package.'
      }
    ]
  }
};
