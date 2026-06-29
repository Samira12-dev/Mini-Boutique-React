import { products } from "../assets/Data/ListProducts"; 
import ProductCard from "./ProductCard";
export default function ProductList(){
    return (
        <section className="products">
            <div className="product-list">
           {products.map((product)=>(
            <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            category={product.category}
            price={product.price}
            />
           ))}
        </div>
        </section>
    )
}