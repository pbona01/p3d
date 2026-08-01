export interface CartItemOptionSelection {
  optionName: string;
  choiceLabel: string;
  priceModifier?: number;
}

export interface CartItem {
  cartItemId: string; // unique ID generated from product.id + selected options
  productId: string;
  productSlug: string;
  productName: string;
  categoryLabel: string;
  image: string;
  unitPrice: number | null; // null if quote based
  priceLabel?: string;
  quantity: number;
  selectedOptions: CartItemOptionSelection[];
  customDimensions?: string;
  customNotes?: string;
}

export interface CustomerOrderDetails {
  fullName: string;
  phone: string;
  email?: string;
  deliveryLocation: string;
  preferredContact: 'whatsapp' | 'call';
  orderNotes?: string;
}
