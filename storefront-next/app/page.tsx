import Link from 'next/link';
import { Suspense } from 'react';
import ApiStatus from '@/components/ApiStatus';

export default function HomePage() {
  return (
    <section>
      <div className="hero">
        <span className="badge">Next.js + Spring Boot</span>
        <h1>Marketplace storefront aligned with SAP Commerce concepts</h1>
        <p>
          Browse vendors and curated products exposed by the Spring Boot reference APIs. Use the
          vendor-aware filters to validate catalog segmentation and onboarding.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.1rem', flexWrap: 'wrap' }}>
          <Link className="button" href="/vendors">
            Explore vendors
          </Link>
          <Link className="button secondary" href="/products">
            Browse products
          </Link>
        </div>
      </div>

      <div className="card-grid">
        <div className="card">
          <h3>Vendor onboarding</h3>
          <p className="muted">
            Mirrors SAP Commerce vendor entities to surface contact data, fulfillment methods, and
            simple SLA metadata.
          </p>
        </div>
        <div className="card">
          <h3>Catalog federation</h3>
          <p className="muted">
            Pulls curated products per vendor so you can validate aggregation and merchandising
            controls in the API.
          </p>
        </div>
        <div className="card">
          <h3>API health</h3>
          <p className="muted">Verify connectivity to the Spring Boot backend before navigating deeper.</p>
          <Suspense fallback={<div className="muted">Checking API...</div>}>
            <ApiStatus />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
