# Multi-vendor Commerce (Spring Boot reference)

This Spring Boot starter showcases a modular, multi-vendor commerce backend inspired by SAP Commerce concepts such as separable vendor catalogs, layered services, and data-driven onboarding.

## Running locally

```bash
mvn spring-boot:run
```

The service boots with an in-memory H2 database and seeds two vendors and sample products. You can inspect the data via the [H2 console](http://localhost:8080/h2) (JDBC URL: `jdbc:h2:mem:multivendor`).

## Key endpoints

- `GET /vendors` — list vendors
- `GET /vendors/{id}` — fetch a specific vendor
- `POST /vendors` — onboard a vendor with validation and uniqueness checks
- `GET /products` — list all products
- `GET /products/vendor/{vendorId}` — scope products to a vendor
- `POST /products/vendor/{vendorId}` — create a product for a specific vendor

## SAP Commerce alignment

- **Modular domain**: Separate `Vendor` and `Product` aggregates mirror SAP Commerce extensions for vendors and catalogs.
- **Validation and constraints**: Unique contact email and basic validation on inputs keep onboarding predictable.
- **Sample data**: Seeded vendors illustrate how marketplaces can preload accelerators with curated suppliers.
