export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  eyebrow: string;
  shortDescription: string;
  heroDescription: string;
  fullOverview: string[];
  image: string;
  alt: string;
  applicationsHeading: string;
  applications: string[];
  specificationsNotice: string;
  specifications: { parameter: string; value: string }[];
  packagingOptions: string[];
  sourcingCapabilities: string[];
  qualityDocumentationPoints: string[];
  faqs: { question: string; answer: string }[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const productsData: ProductItem[] = [
  {
    id: 'rapeseed-meal',
    slug: 'rapeseed-meal',
    name: 'Rapeseed Meal',
    eyebrow: 'AGRICULTURAL BY-PRODUCT · PROTEIN SUPPLEMENT',
    shortDescription: 'A high-quality agricultural processing by-product sourced according to buyer specifications.',
    heroDescription: 'Nutrient-rich protein meal obtained from Brassica napus processing, sourced across verified solvent extraction units in western and northern India for international animal nutrition.',
    fullOverview: [
      'Rapeseed meal is an established agricultural processing by-product generated following the extraction of oil from rapeseed. Sourced directly from key agro-processing clusters in India, it is prized globally as an economical, protein-rich ingredient for animal feed formulations.',
      'DHRIVAA operates as a dedicated sourcing and procurement partner for international buyers, coordinating with reliable Indian extraction mills. Sourcing is managed entirely against buyer-defined requirements—ensuring appropriate moisture levels, granulation, packaging, and shipment timelines are rigorously respected.'
    ],
    image: '/images/rapeseed-meal.jpg',
    alt: 'High-quality golden-yellow rapeseed meal protein powder with canola flowers',
    applicationsHeading: 'Key Commercial Applications',
    applications: [
      'Cattle and dairy feed formulations as a dependable protein and amino acid source',
      'Poultry nutrition blends and balanced commercial feed manufacturing',
      'Aquaculture and fish feed formulations',
      'Organic soil conditioning and fertilizer blends'
    ],
    specificationsNotice: 'Product specifications are available upon request based on contract requirements, target grade, and buyer parameters.',
    specifications: [
      { parameter: 'Commodity Type', value: 'De-oiled Rapeseed Meal / Cake' },
      { parameter: 'Origin', value: 'Gujarat & Western India' },
      { parameter: 'Processing Method', value: 'Solvent Extraction' },
      { parameter: 'Form', value: 'Coarse Meal / Pellets (per buyer requirement)' },
      { parameter: 'Technical Specifications', value: 'Product specifications are available upon request' },
      { parameter: 'Standard Packaging', value: '50 kg PP Woven Bags / Jumbo Bags / Bulk in Container' },
      { parameter: 'Loading Ports', value: 'Mundra Port / Kandla Port, Gujarat' },
      { parameter: 'Shipment Terms', value: 'FOB Indian Ports / CIF Gulf & Middle East Ports' }
    ],
    packagingOptions: [
      '50 kg Export-Grade Polypropylene (PP) Woven Bags',
      '1,000 kg (1 MT) UV-Stabilized Polypropylene Jumbo Bags',
      'Bulk Sea Container Liners for direct 20ft container stuffing',
      'Customized buyer stenciling and labeling coordinated upon request'
    ],
    sourcingCapabilities: [
      'Direct coordination with certified solvent extraction facilities in Gujarat and Rajasthan',
      'Strict adherence to buyer-specified physical and chemical thresholds',
      'Consolidation support for commercial FCL (Full Container Load) shipments',
      'Transparent factory visit and sample verification coordination'
    ],
    qualityDocumentationPoints: [
      'Batch-wise Certificate of Analysis (COA) from accredited laboratories',
      'Phytosanitary Certification issued by official Indian plant quarantine authorities',
      'Certificate of Origin attested by recognized export chambers',
      'Coordination with third-party inspection agencies (SGS, Bureau Veritas, or buyer-appointed surveyor) upon request'
    ],
    faqs: [
      {
        question: 'What is the primary role of DHRIVAA in sourcing Rapeseed Meal?',
        answer: 'DHRIVAA acts as an independent trade and procurement partner. We identify verified Indian extraction mills, negotiate technical specifications per buyer requirements, coordinate quality checks and sample approvals, and oversee packing and dispatch logistics.'
      },
      {
        question: 'Can DHRIVAA accommodate custom moisture or protein specifications?',
        answer: 'Yes. Product specifications are tailored to the buyer\'s contractual mandate. Detailed technical parameters are verified with suppliers and confirmed through pre-shipment laboratory analysis.'
      },
      {
        question: 'What shipping terms are supported for export to the UAE and Middle East?',
        answer: 'We coordinate shipments under standard Incoterms including FOB (Free on Board) from Gujarat ports (Mundra or Kandla) and CIF / CFR to key Gulf ports including Jebel Ali (UAE), Dammam/Jeddah (Saudi Arabia), Sohar (Oman), and Hamad (Qatar).'
      },
      {
        question: 'Are product specifications standardized or provided per contract?',
        answer: 'Product specifications are available upon request and tailored to buyer requirements. A Certificate of Analysis is provided for review prior to dispatch.'
      }
    ],
    seo: {
      title: 'Rapeseed Meal Sourcing & Procurement India | DHRIVAA',
      description: 'Reliable Rapeseed Meal sourcing from Gujarat, India for buyers in UAE, Saudi Arabia, and the Middle East. Buyer-specific procurement, quality coordination, and export documentation.',
      keywords: ['Rapeseed Meal Supplier India', 'Rapeseed Meal Exporter India', 'Rapeseed Meal Supplier UAE', 'De-oiled Rapeseed Cake Sourcing']
    }
  },
  {
    id: 'castorseed-meal',
    slug: 'castorseed-meal',
    name: 'Castorseed Meal',
    eyebrow: 'ORGANIC BIO-FERTILIZER · SOIL CONDITIONER',
    shortDescription: 'A versatile agricultural commodity sourced for relevant agricultural and industrial applications.',
    heroDescription: 'Organic nutrient-rich residue from Ricinus communis processing, sourced directly from Gujarat—the world’s foremost castor growing belt—for soil enrichment and organic fertilization.',
    fullOverview: [
      'Castorseed meal (also recognized as castor meal or castor cake) is the solid organic by-product derived after extracting oil from castor seeds. As Gujarat produces over 70% of the world’s castor seeds, the state possesses an unparalleled concentration of specialized extraction facilities.',
      'DHRIVAA connects international agricultural distributors, landscaping enterprises, and fertilizer blenders with vetted processors in Gujarat. Sourced primarily as an exceptional slow-release natural fertilizer, it naturally enriches soil with nitrogen, phosphorus, and organic carbon while deterring soil nematodes.'
    ],
    image: '/images/castorseed-meal.jpg',
    alt: 'Rich brown organic castorseed meal and castor seeds on natural stone',
    applicationsHeading: 'Key Commercial & Agricultural Applications',
    applications: [
      'Organic bio-fertilizer and soil conditioner for open-field crops, orchards, and horticulture',
      'Slow-release natural nitrogen source that improves soil aeration and water retention',
      'Natural nematicide and pest deterrent for golf courses, turf, and date palm plantations',
      'Organic base substrate for enriched commercial compost blends'
    ],
    specificationsNotice: 'Product specifications are available upon request based on contract requirements, target grade, and buyer parameters.',
    specifications: [
      { parameter: 'Commodity Type', value: 'Castorseed Meal / Castor Cake (De-oiled)' },
      { parameter: 'Origin', value: 'Gujarat, India (Primary Global Production Belt)' },
      { parameter: 'Form', value: 'Meal / Coarse Granules / Pellets' },
      { parameter: 'Nature', value: '100% Plant-Derived Organic Residue' },
      { parameter: 'Technical Specifications', value: 'Product specifications are available upon request' },
      { parameter: 'Packaging Options', value: '50 kg HDPE/PP Bags / 1,000 kg Jumbo Bags' },
      { parameter: 'Export Ports', value: 'Mundra Port / Kandla Port, Gujarat' },
      { parameter: 'Logistics', value: 'Standard 20ft / 40ft FCL Containerized Cargo' }
    ],
    packagingOptions: [
      '50 kg Export-Woven HDPE/PP Bags with moisture barrier liner',
      '1 Metric Ton (1,000 kg) Heavy-Duty Jumbo Bags with lifting loops',
      'Customized bag printing with distributor marks and country-of-import regulatory labels'
    ],
    sourcingCapabilities: [
      'Direct strategic proximity to primary castor seed crushing mills in Gujarat',
      'Procurement coordination based on buyer-specific organic nitrogen and moisture parameters',
      'Rigorous monitoring of container stuffing to protect against moisture absorption',
      'End-to-end handling of export documentation and regional customs compliance'
    ],
    qualityDocumentationPoints: [
      'Manufacturer Certificate of Analysis (COA) with each production lot',
      'Authorized Phytosanitary Certificate issued prior to port departure',
      'Certificate of Origin certified by the Chamber of Commerce',
      'Pre-shipment sampling and testing by accredited independent laboratories on request'
    ],
    faqs: [
      {
        question: 'Why is Gujarat the global hub for Castorseed Meal sourcing?',
        answer: 'Gujarat accounts for the predominant share of worldwide castor seed production. This geographic concentration gives DHRIVAA unmatched direct access to primary crushers, consistent availability, and streamlined port logistics through Mundra and Kandla.'
      },
      {
        question: 'Is Castorseed Meal safe for agricultural crops?',
        answer: 'Yes. Castorseed meal is widely celebrated as an exceptional organic fertilizer. Due to its natural composition, it should be applied as a soil conditioner and not used as standard livestock feed.'
      },
      {
        question: 'What packaging is recommended for ocean transit to Gulf climates?',
        answer: 'We coordinate double-stitched polypropylene bags with inner liners or heavy-duty jumbo bags to safeguard product dryness during ocean transit and warehouse storage in high-humidity climates.'
      },
      {
        question: 'How can buyers obtain detailed laboratory specifications?',
        answer: 'Product specifications are available upon request. When you share your target parameters, our team will coordinate with verified suppliers to confirm technical suitability.'
      }
    ],
    seo: {
      title: 'Castorseed Meal Sourcing & Procurement Gujarat | DHRIVAA',
      description: 'Procure high-quality Castorseed Meal (Castor Cake) directly from Gujarat, India. Professional sourcing for organic fertilizer and agricultural buyers in UAE and the Middle East.',
      keywords: ['Castorseed Meal Supplier India', 'Castor Seed Meal Sourcing', 'Castor Meal Exporter India', 'Organic Castor Cake UAE']
    }
  },
  {
    id: 'castor-oil',
    slug: 'castor-oil',
    name: 'Castor Oil',
    eyebrow: 'INDUSTRIAL VEGETABLE OIL · RENEWABLE CHEMICAL',
    shortDescription: 'A valuable vegetable oil sourced for industrial and manufacturing applications.',
    heroDescription: 'High-purity non-edible vegetable oil rich in unique ricinoleic acid, sourced across certified crushing and refining facilities in Gujarat for international chemical, lubricants, and technical industries.',
    fullOverview: [
      'Castor oil is an extraordinary industrial vegetable oil extracted from castor seeds. It is unique among natural oils due to its high concentration of ricinoleic fatty acid, conferring exceptional viscosity, thermal stability, and chemical reactivity.',
      'Through our established sourcing network in Gujarat—the heartland of the Indian castor trade—DHRIVAA assists international industrial manufacturers in sourcing commercial, First Special Grade (FSG), and tailored technical grades. We coordinate directly with modern refining plants to satisfy rigorous industrial specifications and ensure seamless bulk logistics.'
    ],
    image: '/images/castor-oil.jpg',
    alt: 'Pure golden castor oil in elegant glassware surrounded by castor seeds',
    applicationsHeading: 'Key Industrial & Technical Applications',
    applications: [
      'High-performance industrial lubricants, hydraulic fluids, and greases',
      'Polyurethane resins, coatings, adhesives, and architectural paints',
      'Cosmetics, personal care formulations, and surfactant synthesis',
      'Specialty chemical intermediates, sebacic acid, and plasticizers'
    ],
    specificationsNotice: 'Product specifications are available upon request depending on required industrial grade (Commercial, FSG, Pale Pressed, or technical grade).',
    specifications: [
      { parameter: 'Product Type', value: 'Industrial Castor Oil (Non-Edible)' },
      { parameter: 'Origin', value: 'Gujarat, India' },
      { parameter: 'Common Grades Available', value: 'First Special Grade (FSG), Commercial Grade, Pale Pressed' },
      { parameter: 'Technical Specifications', value: 'Product specifications are available upon request' },
      { parameter: 'Bulk Packaging', value: 'Flexitanks (21.5 - 24 MT) / 200L Steel Drums / 1000L IBCs' },
      { parameter: 'Port of Loading', value: 'Mundra Port / Kandla Port, Gujarat' },
      { parameter: 'Shipment Terms', value: 'FOB Indian Ports / CFR / CIF International Seaports' }
    ],
    packagingOptions: [
      'Single-Trip 20ft Container Flexitanks (21.5 MT to 24 MT capacity) with heating pads if requested',
      'New 200-Liter Epoxy-Lined or Mild Steel ISO Drums (80 drums per 20ft FCL)',
      '1,000-Liter Heavy-Duty Intermediate Bulk Containers (IBC Totes)',
      'Secure seals and inspection tags coordinated at the crushing plant prior to gate dispatch'
    ],
    sourcingCapabilities: [
      'Coordination with ISO-certified castor oil refineries and expeller units in Gujarat',
      'Tailored procurement according to buyer-stipulated color Gardner, acid value, and moisture thresholds',
      'Experienced oversight of container loading and bulk flexitank installation',
      'Complete documentation alignment with Middle Eastern and global chemical trade regulations'
    ],
    qualityDocumentationPoints: [
      'Detailed Certificate of Analysis (COA) per production batch',
      'Material Safety Data Sheet (MSDS) compliant with GHS standards',
      'Pre-shipment inspection reports by recognized independent inspection bodies (SGS, Intertek) upon buyer instruction',
      'Bill of Lading, Certificate of Origin, and Commercial Invoice package'
    ],
    faqs: [
      {
        question: 'Which grades of Castor Oil does DHRIVAA help source?',
        answer: 'We coordinate sourcing for First Special Grade (FSG), Commercial Grade, Pale Pressed, and specific technical specifications based on buyer requirements.'
      },
      {
        question: 'How is Castor Oil packaged for international sea transit?',
        answer: 'Bulk orders are typically loaded into 24,000-liter Flexitanks inside standard 20ft ocean containers. We also coordinate shipments in 200L brand-new steel drums and 1,000L IBC containers.'
      },
      {
        question: 'How do you ensure oil quality and chemical purity?',
        answer: 'We coordinate testing with accredited laboratories to confirm color, viscosity, moisture, acid value, and iodine value prior to shipment, ensuring strict compliance with contractual agreements.'
      },
      {
        question: 'What is the minimum order quantity for Castor Oil sourcing?',
        answer: 'Standard international procurement is coordinated on a Full Container Load (FCL) basis—approximately 16 to 18 MT in drums or 21.5 to 24 MT in flexitanks.'
      }
    ],
    seo: {
      title: 'Castor Oil Sourcing & Bulk Procurement India | DHRIVAA',
      description: 'Source industrial and First Special Grade (FSG) Castor Oil from Gujarat, India. Dedicated procurement partner for buyers in UAE, Saudi Arabia, and international chemical markets.',
      keywords: ['Castor Oil Supplier India', 'Bulk Castor Oil Supplier UAE', 'Castor Oil Sourcing India', 'First Special Grade Castor Oil Exporters']
    }
  }
];
