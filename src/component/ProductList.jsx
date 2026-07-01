import CategoryFilter from "./CategoryFilter";

export default function ProductList({ products, addCart, deleteCartItem }) {
  return (
    <section className="products">
      <CategoryFilter 
        products={products} 
        addCart={addCart} 
        deleteCartItem={deleteCartItem} 
      />
    </section>
  );
}