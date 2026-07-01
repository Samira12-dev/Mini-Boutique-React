import { products } from "../assets/Data/ListProducts";
import CategoryFilter from "./CategoryFilter";
import ProductCard from "./ProductCard";

export default function ProductList({addCart,deleteCart}) {
  return (
    <section className="products">
      <CategoryFilter addCart={addCart} deleteCart={deleteCart} />

    </section>
  );
}