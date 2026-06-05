export interface Property {
  id: string;
  unitNumber: string;
  ownerName: string;
  phone: string;
  status: 'paid' | 'pending' | 'overdue';
  amount: number;
  dueDate: string;
  lastReminderSent?: string;
}

export interface PaymentLink {
  id: string;
  unitNumber: string;
  ownerName: string;
  amount: number;
  feeType: 'maintenance' | 'cleaning' | 'security' | 'electricity' | 'other';
  status: 'active' | 'paid';
  createdAt: string;
}

export type FeeTypeArabic = {
  maintenance: 'صيانة دورية';
  cleaning: 'خدمات النظافة';
  security: 'حراسة وأمن';
  electricity: 'كهرباء مشتركة';
  other: 'مصاريف طارئة';
};

export const FEE_ARABIC_MAP: FeeTypeArabic = {
  maintenance: 'صيانة دورية',
  cleaning: 'خدمات النظافة',
  security: 'حراسة وأمن',
  electricity: 'كهرباء مشتركة',
  other: 'مصاريف طارئة',
};
