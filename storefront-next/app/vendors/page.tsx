import VendorGrid from '@/components/VendorGrid';
import { getVendors } from '@/lib/api';

export const metadata = {
  title: 'Vendors | Multi-vendor Storefront',
};

export default async function VendorsPage() {
  const vendors = await getVendors();

  return (
    <section>
      <div className="hero">
        <span className="badge">Partner directory</span>
        <h1>Vendors</h1>
        <p className="muted">
          Inspect marketplace vendors as defined in the Spring Boot reference service. Use this view
          to validate onboarding data before publishing inventory.
        </p>
      </div>
      {vendors.length === 0 ? (
        <div className="alert">No vendors found. Ensure the backend is running and seeded.</div>
      ) : (
        <VendorGrid vendors={vendors} />
      )}
    </section>
  );
}
