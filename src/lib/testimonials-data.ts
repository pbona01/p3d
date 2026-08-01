export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  productPurchased: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Dr. Adewale K.',
    location: 'Banana Island, Ikoyi',
    rating: 5,
    comment: 'Aplund constructed a 2.4-meter custom LED Aura Mirror for our master suite. The copper-free glass quality is outstanding, and the warm backlighting transforms the room atmosphere completely.',
    productPurchased: 'The Ultimate Aura Mirror'
  },
  {
    id: 't2',
    name: 'Funke O.',
    location: 'Lekki Phase 1, Lagos',
    rating: 5,
    comment: 'We ordered a 4-door custom fitted wardrobe. The Aplund team came for site measurement on Tuesday, and installation was flawless by Saturday. Blum hinges work so smoothly!',
    productPurchased: 'Executive Drip Wardrobe'
  },
  {
    id: 't3',
    name: 'Tobi A.',
    location: 'Victoria Island, Lagos',
    rating: 5,
    comment: 'The Vault savings box is incredible. Solid mahogany wood with a heavy brass lock. Scanning the QR code to log weekly deposits manually gives me such physical saving discipline.',
    productPurchased: 'The Vault Savings Box'
  },
  {
    id: 't4',
    name: 'Bisi & Segun M.',
    location: 'Ikeja GRA, Lagos',
    rating: 5,
    comment: 'We bought two Instagram LED vanity mirrors for our beauty studio. The dimmable touchscreen buttons and crystal-clear glass are a hit with all our clients!',
    productPurchased: 'Instagram Smart Vanity Mirror'
  },
  {
    id: 't5',
    name: 'Chidinma E.',
    location: 'Epe, Lagos',
    rating: 5,
    comment: 'Very professional customer support on WhatsApp. They sent reference videos of the mirror finishes before shipping in a sturdy wooden crate. 100% recommended.',
    productPurchased: 'Bespoke Wavy Accent Mirror'
  }
];
