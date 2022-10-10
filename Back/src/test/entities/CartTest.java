package model;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class CartTest {

    @Test
    void aNewCartHas0Products(){
        Cart cart = new Cart();
        assertEquals(cart.amount(), 0);
    }

    @Test
    void aProductCanBeAddedToTheCart(){
        Product product = new Product();
        Cart cart = new Cart();
        cart.addProduct(product);

        assertEquals(cart.amount(), 1);
    }

    @Test
    void aProductCanBeRemovedOfTheCart(){
        Product product = new Product();
        Cart cart = new Cart();
        cart.addProduct(product);

        cart.removeProduct(product);
        assertEquals(cart.amount(), 0);
    }


}
