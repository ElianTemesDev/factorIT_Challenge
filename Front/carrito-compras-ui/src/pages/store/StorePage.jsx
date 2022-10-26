import React from 'react';
import "./StorePage.css"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { useProducts } from "../../hooks/useProducts";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useNavigate } from "react-router-dom";


const StorePage = (prop) => {
  const navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/cart`; 
    navigate(path);
  }

  const products = useProducts();
    return (
      <>
        <ToastContainer position="bottom-end">
          <Toast>
            <Toast.Header closeButton={false}>
              <strong className="me-auto"><span role="img" aria-label="Brillos">✨✨</span> Bienvenidos <span role="img" aria-label="Brillos">✨✨</span></strong>
            </Toast.Header>
            <Toast.Body>Disfruten la tienda!</Toast.Body>
          </Toast>
        </ToastContainer>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <img src="https://www.factorit.com.ar/images/img-servicios.png" alt='logo' width="100" height="80" />{' '}                
            </Navbar.Brand>
            <h1>Tienda</h1>
            <Nav>
              <Button variant="danger btn-lg" className="router-button" onClick={ routeChange }><span role="img" aria-label="Ir a Carrito">Carrito: 🛒</span></Button>
            </Nav>
        </Navbar>
        <div className="store">
          { products.map(product => {
              return <ProductCard key={product.id} product={product} onAddToCart={prop.onClickHandler}/>
            }
          )}
        </div>
      </>
    )
}

export default StorePage;
