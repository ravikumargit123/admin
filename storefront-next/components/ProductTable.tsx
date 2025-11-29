'use client';

import { useRouter } from 'next/navigation';
import { Product, Vendor } from '@/lib/types';

type Props = {
  products: Product[];
  vendors: Vendor[];
  selectedVendorId?: string;
};

function formatPrice(price: Product['price']) {
  const numeric = typeof price === 'string' ? Number(price) : price;
  if (Number.isNaN(numeric)) return 'N/A';
  return `$${numeric.toFixed(2)}`;
}

export default function ProductTable({ products, vendors, selectedVendorId }: Props) {
  const router = useRouter();

  return (
    <div className="card table-card">
      <div className="filter-bar">
        <label htmlFor="vendor-filter" className="muted">
          Filter by vendor
        </label>
        <select
          id="vendor-filter"
          className="select"
          value={selectedVendorId ?? ''}
          onChange={(event) => {
            const value = event.target.value;
            router.push(value ? `/products?vendor=${value}` : '/products');
          }}
        >
          <option value="">All vendors</option>
          {vendors.map((vendor) => (
            <option key={vendor.id} value={vendor.id}>
              {vendor.name}
            </option>
          ))}
        </select>
      </div>
      {products.length === 0 ? (
        <div className="alert">No products available for the selected vendor.</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Vendor</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <strong>{product.name}</strong>
                    {product.description ? (
                      <span className="muted" style={{ fontSize: '0.9rem' }}>
                        {product.description}
                      </span>
                    ) : null}
                  </div>
                </td>
                <td className="muted">{product.vendor?.name ?? 'N/A'}</td>
                <td>{formatPrice(product.price)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
