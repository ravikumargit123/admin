import './globals.css';
import Link from 'next/link';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Multi-vendor Storefront',
  description: 'Next.js storefront consuming Spring Boot marketplace APIs',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <div className="navbar">
            <Link className="brand" href="/">
              <span>Multi-vendor Storefront</span>
            </Link>
            <nav>
              <ul>
                <li>
                  <Link href="/vendors">Vendors</Link>
                </li>
                <li>
                  <Link href="/products">Products</Link>
                </li>
                <li>
                  <Link href="https://github.com/medusajs/admin">Docs</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
