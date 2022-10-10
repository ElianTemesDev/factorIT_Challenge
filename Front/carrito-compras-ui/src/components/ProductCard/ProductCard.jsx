import React from "react";
import "./ProductCard.css"
import Button from 'react-bootstrap/Button';

const ProductCard = ({product, onAddToCart}) => {
  return (
    <div className="product-card">
      <img className="product-img" src={product.imageUrl} alt={product.name}/>
      <span className="product-data-span">Nombre: </span> {product.name}
      <span className="product-data-span">Precio: $ {product.price}</span>
      <Button variant="outline-primary" onClick={() => onAddToCart(product)}>Agregar al carrito</Button>
    </div>
  )
}

export default ProductCard;