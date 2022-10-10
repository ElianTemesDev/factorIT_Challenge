import React, { useState } from 'react';
import "./CartPage.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";

const CartPage = (data) => {
    debugger;
    const setCart = data.setCart;

    const navigate = useNavigate(); 
    const routeChange = () =>{ 
    let path = `/`; 
    navigate(path);
    }

    async function saveCart(products) {
        await fetch("/cart/newcart", 
        {
          method: 'POST',
          headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            }),
          body: JSON.stringify(products)
        }).then(response => response.json()).then(price => {
            setCartPrice(price);
            setProducts([]);
            setCart([]);
        });
    }

    function handleRemoveSingle(id){       
        let newProductsList = products.map((item) => {
            if(item.id === id){
                item.quantity--;
            }
            return item
        }).filter((item) => item.quantity !== 0);
        setProducts(newProductsList);
        setCart(newProductsList);
    }

    function handleRemoveEntireCard(id){       
        setProducts(products.filter((item) => item.id !== id));
        setCart(products.filter((item) => item.id !== id));
    }

    const [products, setProducts] = useState(data.cart);
    const [cartPrice, setCartPrice] = useState(0);

    return (
      <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <img src="https://www.factorit.com.ar/images/img-servicios.png" alt='logo' width="100" height="80" />{' '}           
            </Navbar.Brand>
            <h1>Carrito de Compras FactorIT</h1>
            <Button variant="light btn-lg" className="router-button" onClick={ routeChange }><span role="img" aria-label="Volver a Tienda">Tienda: 🏠</span></Button>
        </Navbar>
        {(products.length === 0 && cartPrice >! 0) && (
            <div>No se agregaron productos al carrito</div>
        )}
        <CardGroup>
        {products.map((item) => (
                <Card key={item.id}>
                    <Card.Body>
                        <Card.Title>Nombre: {item.name}</Card.Title>
                        <Card.Text>
                            <span className="product-data-span">Precio: $ {item.price} </span>
                            <span className="product-data-span">Cantidad: {item.quantity} </span>
                        </Card.Text>
                    </Card.Body>
                <Card.Footer>
                    <Button onClick={() => handleRemoveSingle(item.id)} variant="outline-warning">Borrar un producto</Button> 
                    <Button onClick={() => handleRemoveEntireCard(item.id)} variant="outline-danger">Borrar todos</Button>
                </Card.Footer>
            </Card>   
        ))}
        </CardGroup>
        {products.length !== 0 && (
            <Button variant="dark btn-lg" onClick={() => saveCart(data.cart)}>Calcular precio</Button>
        )}
        {cartPrice > 0 && (
            <span>Precio Total: $ {cartPrice}</span>
        )}
      </>
    )
}

export default CartPage;