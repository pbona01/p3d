import { Product } from '../types/products';

export const OFFICIAL_WHATSAPP_NUMBER = "+2347070276427";
export const OFFICIAL_WHATSAPP_DISPLAY = "+234 707 027 6427";
export const OFFICIAL_EMAIL = "hello@aplund.com";
export const OFFICIAL_LOCATION = "Lekki-Epe Expressway, Lekki, Lagos, Nigeria";

export const productsData: Product[] = [
  // --- MIRRORS ---
  {
    id: 'aura-mirror-01',
    slug: 'ultimate-aura-mirror',
    name: 'The Ultimate Aura Mirror',
    category: 'mirrors',
    categoryLabel: 'Custom Mirrors',
    shortDescription: 'Full-length interactive lighting mirror with dynamic halo glow projection for bedrooms and dressing rooms.',
    fullDescription: 'Individually shaped and polished in our Lagos workshop, our premium Aura Mirror creates an unrivaled aesthetic atmosphere. Equipped with adjustable ambient LED backlighting, touch sensory power, and ultra-clarity HD distortion-free glass.',
    price: 95000,
    priceLabel: 'Starting from ₦95,000',
    currency: 'NGN',
    images: [
      'https://i.postimg.cc/sgt79Q5s/goku-mirror.jpg',
      'https://i.postimg.cc/4xKp9b70/Whats-App-Image-2026-08-09-at-9-14-44-AM.jpg',
      'https://i.postimg.cc/xdMHsfPq/Whats-App-Image-2026-08-09-at-9-14-45-AM.jpg',
      'https://i.postimg.cc/DzLsCvck/bugs-bunny.jpg',
      'https://i.postimg.cc/DwtLdJ1K/goats.jpg',
      'https://i.postimg.cc/0yLDdM7k/goats-2.jpg'
    ],
    featured: true,
    customMade: true,
    leadTime: '5 - 7 business days',
    deliveryInfo: 'Safe wood-crate shipping across Nigeria & Ghana with optional Lagos installation',
    installationAvailable: true,
    specifications: [
      { label: 'Glass Type', value: '5mm HD Copper-Free Silver Mirror' },
      { label: 'Backlighting', value: '3-Tone Smart LED (Warm, Neutral, Cool Daylight)' },
      { label: 'Frame Finish', value: 'Brushed Gold Aluminium / Matte Black Rim' },
      { label: 'Standard Dimensions', value: '180cm x 80cm (Custom sizes available)' },
      { label: 'Power Source', value: 'Standard Wall Plug-in or Hardwired' }
    ],
    features: [
      'Touch-sensor dimmer control',
      'Halo ambient backlighting',
      'Shatter-proof protective backing',
      'Custom width & height fitting available'
    ],
    options: [
      {
        name: 'Lighting Style',
        choices: [
          { label: '3-Tone Touch LED', priceModifier: 0, description: 'Warm, Cool, and Daylight modes' },
          { label: 'RGB Dynamic Halo Glow', priceModifier: 15000, description: 'Multi-color ambient room lighting' }
        ]
      },
      {
        name: 'Frame Color',
        choices: [
          { label: 'Signature Gold Trim', priceModifier: 0 },
          { label: 'Matte Obsidian Black', priceModifier: 0 },
          { label: 'Frameless Polished Edge', priceModifier: -5000 }
        ]
      },
      {
        name: 'Size Option',
        choices: [
          { label: 'Standard Full Length (180cm x 80cm)', priceModifier: 0 },
          { label: 'Grand Statement (200cm x 100cm)', priceModifier: 35000 },
          { label: 'Custom Dimension (Provide in note)', priceModifier: 0 }
        ]
      }
    ],
    relatedProductIds: ['instagram-mirror-02', 'snapchat-mirror-03', 'wavy-mirror-05']
  },
  {
    id: 'instagram-mirror-02',
    slug: 'signature-instagram-mirror',
    name: 'Signature Instagram Smart Mirror',
    category: 'mirrors',
    categoryLabel: 'Custom Mirrors',
    shortDescription: 'Designed with ultra-bright edge lighting, engineered for selfie content creation and modern closets.',
    fullDescription: 'Crafted with dynamic edge illumination, this high-fidelity Instagram Mirror elevates any room and guarantees flawless lighting for outfit checks and video creation.',
    price: 85000,
    priceLabel: 'Starting from ₦85,000',
    currency: 'NGN',
    images: [
      'https://i.postimg.cc/d04n3x4h/f8e41194-bf0b-4826-8a41-4076e72b6095.jpg',
      'https://i.postimg.cc/vB2PqNnm/a5164097-dd7b-4477-ae33-c34845983535.jpg',
      'https://i.postimg.cc/ZKBnhf02/Screenshot-20260522-142551-Tik-Tok.jpg'
    ],
    featured: true,
    customMade: true,
    leadTime: '4 - 6 business days',
    deliveryInfo: 'Carefully packaged and delivered in Lagos & nationwide',
    installationAvailable: true,
    specifications: [
      { label: 'Glass', value: 'High-clarity HD anti-fog mirror' },
      { label: 'Lighting', value: 'High CRI 95+ Edge-lit LED strip' },
      { label: 'Mounting', value: 'Wall hanging bracket & floor standing lean feet' }
    ],
    features: [
      'Anti-fog heating pad built-in',
      'High color rendering for natural makeup lighting',
      'Sleek ultra-thin profile'
    ],
    options: [
      {
        name: 'Size Option',
        choices: [
          { label: 'Compact (160cm x 60cm)', priceModifier: -10000 },
          { label: 'Standard (180cm x 75cm)', priceModifier: 0 },
          { label: 'Executive Wide (190cm x 90cm)', priceModifier: 25000 }
        ]
      }
    ],
    relatedProductIds: ['aura-mirror-01', 'tiktok-mirror-04']
  },
  {
    id: 'snapchat-mirror-03',
    slug: 'viral-snapchat-neon-mirror',
    name: 'Viral Snapchat Neon Halo Mirror',
    category: 'mirrors',
    categoryLabel: 'Custom Mirrors',
    shortDescription: 'Custom arched outline mirror with vibrant neon border lighting and optional social handle branding.',
    fullDescription: 'Featuring customizable neon backing and acrylic trim, this Snapchat Mirror is a viral favorite for boutiques, salons, and modern bedrooms.',
    price: 110000,
    priceLabel: 'Starting from ₦110,000',
    currency: 'NGN',
    images: [
      'https://i.postimg.cc/rmfsq31y/Screenshot-20260522-142514-Tik-Tok.jpg',
      'https://i.postimg.cc/ZKBnhf02/Screenshot-20260522-142551-Tik-Tok.jpg',
      'https://i.postimg.cc/N0w5D1Gv/Screenshot-20260522-142444-Tik-Tok.jpg'
    ],
    featured: false,
    customMade: true,
    leadTime: '5 - 7 business days',
    deliveryInfo: 'Nationwide wooden crate delivery',
    installationAvailable: true,
    specifications: [
      { label: 'Style', value: 'Arched Neon Outline' },
      { label: 'Branding', value: 'Optional custom laser-engraved neon handle' }
    ],
    features: [
      'Custom color neon border',
      'Custom text / logo engraving optional',
      'Integrated brightness dimmer'
    ],
    options: [
      {
        name: 'Neon Color',
        choices: [
          { label: 'Warm White Glow', priceModifier: 0 },
          { label: 'Ice Blue', priceModifier: 0 },
          { label: 'Rose Pink', priceModifier: 0 },
          { label: 'Multi-Color Switchable', priceModifier: 12000 }
        ]
      }
    ],
    relatedProductIds: ['aura-mirror-01', 'tiktok-mirror-04']
  },
  {
    id: 'tiktok-mirror-04',
    slug: 'interactive-tiktok-display-mirror',
    name: 'Interactive TikTok Interface Mirror',
    category: 'mirrors',
    categoryLabel: 'Custom Mirrors',
    shortDescription: 'Playful smartphone-style framed mirror with warm intelligent backlit display.',
    fullDescription: 'Designed in the iconic style of dynamic mobile video interfaces, our TikTok Mirrors combine high-definition glass with retro-tech aesthetics and surround backlighting.',
    price: 90000,
    priceLabel: 'Starting from ₦90,000',
    currency: 'NGN',
    images: [
      'https://i.postimg.cc/N0w5D1Gv/Screenshot-20260522-142444-Tik-Tok.jpg',
      'https://i.postimg.cc/rmfsq31y/Screenshot-20260522-142514-Tik-Tok.jpg'
    ],
    featured: false,
    customMade: true,
    leadTime: '5 - 7 business days',
    deliveryInfo: 'Lagos & Ghana shipping available',
    relatedProductIds: ['instagram-mirror-02', 'snapchat-mirror-03']
  },
  {
    id: 'wavy-mirror-05',
    slug: 'bespoke-wavy-art-deco-mirror',
    name: 'Bespoke Wavy LED Art Deco Mirror',
    category: 'mirrors',
    categoryLabel: 'Custom Mirrors',
    shortDescription: 'Organic undulating wavy border mirror perfect for contemporary closets and feature walls.',
    fullDescription: 'Undulating organic shapes meet warm-white neon strip lights to create a captivating focal point in your bedroom or walk-in closet.',
    price: 105000,
    priceLabel: 'Starting from ₦105,000',
    currency: 'NGN',
    images: [
      'https://i.postimg.cc/ZKBnhf02/Screenshot-20260522-142551-Tik-Tok.jpg',
      'https://i.postimg.cc/vB2PqNnm/a5164097-dd7b-4477-ae33-c34845983535.jpg'
    ],
    featured: true,
    customMade: true,
    leadTime: '6 - 8 business days',
    relatedProductIds: ['aura-mirror-01', 'instagram-mirror-02']
  },

  // --- WARDROBES ---
  {
    id: 'drip-wardrobe-01',
    slug: 'luxury-fitted-drip-wardrobe',
    name: 'Luxury Fitted Drip Wardrobe Suite',
    category: 'wardrobes',
    categoryLabel: 'Custom Wardrobes',
    shortDescription: 'Bespoke dual-tone wardrobe unit tailored with soft-close cabinets, gold handles, and motion LEDs.',
    fullDescription: 'Tailored precisely to your bedroom layout, our luxury Drip Wardrobe Suite incorporates personalized soft-close cabinets, rich gold handle finishes, internal trouser racks, shoe drawers, and motion-activated inner lighting.',
    price: null, // Consultation based
    priceLabel: 'Quote on Consultation (Custom Dimensions)',
    currency: 'NGN',
    images: [
      'https://i.postimg.cc/pLQ223xr/Screenshot-20260522-142556-Tik-Tok.jpg',
      'https://i.postimg.cc/d04n3x4h/f8e41194-bf0b-4826-8a41-4076e72b6095.jpg',
      'https://i.postimg.cc/vB2PqNnm/a5164097-dd7b-4477-ae33-c34845983535.jpg'
    ],
    featured: true,
    customMade: true,
    leadTime: '10 - 14 business days',
    deliveryInfo: 'Includes site measurement, Lagos installation & 2-year fitting guarantee',
    installationAvailable: true,
    specifications: [
      { label: 'Material', value: 'High-density Moisture Resistant Board & Natural Wood Veneer' },
      { label: 'Hardware', value: 'Soft-close Blum German hinges & brushed gold solid brass pulls' },
      { label: 'Lighting', value: 'Automatic motion-sensor LED clothing rail strips' },
      { label: 'Doors', value: 'Hinged or Sliding tinted glass / solid panel doors' }
    ],
    features: [
      'Tailored floor-to-ceiling fitment',
      'Customized internal drawer partitions & tie organizers',
      'Built-in illuminated vanity or mirror section optional',
      'Free Lagos site consultation & 3D layout measurement'
    ],
    options: [
      {
        name: 'Finish & Color',
        choices: [
          { label: 'Obsidian Black & Brushed Gold Trim', priceModifier: 0 },
          { label: 'Warm Oak Wood & Champagne Brass', priceModifier: 0 },
          { label: 'Nordic Cream & Matte Black Accents', priceModifier: 0 }
        ]
      },
      {
        name: 'Door Style',
        choices: [
          { label: 'Solid Matte Panelled Doors', priceModifier: 0 },
          { label: 'Tinted Fluted Glass Doors with LED Rails', priceModifier: 45000 }
        ]
      }
    ],
    relatedProductIds: ['walkin-closet-02', 'aura-mirror-01']
  },
  {
    id: 'walkin-closet-02',
    slug: 'executive-walk-in-dressing-closet',
    name: 'Executive Walk-In Dressing Room Suite',
    category: 'wardrobes',
    categoryLabel: 'Custom Wardrobes',
    shortDescription: 'Complete open-concept walk-in closet with island dresser, glass display drawers, and perimeter illumination.',
    fullDescription: 'Transform an entire room into a world-class dressing room experience. Designed with perimeter ambient lighting, accessory islands, glass-top jewelry drawers, and integrated mirror units.',
    price: null,
    priceLabel: 'Quote on Consultation',
    currency: 'NGN',
    images: [
      'https://i.postimg.cc/pLQ223xr/Screenshot-20260522-142556-Tik-Tok.jpg',
      'https://i.postimg.cc/vB2PqNnm/a5164097-dd7b-4477-ae33-c34845983535.jpg'
    ],
    featured: true,
    customMade: true,
    leadTime: '14 - 21 business days',
    deliveryInfo: 'Professional installation crew on site in Lagos & major cities',
    installationAvailable: true,
    specifications: [
      { label: 'Layout', value: 'U-Shape, L-Shape, or Parallel Wall Configuration' },
      { label: 'Accessories', value: 'Jewelry drawer dividers, shoe racks, bag pedestals' }
    ],
    features: [
      'Full custom architectural fitting',
      'Center island dresser with velvet watch inserts',
      'Integrated LED vanity integration'
    ],
    relatedProductIds: ['drip-wardrobe-01', 'aura-mirror-01']
  },

  // --- THE VAULT (PHYSICAL SAVINGS BOX) ---
  {
    id: 'vault-box-01',
    slug: 'the-vault',
    name: 'The Aplund Vault (Physical Wooden Savings Box)',
    category: 'vault',
    categoryLabel: 'The Vault',
    shortDescription: 'Physical solid hardwood savings box crafted with polished brass hardware and paired with a manual digital savings tracker.',
    fullDescription: 'The Aplund Vault brings elegance and physical discipline back to daily savings. Hand-carved from solid mahogany and oak in our Lagos workshop, each Vault features a heavy brass lock, brass money slot, and an engraved QR code linking directly to your personal web-based manual savings tracker ledger.',
    price: 35000,
    priceLabel: '₦35,000 (Includes Box + Manual Digital Ledger Access)',
    currency: 'NGN',
    images: [
      'https://i.postimg.cc/pLQ223xr/Screenshot-20260522-142556-Tik-Tok.jpg',
      'https://i.postimg.cc/vB2PqNnm/a5164097-dd7b-4477-ae33-c34845983535.jpg'
    ],
    featured: true,
    customMade: false,
    isVault: true,
    leadTime: '1 - 3 business days',
    deliveryInfo: 'In stock for immediate dispatch across Nigeria',
    includedItems: [
      'Handcrafted Solid Hardwood Box',
      'Heavy Duty Brass Lock & Set of 2 Brass Keys',
      'Velvet Interior Lining',
      'Laser-Engraved QR Code Brass Plate',
      'Access to Web-Based Manual Savings Companion'
    ],
    careInformation: 'Wipe down with a dry or softly oiled microfiber cloth. Keep away from direct water submersion.',
    digitalCompanionDescription: 'Scan the brass QR plate on your physical Vault to open your private web manual deposit log. Define your personal target, manually record cash placed in or taken out, and track your visual progress milestone bar.',
    specifications: [
      { label: 'Material', value: '100% Solid Seasoned Oak & Teak Hardwood' },
      { label: 'Lock Hardware', value: 'Heavy Duty Polished Brass Lock & Key Set' },
      { label: 'Dimensions', value: '25cm (L) x 18cm (W) x 16cm (H)' },
      { label: 'Digital Companion', value: 'Unique QR Code Plate linked to your manual Web Tracker' },
      { label: 'Capacity', value: 'Holds up to ₦1.5M in physical banknotes' }
    ],
    features: [
      'Physical wooden craftsmanship with velvet inner lining',
      'Laser-engraved custom nameplate or initial optional',
      'Personal Web Tracker companion for manual deposit & goal logging',
      'No battery required for physical vault'
    ],
    options: [
      {
        name: 'Wood Finish',
        choices: [
          { label: 'Royal Mahogany (Dark Warm Finish)', priceModifier: 0 },
          { label: 'Natural Heritage Oak (Light Grain)', priceModifier: 0 },
          { label: 'Obsidian Midnight Stain', priceModifier: 5000 }
        ]
      },
      {
        name: 'Custom Engraving',
        choices: [
          { label: 'Standard Aplund Brass Emblem', priceModifier: 0 },
          { label: 'Custom Name Engraved on Brass Plate', priceModifier: 5000, description: 'Enter name in order notes' }
        ]
      }
    ],
    relatedProductIds: ['aura-mirror-01', 'instagram-mirror-02']
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  if (slug === 'the-vault' || slug === 'the-aplund-vault-physical-savings-box') {
    return productsData.find(p => p.isVault);
  }
  return productsData.find(p => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === 'all') return productsData;
  return productsData.filter(p => p.category === category);
}
