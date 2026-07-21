export interface SavingsBox {
  boxId: string;
  owner: {
    name: string;
    phone: string;
    email: string;
  };
  pinHash: string; // hashed 4-digit PIN
  balance: number;
  goal: {
    name: string;
    targetAmount: number;
  } | null;
  transactions: {
    id: string;
    type: 'deposit' | 'withdrawal';
    amount: number;
    note: string;
    date: string; // ISO string
  }[];
  createdAt: string;
}

export interface Lead {
  boxId: string;
  name: string;
  phone: string;
  email: string;
  capturedAt: string;
  converted: boolean;
}
