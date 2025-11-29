package com.example.multivendor.controller;

import com.example.multivendor.domain.Product;
import com.example.multivendor.service.ProductService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public List<Product> listProducts() {
        return productService.listProducts();
    }

    @GetMapping("/vendor/{vendorId}")
    public List<Product> listByVendor(@PathVariable Long vendorId) {
        return productService.listByVendor(vendorId);
    }

    @PostMapping("/vendor/{vendorId}")
    @ResponseStatus(HttpStatus.CREATED)
    public Product createProduct(@PathVariable Long vendorId, @Valid @RequestBody Product product) {
        return productService.createProduct(vendorId, product);
    }
}
