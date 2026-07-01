import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './component/Navbar'
import CategoryFilter from './component/CategoryFilter'
import ProductList from './component/ProductList'
import CartItem from './pages/CartItem'
function App() {

  const [cart, setCart] = useState(0);

const addToCart = () => {
  setCart((prev) => prev + 1);
};

const removeFromCart = () => {
  setCart((prev) => (prev > 0 ? prev - 1 : 0));
};
  return (
    <>
    <Navbar cartCount={cart}/>
    <div className='container'>
    <ProductList  addCart={addToCart} deleteCart={removeFromCart}/>

    </div>
   
  
    </>
  )
}

export default App