import React, {useState} from 'react';
import { Routes, Route } from "react-router-dom";
import StorePage from './pages/store/StorePage';
import CartPage from "./pages/cart/CartPage";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [cart, setCartItems] = useState([])

  const addToCart = (product) => {
    const productExists = cart.find(item => item.id === product.id )
    if(productExists){
      setCartItems(cart.map(item => 
        item.id === product.id ? { ...productExists, quantity: productExists.quantity + 1} : item
      ))
    }
    else {
      setCartItems([...cart, {...product, quantity: 1}]);
    }
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StorePage onClickHandler={addToCart}/>}/>
        <Route path="/cart" element={<CartPage cart={ cart } setCart={ setCartItems }/>}/>
      </Routes>
    </div>
  );
}

export default App;
