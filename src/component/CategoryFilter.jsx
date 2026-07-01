import {products} from '../assets/Data/ListProducts'
import { useState } from 'react';
import ProductList from './ProductList';
import ProductCard from './ProductCard';

function CategoryFilter({addCart, deleteCart}) {
  const [categories, setCategories] = useState("All");   

  const filterCategory = categories === "All"? products : products.filter((product) => product.category === categories);

  return (
    <>
    <div className="product-page">

      <aside className="category-filter">
      <h2>Categories</h2>

      <div className="category-btns">
        <button onClick={() => setCategories("All")}>All</button>
        <button onClick={() => setCategories("Fashion")}>Fashion</button>
        <button onClick={() => setCategories("Beauty")}>Beauty</button>
        <button onClick={() => setCategories("Accessories")}>Accessories</button>
        <button onClick={() => setCategories("Sports")}>Sports</button>
        <button onClick={() => setCategories("Home")}>Home</button>
      </div>
    </aside>
    <div className="product-cards">
        {filterCategory.map((product) => (
          <ProductCard key={product.id} product={product} addCart={addCart} deleteCart={deleteCart} />
        ))}
    </div>

    </div>
    
    </>
  );
}

export default CategoryFilter;