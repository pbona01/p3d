export type ProductCategory = 'mirrors' | 'wardrobes' | 'vault';

export interface ProductOption {
  name: string; // e.g. "Lighting / Backlight", "Finish / Frame", "Dimensions", "Wood Type"
  choices: {
    label: string;
    priceModifier?: number; // e.g. +15000 for LED
    description?: string;
  }[];
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  price: number | null; // null if quote on consultation
  priceLabel?: string; // e.g. "Starting from ₦85,000" or "Quote on Consultation"
  currency: string; // "NGN"
  images: string[];
  featured?: boolean;
  customMade?: boolean;
  isVault?: boolean;
  options?: ProductOption[];
  specifications?: { label: string; value: string }[];
  features?: string[];
  includedItems?: string[];
  careInformation?: string;
  digitalCompanionDescription?: string;
  leadTime?: string;
  deliveryInfo?: string;
  installationAvailable?: boolean;
  relatedProductIds?: string[];
}
