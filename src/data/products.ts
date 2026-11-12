export interface ProductSpecification {
  parameter: string;
  value: string;
  testMethod?: string;
  notes?: string;
}

export interface CompositionComponent {
  component: string;
  typicalRange: string;
  significance: string;
}

export interface StorageGuideline {
  aspect: string;
  recommendation: string;
}

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
  applications: {
    title: string;
    description: string;
    industries: string[];
  }[];
  compositionNotice: string;
  composition: CompositionComponent[];
  specificationsNotice: string;
  specifications: ProductSpecification[];
  packagingOptions: {
    title: string;
    description: string;
    suitability: string;
  }[];
  storageGuidelines: StorageGuideline[];
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
    shortDescription: 'A high-protein agricultural processing by-product sourced from western India according to buyer specifications for livestock, dairy, and poultry feed formulation.',
    heroDescription: 'Nutrient-rich protein meal derived from Brassica napus processing, sourced across verified solvent extraction units in Gujarat and western India for international animal nutrition blenders.',
    fullOverview: [
      'Rapeseed meal is an established agricultural processing by-product generated following the solvent extraction of oil from Indian mustard and rapeseed. Sourced directly from key agro-processing clusters in Gujarat and western India, it serves as a cost-effective, high-performing protein and essential amino acid constituent for commercial feed formulation.',
      'DHRIVAA operates as an independent sourcing and procurement coordinator for international buyers, particularly feed compounders and commercial importers in the UAE and wider Middle East. We liaise directly with vetted solvent extraction mills to match buyer-stipulated parameters for protein content, moisture thresholds, granulation, and container packaging.',
      'By focusing strictly on buyer representation, DHRIVAA ensures rigorous pre-shipment sampling, laboratory analysis coordination, and container inspection at Mundra and Kandla ports, delivering verifiable consistency and total supply chain transparency without trading markups on factory ownership.'
    ],
    image: '/images/rapeseed-meal.jpg',
    alt: 'High-quality golden-yellow rapeseed meal protein powder with canola flowers',
    applicationsHeading: 'Commercial & Animal Nutrition Applications',
    applications: [
      {
        title: 'Cattle & Dairy Feed Blends',
        description: 'Serves as an economical source of crude protein and bypass protein, supporting lactation yield and balanced ruminal nitrogen in commercial dairy cattle rations.',
        industries: ['Dairy Farming', 'Commercial Feed Mills', 'Ruminant Nutrition']
      },
      {
        title: 'Poultry & Layer Rations',
        description: 'Utilized in formulated broiler and layer feeds to supplement amino acids (methionine and cystine) when properly balanced with target energy profiles.',
        industries: ['Poultry Integrators', 'Layer Farms', 'Feed Premix Manufacturing']
      },
      {
        title: 'Aquafeed Formulations',
        description: 'Integrated into commercial aquafeed pellets for freshwater and marine aquaculture as a sustainable alternative to marine protein meals.',
        industries: ['Aquaculture', 'Fish Feed Processing', 'Shrimp Farming']
      },
      {
        title: 'Organic Soil Conditioning & Composting',
        description: 'Used as an organic nitrogenous substrate for soil amendment, enriched horticultural potting mixes, and specialized commercial compost blenders.',
        industries: ['Organic Agriculture', 'Commercial Horticulture', 'Fertilizer Blending']
      }
    ],
    compositionNotice: 'Typical compositional profile for solvent-extracted Indian rapeseed meal. Precise batch values are confirmed through independent Certificate of Analysis (COA) per contract.',
    composition: [
      {
        component: 'Crude Protein (Dry Basis)',
        typicalRange: '36.0% – 38.0% min',
        significance: 'Primary amino acid source with balanced methionine and cysteine'
      },
      {
        component: 'Crude Fiber',
        typicalRange: '9.0% – 12.0% max',
        significance: 'Beneficial dietary fiber supporting rumen digestion in cattle'
      },
      {
        component: 'Moisture Content',
        typicalRange: '10.0% max',
        significance: 'Critical threshold to prevent microbial heating during ocean transit'
      },
      {
        component: 'Sand & Silica (Insoluble Ash)',
        typicalRange: '1.5% – 2.5% max',
        significance: 'Indicator of efficient seed cleaning and processing hygiene'
      },
      {
        component: 'Oil & Fat Content',
        typicalRange: '1.0% – 1.5% max',
        significance: 'Reflects thoroughness of the solvent extraction cycle'
      }
    ],
    specificationsNotice: 'Product specifications are coordinated against buyer-contracted requirements. Certified laboratory test reports (COA) are provided prior to vessel dispatch.',
    specifications: [
      { parameter: 'Commodity Type', value: 'De-oiled Rapeseed Meal / Cake (Solvent Extracted)', notes: 'Non-GMO Indian origin Brassica napus / juncea' },
      { parameter: 'Origin', value: 'Gujarat & Western India Agro Corridor', notes: 'Sourced proximate to Mundra & Kandla seaports' },
      { parameter: 'Processing Method', value: 'Continuous Solvent Extraction', notes: 'Extracted with food-grade hexane solvent' },
      { parameter: 'Form & Appearance', value: 'Coarse Meal / Granular Powder / Pellets', notes: 'Per contractual buyer specification' },
      { parameter: 'Color & Odor', value: 'Light Brown to Yellowish-Brown, Characteristic Agro Odor', notes: 'Free from sour, burnt, or rancid odor' },
      { parameter: 'Contractual Parameters', value: 'Coordinated as per buyer target parameters', notes: 'Verified via accredited lab pre-shipment analysis' },
      { parameter: 'Packaging Formats', value: '50 kg PP Bags / 1,000 kg Jumbo Bags / Container Bulk', notes: 'UV-stabilized export woven grade' },
      { parameter: 'Loading Seaports', value: 'Mundra Port / Kandla Port, Gujarat', notes: 'Direct maritime connection to Arabian Gulf' },
      { parameter: 'Incoterms Available', value: 'FOB Indian Ports / CFR / CIF International Seaports', notes: 'Jebel Ali, Dammam, Sohar, Hamad, Khalifa' }
    ],
    packagingOptions: [
      {
        title: '50 kg Polypropylene (PP) Woven Bags',
        description: 'Double-stitched, heavy-duty export grade PP woven bags with optional inner polyethylene liner to mitigate ocean moisture absorption.',
        suitability: 'Standard manual handling, distributor re-sale, and localized warehouse storage.'
      },
      {
        title: '1,000 kg (1 MT) Industrial Jumbo Bags',
        description: 'UV-stabilized polypropylene Flexible Intermediate Bulk Containers (FIBC) with four lifting loops, top filling duffle, and discharge spout.',
        suitability: 'Automated feed mill batching, silo discharge, and crane-assisted vessel handling.'
      },
      {
        title: 'Bulk Sea Container Liners (20ft FCL)',
        description: 'Food-grade polyethylene container liners fitted directly into standard 20ft ocean containers for maximum metric tonnage per freight unit.',
        suitability: 'High-volume commercial feed processors with pneumatic or conveyor unloader facilities.'
      }
    ],
    storageGuidelines: [
      { aspect: 'Warehouse Climate', recommendation: 'Store in dry, well-ventilated, weather-tight warehouses away from direct moisture, steam, and intense humidity.' },
      { aspect: 'Pallet Stacking', recommendation: 'Keep bags on dry wooden or plastic pallets raised at least 15 cm above concrete floor to avoid condensation transfer.' },
      { aspect: 'Stack Height Limits', recommendation: 'Limit bag stacks to a maximum of 10 to 12 layers to prevent bottom bag compaction and heat retention.' },
      { aspect: 'Maritime Container Stuffing', recommendation: 'Ensure ocean containers are desiccated and fitted with kraft paper or moisture traps during summer Gulf sailings.' }
    ],
    sourcingCapabilities: [
      'Direct coordination with solvent extraction facilities in Gujarat, Rajasthan, and Madhya Pradesh',
      'Strict adherence to buyer-specified physical, granulation, and chemical thresholds',
      'Full Container Load (FCL) consolidation (approx. 20–24 MT per 20ft container)',
      'Transparent mill assessment, batch tracking, and pre-loading photographic verification'
    ],
    qualityDocumentationPoints: [
      'Batch-wise Certificate of Analysis (COA) from ISO/IEC 17025 accredited laboratories',
      'Official Phytosanitary Certificate issued by the Plant Quarantine Organization of India',
      'Certificate of Origin certified by authorized Indian Export Promotion Councils / Chamber of Commerce',
      'Commercial Invoice, Ocean Bill of Lading, Weight Certificate, and Packing List',
      'Independent surveyor inspection (SGS, Bureau Veritas, Intertek) coordinated upon buyer request'
    ],
    faqs: [
      {
        question: 'What is DHRIVAA’s operational role in sourcing Indian Rapeseed Meal?',
        answer: 'DHRIVAA acts as your dedicated on-the-ground procurement and quality coordinator in India. We do not manufacture; rather, we audit and select reputable solvent extraction plants, negotiate technical specifications to match your feed formulation, coordinate pre-shipment sampling, and supervise export documentation through western Indian ports.'
      },
      {
        question: 'Can buyers specify custom crude protein or moisture limits?',
        answer: 'Yes. Product specifications are established based on the buyer\'s contractual mandate. We negotiate with verified mills to secure lots matching your required protein, moisture, and silica thresholds, confirmed by accredited pre-shipment testing.'
      },
      {
        question: 'What transit times can Middle Eastern feed mills expect from Gujarat?',
        answer: 'Gujarat seaports (Mundra and Kandla) offer the shortest maritime sailing routes between India and the Arabian Gulf. Typical direct ocean transit to Jebel Ali (UAE) is approximately 3 to 5 days, and 5 to 8 days to Dammam (Saudi Arabia) or Sohar (Oman).'
      },
      {
        question: 'How is batch quality verified before container loading?',
        answer: 'Prior to dispatch from the solvent extraction plant, composite lot samples are drawn and tested at accredited laboratories for protein, moisture, fiber, and ash. Independent third-party inspection agencies (e.g., SGS, Bureau Veritas) can also be engaged per buyer instructions.'
      },
      {
        question: 'What are the standard order quantities for export shipments?',
        answer: 'International export sourcing is coordinated on a Full Container Load (FCL) basis. A standard 20-foot ocean container typically accommodates 20 to 22 MT in 50 kg bags, or up to 24 MT with specialized bulk container liners.'
      }
    ],
    seo: {
      title: 'Rapeseed Meal Sourcing & Procurement India | DHRIVAA',
      description: 'Source high-protein Indian Rapeseed Meal (De-oiled Brassica napus cake) directly from Gujarat. Dedicated procurement partner for animal feed mills in UAE, Saudi Arabia, and the Middle East.',
      keywords: ['Rapeseed Meal Supplier India', 'Indian Rapeseed Meal Exporter', 'Rapeseed Meal UAE Feed Mills', 'De-oiled Rapeseed Cake Sourcing Gujarat', 'Animal Feed Protein India']
    }
  },
  {
    id: 'castorseed-meal',
    slug: 'castorseed-meal',
    name: 'Castorseed Meal',
    eyebrow: 'ORGANIC BIO-FERTILIZER · SOIL CONDITIONER',
    shortDescription: 'An organic plant-derived agricultural commodity sourced directly from Gujarat—the global castor capital—for high-value organic fertilization and soil conditioning.',
    heroDescription: 'Organic nutrient-rich residue from Ricinus communis processing, sourced from primary crushers in Gujarat for international fertilizer blenders, landscaping, and commercial horticulture.',
    fullOverview: [
      'Castorseed meal (also commonly designated as castor cake or de-oiled castor meal) is the nutrient-dense solid organic residue remaining after commercial oil extraction from castor seeds. As Gujarat produces over 70% of the world’s castor harvest, the region features the world’s highest concentration of specialized castor processing and solvent extraction mills.',
      'DHRIVAA connects international agricultural distributors, commercial landscapers, organic fertilizer manufacturers, and date palm plantations across the Middle East with verified crushing units in Gujarat. Sourced primarily as an exceptional, slow-release natural organic fertilizer, it naturally enriches soil with nitrogen, phosphorus, potassium, and vital organic matter.',
      'In addition to high nutritional value, castorseed meal contains natural phytochemicals that act as an organic soil deterrent against nematodes, white grubs, and subterranean pests, making it a prized soil conditioner for intensive irrigation agriculture and golf courses in arid and desert climates.'
    ],
    image: '/images/castorseed-meal.jpg',
    alt: 'Rich brown organic castorseed meal and castor seeds on natural stone',
    applicationsHeading: 'Key Commercial & Agricultural Applications',
    applications: [
      {
        title: 'Commercial Open-Field Agriculture & Orchards',
        description: 'Applied as a base soil conditioner before planting vegetables, fruit orchards, and cereal crops, promoting root elongation and biological microbial health.',
        industries: ['Commercial Farming', 'Fruit Orchards', 'Soil Conditioning']
      },
      {
        title: 'Date Palm & Tropical Plantation Nutrition',
        description: 'Widely specified across Gulf date palm plantations to build organic soil structure, retain soil moisture in sandy terrains, and provide gradual nitrogen.',
        industries: ['Date Palm Plantations', 'Arid Zone Forestry', 'Desert Greenery']
      },
      {
        title: 'Turf Care, Golf Courses & Urban Landscaping',
        description: 'Serves as an organic slow-release turf fertilizer that enriches grass root zones while naturally suppressing destructive subterranean turf pests.',
        industries: ['Golf Course Maintenance', 'Municipal Landscaping', 'Sports Turf Management']
      },
      {
        title: 'Organic Fertilizer Blending & Pelleting',
        description: 'Acts as a premier nitrogenous organic carrier substrate in formulated granular bio-fertilizers, humic blends, and compost enrichers.',
        industries: ['Fertilizer Blenders', 'Bio-fertilizer Manufacturers', 'Compost Producers']
      }
    ],
    compositionNotice: 'Typical organic nutrient parameters for solvent-extracted Indian castorseed meal. Final lot parameters verified via laboratory testing prior to export.',
    composition: [
      {
        component: 'Organic Nitrogen (N)',
        typicalRange: '4.0% – 5.5% min',
        significance: 'Slow-release natural nitrogen that does not leach rapidly into groundwater'
      },
      {
        component: 'Phosphorus (as P2O5)',
        typicalRange: '1.5% – 2.0% min',
        significance: 'Supports robust root initiation and cellular energy transfer'
      },
      {
        component: 'Potassium (as K2O)',
        typicalRange: '1.0% – 1.5% min',
        significance: 'Enhances plant drought resilience and cellular osmotic balance'
      },
      {
        component: 'Organic Matter Content',
        typicalRange: '80.0% – 85.0% min',
        significance: 'Improves water-holding capacity and cation exchange in sandy soils'
      },
      {
        component: 'Moisture Content',
        typicalRange: '10.0% – 12.0% max',
        significance: 'Safeguards storage stability and prevents anaerobic mold growth'
      }
    ],
    specificationsNotice: 'Product specifications are coordinated against buyer-contracted requirements. Certified laboratory test reports (COA) are provided prior to vessel dispatch.',
    specifications: [
      { parameter: 'Commodity Type', value: 'Castorseed Meal / Castor Cake (De-oiled)', notes: '100% plant-derived natural agricultural residue' },
      { parameter: 'Regional Origin', value: 'Gujarat, India (Primary Global Production Hub)', notes: 'Unmatched processing density and volume continuity' },
      { parameter: 'Physical Form', value: 'Meal / Coarse Granules / Pellets', notes: 'Configured according to buyer application needs' },
      { parameter: 'Color & Texture', value: 'Rich Brown to Dark Brown Granular Meal', notes: 'Uniform consistency free from foreign stone contamination' },
      { parameter: 'Nutrient Verification', value: 'NPK profile verified via accredited COA', notes: 'Available on request per contract lot' },
      { parameter: 'Standard Packaging', value: '50 kg PP Woven Bags / 1,000 kg Jumbo Bags', notes: 'Double stitched with moisture protective liners' },
      { parameter: 'Loading Seaports', value: 'Mundra Port / Kandla Port, Gujarat', notes: 'Optimized ocean freight routing to GCC seaports' },
      { parameter: 'Shipment Terms', value: 'FOB Indian Ports / CFR / CIF International Seaports', notes: 'Jebel Ali, Dammam, Sohar, Hamad, Khalifa' }
    ],
    packagingOptions: [
      {
        title: '50 kg Polypropylene (PP) Export Bags',
        description: 'High-tensile woven polypropylene bags with inner polyethylene barrier to protect against atmospheric humidity in maritime transit.',
        suitability: 'Direct retail distribution, farm-level manual handling, and distributor storage.'
      },
      {
        title: '1,000 kg Heavy-Duty Jumbo Bags (FIBC)',
        description: 'Industrial-grade UV-treated FIBC bulk bags with reinforced corner lifting loops and moisture-resistant lamination.',
        suitability: 'Large-scale plantation mechanized application and commercial bio-fertilizer pelleting plants.'
      },
      {
        title: 'Custom Brand Stenciling & Private Labeling',
        description: 'Coordination of custom bag artwork, multilingual labeling (English & Arabic), and regulatory import disclosures.',
        suitability: 'Established fertilizer brands requiring ready-to-market packaging compliance.'
      }
    ],
    storageGuidelines: [
      { aspect: 'Storage Environment', recommendation: 'Store under dry, shaded, and well-ventilated warehouse roofs protected from precipitation.' },
      { aspect: 'Moisture Protection', recommendation: 'Keep bags sealed until application; castor meal is hygroscopic and absorbs ambient moisture in tropical humidity.' },
      { aspect: 'Segregation from Feeds', recommendation: 'Keep distinctly segregated from animal feed storage areas; castor meal is strictly for agricultural soil application.' },
      { aspect: 'Stack Stability', recommendation: 'Stack bags in alternating interlocking rows up to 10 layers on dry pallets to maintain ventilation channels.' }
    ],
    sourcingCapabilities: [
      'Direct strategic proximity to primary castor seed crushing mills in north and central Gujarat',
      'Procurement coordination based on buyer-specific organic nitrogen and moisture parameters',
      'Rigorous monitoring of container stuffing to protect against moisture absorption',
      'End-to-end handling of export documentation and regional customs compliance'
    ],
    qualityDocumentationPoints: [
      'Manufacturer Certificate of Analysis (COA) with each production lot',
      'Authorized Phytosanitary Certificate issued prior to port departure',
      'Certificate of Origin certified by the Chamber of Commerce',
      'Bill of Lading, Commercial Invoice, Packing List, and Fumigation Certificate',
      'Pre-shipment sampling and testing by accredited independent laboratories on request'
    ],
    faqs: [
      {
        question: 'Why is Gujarat the global epicenter for Castorseed Meal sourcing?',
        answer: 'Gujarat produces approximately 70% of the world’s castor crop due to its ideal arid and semi-arid agro-climatic conditions. This gives DHRIVAA unmatched direct access to primary crushing mills, consistent year-round supply, and highly competitive port logistics via Mundra and Kandla.'
      },
      {
        question: 'Is Castorseed Meal safe for crops and date palm plantations?',
        answer: 'Yes, it is one of the most effective natural bio-fertilizers available. It breaks down gradually in the soil, supplying slow-release nitrogen, phosphorus, and organic carbon without burning tender plant roots or causing chemical salt build-up.'
      },
      {
        question: 'Can Castorseed Meal be used as livestock feed?',
        answer: 'No. Castorseed meal is exclusively intended as an organic soil conditioner and bio-fertilizer. Due to naturally occurring plant proteins (ricin) present in raw castor seed residues, it must not be used in animal or poultry nutrition.'
      },
      {
        question: 'What packaging is recommended for ocean transit to Gulf climates?',
        answer: 'We coordinate double-stitched polypropylene bags with inner polyethylene moisture liners or heavy-duty jumbo bags to safeguard product dryness during ocean transit and warehouse storage in high-humidity climates.'
      },
      {
        question: 'How can buyers obtain detailed laboratory specifications?',
        answer: 'Product specifications are available upon request based on your contract volume and target application. Our team will coordinate with verified suppliers to confirm technical suitability and provide an official COA.'
      }
    ],
    seo: {
      title: 'Castorseed Meal Sourcing & Procurement Gujarat | DHRIVAA',
      description: 'Procure high-quality Castorseed Meal (Castor Cake) directly from Gujarat, India. Dedicated procurement partner for organic fertilizer and agricultural buyers in UAE and the Middle East.',
      keywords: ['Castorseed Meal Supplier India', 'Castor Seed Meal Sourcing', 'Castor Meal Exporter India', 'Organic Castor Cake UAE', 'Natural NPK Fertilizer India']
    }
  },
  {
    id: 'castor-oil',
    slug: 'castor-oil',
    name: 'Castor Oil',
    eyebrow: 'INDUSTRIAL VEGETABLE OIL · RENEWABLE CHEMICAL',
    shortDescription: 'A high-purity industrial vegetable oil sourced across vetted crushing and refining facilities in Gujarat for international chemical, lubricant, polyurethane, and manufacturing industries.',
    heroDescription: 'Versatile non-edible vegetable oil rich in unique ricinoleic acid, sourced across verified crushing and refining plants in Gujarat for international industrial buyers in the UAE, GCC, and global markets.',
    fullOverview: [
      'Castor oil is an extraordinary non-edible industrial vegetable oil extracted from the seeds of Ricinus communis. It occupies a unique position in global oleochemistry due to its naturally high concentration (~85%–90%) of ricinoleic fatty acid, which imparts singular viscosity, oxidative stability, hydroxyl functionality, and high-temperature performance.',
      'Through our established sourcing network in Gujarat—the undisputed global heartland of the castor trade—DHRIVAA assists international chemical formulators, lubricant blenders, and industrial manufacturers in sourcing First Special Grade (FSG), Commercial Grade, Pale Pressed, and tailored technical oil grades.',
      'We coordinate directly with modern refining plants to enforce rigorous chemical standards—including strict controls on Gardner color, acid value, moisture, and iodine value—while overseeing specialized bulk container flexitank installations and new ISO drum loading.'
    ],
    image: '/images/castor-oil.jpg',
    alt: 'Pure golden castor oil in elegant glassware surrounded by castor seeds',
    applicationsHeading: 'Key Industrial & Technical Applications',
    applications: [
      {
        title: 'High-Performance Lubricants & Hydraulic Fluids',
        description: 'Its high viscosity index and shear stability make castor oil an exceptional base for specialty two-stroke racing oils, aviation greases, and heavy machinery lubricants.',
        industries: ['Lubricant Blenders', 'Aviation Greases', 'Industrial Machinery']
      },
      {
        title: 'Polyurethane Resins, Coatings & Adhesives',
        description: 'Natural hydroxyl functionality enables direct reaction into polyurethane foams, elastomer casting, architectural protective coatings, and bio-based adhesives.',
        industries: ['Paints & Coatings', 'Polyurethane Foams', 'Industrial Adhesives']
      },
      {
        title: 'Cosmetics, Personal Care & Surfactant Synthesis',
        description: 'Hydrogenated and refined pale grades serve as premium emollients, lipstick bases, and surfactant intermediates requiring low color and high clarity.',
        industries: ['Cosmetics Manufacturing', 'Personal Care Formulations', 'Surfactants']
      },
      {
        title: 'Specialty Chemical Intermediates & Polymers',
        description: 'Key raw material for synthesizing sebacic acid, undecylenic acid, nylon-11 engineering polymers, and specialty plasticizers.',
        industries: ['Specialty Oleochemicals', 'Polymer Synthesis', 'Industrial Plasticizers']
      }
    ],
    compositionNotice: 'Typical chemical profile for refined Indian First Special Grade (FSG) Castor Oil. Commercial and technical grades are coordinated according to buyer contract specifications.',
    composition: [
      {
        component: 'Ricinoleic Acid Content',
        typicalRange: '85.0% – 90.0% min',
        significance: 'Primary hydroxyl fatty acid conferring unique reactivity and lubrication'
      },
      {
        component: 'Acid Value',
        typicalRange: '2.0 max (FSG Grade)',
        significance: 'Measure of free fatty acids; critical for chemical and lubricant stability'
      },
      {
        component: 'Color (Lovibond 5¼" Cell)',
        typicalRange: 'Y 20.0, R 2.0 max (FSG)',
        significance: 'Key clarity benchmark for resins, paints, and cosmetic applications'
      },
      {
        component: 'Moisture & Volatile Matter',
        typicalRange: '0.25% max',
        significance: 'Essential threshold to prevent hydrolysis during storage'
      },
      {
        component: 'Saponification Value',
        typicalRange: '176 – 186 mg KOH/g',
        significance: 'Standard index for surfactant synthesis and soap manufacturing'
      }
    ],
    specificationsNotice: 'Product specifications are coordinated against buyer-contracted requirements. Certified laboratory test reports (COA) are provided prior to vessel dispatch.',
    specifications: [
      { parameter: 'Product Classification', value: 'Industrial Vegetable Oil (Non-Edible)', notes: 'Natural renewable oleochemical feedstock' },
      { parameter: 'Regional Origin', value: 'Gujarat, India (Primary Global Refining Center)', notes: 'Sourced from certified expeller & refining units' },
      { parameter: 'Standard Commercial Grades', value: 'First Special Grade (FSG), Commercial Grade, Pale Pressed', notes: 'Tailored grades coordinated on request' },
      { parameter: 'Physical Appearance', value: 'Clear, Viscous Pale Yellow Liquid', notes: 'Free from suspended matter and sediment' },
      { parameter: 'Technical Specifications', value: 'Coordinated as per buyer contract specifications', notes: 'Full COA provided for each dispatch lot' },
      { parameter: 'Bulk Packaging', value: 'Flexitanks (21.5 - 24 MT) / 200L Steel Drums / 1000L IBCs', notes: 'Brand-new food/chemical grade packaging' },
      { parameter: 'Port of Loading', value: 'Mundra Port / Kandla Port, Gujarat', notes: 'Rapid sailing to Arabian Gulf & international hubs' },
      { parameter: 'Shipment Terms', value: 'FOB Indian Ports / CFR / CIF International Seaports', notes: 'Jebel Ali, Dammam, Sohar, Hamad, Khalifa' }
    ],
    packagingOptions: [
      {
        title: 'Single-Trip Bulk Container Flexitanks (21.5 MT to 24 MT)',
        description: 'Multi-layer food/chemical-grade polyethylene flexitanks installed inside standard 20ft ocean containers with bulkheads and optional bottom discharge valves.',
        suitability: 'High-volume industrial manufacturing plants with bulk storage tank infrastructure.'
      },
      {
        title: 'New 200-Liter Epoxy-Lined or Mild Steel ISO Drums',
        description: 'Brand-new international standard 200L steel drums (tight-head, 2-inch bungs) loaded 80 drums per 20ft container (approx. 16 MT to 17.6 MT net).',
        suitability: 'Chemical formulators, lubricant blenders, and intermediate distributors without bulk tanks.'
      },
      {
        title: '1,000-Liter Intermediate Bulk Containers (IBC Totes)',
        description: 'Heavy-duty composite IBC containers with galvanized steel tubular cage, bottom discharge ball valve, and pallet base (18 to 20 IBCs per 20ft container).',
        suitability: 'Precision batch dispensing, forklift maneuvering, and medium-scale chemical operations.'
      }
    ],
    storageGuidelines: [
      { aspect: 'Storage Temperature', recommendation: 'Store between 15°C and 30°C in climate-stable, shaded facilities away from open flames and strong oxidizers.' },
      { aspect: 'Atmospheric Sealing', recommendation: 'Maintain tight drum bungs and tank valves closed; prolonged exposure to air can cause oxidation and darkening.' },
      { aspect: 'Viscosity Management', recommendation: 'Castor oil thickens in cold conditions; if stored in ambient temperatures below 10°C, gentle heating may be applied.' },
      { aspect: 'Tank Materials', recommendation: 'Stainless steel (304/316) or epoxy-lined mild steel storage tanks are recommended to preserve purity.' }
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
      'Bill of Lading, Certificate of Origin, Packing List, and Commercial Invoice package'
    ],
    faqs: [
      {
        question: 'Which commercial grades of Castor Oil does DHRIVAA coordinate?',
        answer: 'We coordinate sourcing for First Special Grade (FSG), Commercial Grade, Pale Pressed, and customized technical grades based on buyer parameters for color, acidity, and moisture.'
      },
      {
        question: 'What packaging is most cost-effective for shipping bulk castor oil to the UAE?',
        answer: 'For industrial volumes exceeding 20 MT, 24,000-liter Flexitanks inside standard 20-foot ocean containers provide the lowest packaging cost per metric ton and maximize container payload.'
      },
      {
        question: 'How do you verify chemical purity and acid value before export?',
        answer: 'Every export batch is sampled and tested at accredited laboratories for key oleochemical markers including acid value, saponification, moisture, and Gardner color. We supply certified test results prior to shipment authorization.'
      },
      {
        question: 'What is the standard minimum order quantity for Castor Oil procurement?',
        answer: 'International procurement is coordinated on a Full Container Load (FCL) basis—approximately 16 MT in 200L drums, 18 MT in IBC totes, or 21.5 to 24 MT in container flexitanks.'
      },
      {
        question: 'How does DHRIVAA guarantee prompt ocean shipment to Middle Eastern ports?',
        answer: 'Our sourcing operations in Gujarat are situated within hours of Mundra and Kandla ports. Both ports offer frequent direct maritime container services to Jebel Ali, Dammam, and other GCC hubs with typical sailing times of 3 to 7 days.'
      }
    ],
    seo: {
      title: 'Castor Oil Sourcing & Bulk Procurement India | DHRIVAA',
      description: 'Source industrial and First Special Grade (FSG) Castor Oil from Gujarat, India. Dedicated procurement partner for buyers in UAE, Saudi Arabia, and international chemical markets.',
      keywords: ['Castor Oil Supplier India', 'Bulk Castor Oil Supplier UAE', 'Castor Oil Sourcing India', 'First Special Grade Castor Oil Exporters', 'Industrial Castor Oil Middle East']
    }
  }
];
