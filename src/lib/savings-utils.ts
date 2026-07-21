import { SavingsBox, Lead } from '../types/savings';

export const formatCurrency = (amount: number): string => {
  return `₦${amount.toLocaleString()}`;
};

export const hashPin = (pin: string, boxId: string): string => {
  // Simple hash for demo purposes: base64(pin + salt)
  return btoa(pin + boxId);
};

export const verifyPin = (pin: string, boxId: string, hashedPin: string): boolean => {
  return hashPin(pin, boxId) === hashedPin;
};

// Storage Utilities
export const getLeads = (): Lead[] => {
  if (typeof window === 'undefined') return [];
  const data = localStorage.getItem('aplund_leads');
  return data ? JSON.parse(data) : [];
};

export const addLead = (lead: Lead) => {
  if (typeof window === 'undefined') return;
  const leads = getLeads();
  // Avoid duplicate leads for the same boxId
  const filtered = leads.filter(l => l.boxId !== lead.boxId);
  localStorage.setItem('aplund_leads', JSON.stringify([...filtered, lead]));
};

export const markLeadAsConverted = (boxId: string) => {
  if (typeof window === 'undefined') return;
  const leads = getLeads();
  const updated = leads.map(l => l.boxId === boxId ? { ...l, converted: true } : l);
  localStorage.setItem('aplund_leads', JSON.stringify(updated));
};

export const getBox = (boxId: string): SavingsBox | null => {
  if (typeof window === 'undefined') return null;
  const data = localStorage.getItem(`aplund_box_${boxId}`);
  return data ? JSON.parse(data) : null;
};

export const saveBox = (box: SavingsBox) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(`aplund_box_${box.boxId}`, JSON.stringify(box));
  markLeadAsConverted(box.boxId);
};

export const getAllBoxes = (): SavingsBox[] => {
  if (typeof window === 'undefined') return [];
  const boxes: SavingsBox[] = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith('aplund_box_')) {
      const data = localStorage.getItem(key);
      if (data) {
        try {
          boxes.push(JSON.parse(data));
        } catch (e) {
          console.error('Error parsing box data', e);
        }
      }
    }
  }
  return boxes;
};

