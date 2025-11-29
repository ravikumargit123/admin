INSERT INTO vendors (id, name, contact_email, description) VALUES
  (1, 'Armadillo Audio', 'hello@armadillo.example', 'Music equipment marketplace vendor.'),
  (2, 'Nordic Outfitters', 'support@nordic.example', 'Outdoor apparel partner inspired by SAP Commerce B2C accelerators.');

INSERT INTO products (id, name, description, price, vendor_id) VALUES
  (1, 'Bluetooth Speaker', 'Compact wireless speaker with multi-room mode.', 149.00, 1),
  (2, 'Hiking Jacket', 'Waterproof jacket with recycled materials.', 199.00, 2);
