import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, CartItemOptionSelection } from '../types/cart';
import { Product } from '../types/products';

interface CartContextType {
  items: CartItem[];
  addToCart: (
    product: Product,
    selectedOptions?: CartItemOptionSelection[],
    quantity?: number,
    customDimensions?: string,
    customNotes?: string
  ) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  cartSubtotal: number;
  itemCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'aplund_cart_v1';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (e) {
      console.warn('Failed to parse cart from localStorage:', e);
    }
    return [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.warn('Failed to save cart to localStorage:', e);
    }
  }, [items]);

  const addToCart = (
    product: Product,
    selectedOptions: CartItemOptionSelection[] = [],
    quantity = 1,
    customDimensions?: string,
    customNotes?: string
  ) => {
    // Generate deterministic cart item ID based on options & dimensions
    const optionsKey = selectedOptions
      .map(o => `${o.optionName}:${o.choiceLabel}`)
      .sort()
      .join('|');
    const cartItemId = `${product.id}-${optionsKey}-${customDimensions || ''}`;

    // Compute unit price considering price modifiers
    let basePrice = product.price;
    if (basePrice !== null) {
      selectedOptions.forEach(opt => {
        if (opt.priceModifier) {
          basePrice! += opt.priceModifier;
        }
      });
    }

    setItems(prevItems => {
      const existingIndex = prevItems.findIndex(item => item.cartItemId === cartItemId);
      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        const newItem: CartItem = {
          cartItemId,
          productId: product.id,
          productSlug: product.slug,
          productName: product.name,
          categoryLabel: product.categoryLabel,
          image: product.images[0] || '',
          unitPrice: basePrice,
          priceLabel: product.priceLabel,
          quantity,
          selectedOptions,
          customDimensions,
          customNotes
        };
        return [...prevItems, newItem];
      }
    });

    setIsCartOpen(true);
  };

  const removeFromCart = (cartItemId: string) => {
    setItems(prev => prev.filter(item => item.cartItemId !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setItems(prev =>
      prev.map(item =>
        item.cartItemId === cartItemId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const cartSubtotal = items.reduce((sum, item) => {
    if (item.unitPrice !== null) {
      return sum + item.unitPrice * item.quantity;
    }
    return sum;
  }, 0);

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartSubtotal,
        itemCount,
        isCartOpen,
        setIsCartOpen
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
