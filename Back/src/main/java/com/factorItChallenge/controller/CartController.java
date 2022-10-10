package com.factorItChallenge.controller;

import com.factorItChallenge.entities.Cart;
import com.factorItChallenge.entities.Product;
import com.factorItChallenge.repo.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
import java.util.List;

@RestController
public class CartController {

    @Autowired
    private CartRepository cartRepository;

    @PostMapping(value = "/cart/newcart")
    public BigDecimal saveCart(@RequestBody List<Product> products){
        Cart cart = new Cart();
        cart.addProducts(products);
        if(!cartRepository.existsById(cart.getId() != null ? cart.getId() : 0)){
            cartRepository.save(cart);
        }
        return cart.totalPrice();
    }
}