import { FaTrash } from "react-icons/fa";

export default function ProductCard({
  product,addCart, deleteCart
}) {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="category">{product.category}</p>
        <p className="price">{product.price} dh</p>

        <div className="product-btns">
          <button
            className="btn-add"
            onClick={()=>addCart(product) }
          >
            Add to Cart
          </button>

         {/* <button className="btn-delete"
            onClick={deleteCart}
          >
            <FaTrash />
          </button> */}
            

        </div>
      </div>
    </div>
  );
}