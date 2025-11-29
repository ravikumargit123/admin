package com.example.multivendor.service;

import com.example.multivendor.domain.Product;
import com.example.multivendor.domain.Vendor;
import com.example.multivendor.repository.ProductRepository;
import com.example.multivendor.repository.VendorRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository productRepository;
    private final VendorRepository vendorRepository;

    public ProductService(ProductRepository productRepository, VendorRepository vendorRepository) {
        this.productRepository = productRepository;
        this.vendorRepository = vendorRepository;
    }

    public List<Product> listProducts() {
        return productRepository.findAll();
    }

    public List<Product> listByVendor(Long vendorId) {
        Vendor vendor = vendorRepository.findById(vendorId)
                .orElseThrow(() -> new IllegalArgumentException("Vendor not found"));
        return productRepository.findByVendor(vendor);
    }

    public Product createProduct(Long vendorId, Product product) {
        Vendor vendor = vendorRepository.findById(vendorId)
                .orElseThrow(() -> new IllegalArgumentException("Vendor not found"));
        product.setVendor(vendor);
        return productRepository.save(product);
    }
}
