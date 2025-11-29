import { Vendor } from '@/lib/types';

export default function VendorGrid({ vendors }: { vendors: Vendor[] }) {
  return (
    <div className="card-grid">
      {vendors.map((vendor) => (
        <article key={vendor.id} className="card">
          <div className="meta-row" style={{ justifyContent: 'space-between' }}>
            <h3 style={{ margin: 0 }}>{vendor.name}</h3>
            <span className="badge">Vendor #{vendor.id}</span>
          </div>
          <p className="muted" style={{ marginTop: '0.2rem' }}>
            {vendor.description ?? 'No description provided'}
          </p>
          <div className="meta-row">
            <span>Contact: {vendor.contactEmail}</span>
          </div>
        </article>
      ))}
    </div>
  );
}
