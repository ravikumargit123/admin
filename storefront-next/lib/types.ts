export type Vendor = {
  id: number;
  name: string;
  contactEmail: string;
  description?: string;
};

export type Product = {
  id: number;
  name: string;
  description?: string;
  price: number | string;
  vendor?: Vendor;
};

export type Health = {
  status: string;
  message?: string;
};
