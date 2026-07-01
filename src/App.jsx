import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './component/Navbar'
import CategoryFilter from './component/CategoryFilter'
import ProductList from './component/ProductList'
import Cart from './pages/Cart'
import { Route, Routes } from 'react-router-dom'
import { products as initialProducts } from './assets/Data/ListProducts'
function App() {

  const [cart, setCart] = useState([]);
  const [productsList, setProductsList] = useState(initialProducts);


  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };
  const deleteCart = (id) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id));
  };

  const deleteProductFromList = (id) => {
    setProductsList((prevList) => prevList.filter(product => product.id !== id));

    deleteCart(id);
  };

  return (
    <>
      <Navbar cartCount={cart.length} />
      <Routes>
        <Route
          path="/"
          element={<ProductList products={productsList} addCart={addToCart} deleteCartItem={deleteProductFromList} />}
        />
        <Route path="/cart" element={<Cart cartItems={cart} deleteCart={deleteCart} />} />
      </Routes>



    </>
  )
}

export default App