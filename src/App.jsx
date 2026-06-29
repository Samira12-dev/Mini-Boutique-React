import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './component/Navbar'
import CategoryFilter from './component/CategoryFilter'
import ProductList from './component/ProductList'
function App() {

  return (
    <>
    <Navbar/>
    <div className='container'>
    <CategoryFilter/>
    <ProductList/>
    </div>
   
  
    </>
  )
}

export default App
