package com.factorItChallenge.entities;
import lombok.*;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Table(name = "products")
public class Product {
    @Id
    @Column(name = "prod_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "prod_name")
    private String name;

    @Column(name = "prod_price", precision = 10, scale = 2)
    private BigDecimal price;

    @Column(name = "prod_image_url")
    private String imageUrl;

    @Column(name = "prod_quantity")
    private BigDecimal quantity;

    public BigDecimal getPrice(){
        return price;
    }

    public BigDecimal getQuantity(){
        return quantity;
    }
}
