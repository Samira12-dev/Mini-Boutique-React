import { useState } from 'react';
import ProductCard from './ProductCard';

// 👈 استقبلنا الـ products الديناميكية هنا وحيدنا الـ import القديم
function CategoryFilter({ products, addCart, deleteCartItem }) {
  const [categories, setCategories] = useState("All");   

  // 👈 دابا الفلترة كتقرأ من الـ products لي جاية من الـ State
  const filterCategory = categories === "All" 
    ? products 
    : products.filter((product) => product.category === categories);

  return (
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
          <ProductCard 
            key={product.id} 
            product={product} 
            addCart={addCart} 
            deleteCartItem={deleteCartItem} 
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryFilter;