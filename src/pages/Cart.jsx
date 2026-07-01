import CartItem from "./CartItem";
import {products} from '../assets/Data/ListProducts'


export default function Cart( {cartItems,deleteCart}) {
  return (
    <section className="cart">
      <div className="cart-left">
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <span>{cartItems.length} Items</span>
        </div>
         {cartItems.map((product) => (
          <CartItem key={product.id} product={product} deleteCart={deleteCart} />
        ))}
      </div>

      <div className="cart-summary">
        <h2>Order Summary</h2>

        <div className="summary-row">
          <span>Subtotal</span>
          <span>1,250 DH</span>
        </div>

        <div className="summary-row">
          <span>Shipping</span>
          <span>Free</span>
        </div>

        <div className="summary-row">
          <span>Tax</span>
          <span>50 DH</span>
        </div>

        <hr />

        <div className="summary-total">
          <span>Total</span>
          <span>1,300 DH</span>
        </div>

        <button className="checkout-btn">
          Proceed to Checkout
        </button>
      </div>
    </section>
  );
}