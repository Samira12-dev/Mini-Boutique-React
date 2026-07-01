import { FaTrash } from "react-icons/fa";
import { useState } from 'react'


export default function CartItem({ product, deleteCart }) {
    const [quantity, setQuantity] = useState(1);
    const increseQuantity=()=>{
        setQuantity(quantity + 1);
    }
    const decreseQuantity=()=>{
        if(quantity>1){
            setQuantity(quantity - 1);
        }
    }
    return (
        <div className="cart-item">
            <div className="cart-image">
                <img
                    src={product.image}
                    alt={product.name}
                    className="cart-item-image"
                />
            </div>


            <div className="cart-item-info">
                <h3>{product.name}</h3>

                <p className="cart-category">
                    {product.category}
                </p>

                <p className="cart-price">
                    {product.price} DH
                </p>
            </div>

            <div className="cart-quantity">

                <button onClick={decreseQuantity}>-</button>

                <span>{quantity}</span>

                <button onClick={increseQuantity}>+</button>

            </div>

            <button className="delete-product" onClick={() => deleteCart(product.id)}>
                <FaTrash />
            </button>

        </div>
    );
}