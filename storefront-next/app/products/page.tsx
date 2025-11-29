import ProductTable from '@/components/ProductTable';
import { getProducts, getVendors } from '@/lib/api';
import { Suspense } from 'react';

export const metadata = {
  title: 'Products | Multi-vendor Storefront',
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams?: { vendor?: string };
}) {
  const vendorId = searchParams?.vendor;
  const [products, vendors] = await Promise.all([
    vendorId ? getProducts(vendorId) : getProducts(),
    getVendors(),
  ]);

  return (
    <section>
      <div className="hero">
        <span className="badge">Catalog view</span>
        <h1>Products</h1>
        <p className="muted">
          Pulls product data directly from the Spring Boot APIs to showcase federated inventory across
          marketplace partners.
        </p>
      </div>
      <Suspense fallback={<div className="muted">Loading products...</div>}>
        <ProductTable products={products} vendors={vendors} selectedVendorId={vendorId} />
      </Suspense>
    </section>
  );
}
