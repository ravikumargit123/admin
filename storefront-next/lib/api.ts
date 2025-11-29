import { Health, Product, Vendor } from './types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:8080';

async function fetchJson<T>(path: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  return response.json();
}

export async function getHealth(): Promise<Health> {
  try {
    const vendors = await getVendors();
    return {
      status: 'online',
      message: `Connected to API. Found ${vendors.length} vendor(s).`,
    };
  } catch (error) {
    return {
      status: 'offline',
      message: error instanceof Error ? error.message : 'Unable to reach API',
    };
  }
}

export async function getVendors(): Promise<Vendor[]> {
  return fetchJson('/vendors');
}

export async function getProducts(vendorId?: string): Promise<Product[]> {
  if (vendorId) {
    return fetchJson(`/products/vendor/${vendorId}`);
  }

  return fetchJson('/products');
}
