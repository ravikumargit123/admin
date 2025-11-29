package com.example.multivendor.service;

import com.example.multivendor.domain.Vendor;
import com.example.multivendor.repository.VendorRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VendorService {

    private final VendorRepository vendorRepository;

    public VendorService(VendorRepository vendorRepository) {
        this.vendorRepository = vendorRepository;
    }

    public List<Vendor> listVendors() {
        return vendorRepository.findAll();
    }

    public Optional<Vendor> getVendor(Long id) {
        return vendorRepository.findById(id);
    }

    public Vendor createVendor(Vendor vendor) {
        vendorRepository.findByContactEmail(vendor.getContactEmail())
                .ifPresent(existing -> {
                    throw new IllegalArgumentException("Vendor with contact email already exists");
                });
        return vendorRepository.save(vendor);
    }
}
