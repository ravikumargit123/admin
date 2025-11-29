# Multi-vendor Storefront (Next.js)

This Next.js app consumes the Spring Boot multi-vendor API (inspired by SAP Commerce) from the `multivendor-spring` module.

## Prerequisites
- Node.js 18.18+
- Spring Boot API from `multivendor-spring` running on `http://localhost:8080`

## Getting started
1. Install dependencies
   ```bash
   cd storefront-next
   yarn install # or npm install
   ```
2. Run the Spring Boot API in another terminal (from `multivendor-spring`)
   ```bash
   ./mvnw spring-boot:run
   ```
3. Start the storefront
   ```bash
   yarn dev
   # open http://localhost:4300
   ```

Set `NEXT_PUBLIC_API_BASE_URL` to target a different API host.

## Pages
- `/` – overview + API health check
- `/vendors` – vendor cards sourced from `/vendors`
- `/products` – product table with vendor filter backed by `/products` and `/products/vendor/{vendorId}`
