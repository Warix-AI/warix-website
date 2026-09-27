export interface MockUser {
  name: string;
  email: string;
  hasOne: boolean;
  hasTwo: boolean;
  shipping: {
    name: string;
    line1: string;
    city: string;
    region: string;
    postal: string;
    country: string;
  };
  payment: {
    brand: string;
    last4: string;
  };
}

export interface BagLine {
  id: string;
  productSlug: string;
  series: string;
  name: string;
  image: string;
  quantity: number;
  unitPrice: number;
  selection: Record<string, string>;
  selectionLabels: Record<string, string>;
}

export interface PlacedOrder {
  id: string;
  items: BagLine[];
  total: number;
  shipping: MockUser["shipping"];
  paymentSummary: string;
  estimatedDelivery: string;
  createdAt: string;
  guest: boolean;
}
