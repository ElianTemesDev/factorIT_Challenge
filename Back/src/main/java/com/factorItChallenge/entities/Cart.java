package com.factorItChallenge.entities;

import lombok.*;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Table(name = "carts")
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @ManyToMany( cascade = CascadeType.MERGE)
    List<Product> products;

    public Cart(List<Product> products) {
        this.products = products;
    }

    public Integer amount() {
        return products.size();
    }

    public BigDecimal totalPrice() {
        BigDecimal totalPrice = products.stream()
                .map(product -> product.getQuantity().multiply(product.getPrice()))    // map
                .reduce(BigDecimal.ZERO, BigDecimal::add);      // reduce
        return totalPrice;
    }

    public void addProduct(Product product) {
        products.add(product);
    }

    public void addProducts(List<Product> products) {
        this.products = products;
    }

    public void removeProduct(Product product) {
        products.remove(product);
    }
}
