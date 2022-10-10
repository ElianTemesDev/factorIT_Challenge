package com.factorItChallenge.controller;

import com.factorItChallenge.entities.Product;
import com.factorItChallenge.repo.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping(value = "/products")
    public List<Product> getProducts(){
        return productRepository.findAll();
    }
}
