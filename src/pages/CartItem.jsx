export default function CartItem({image,name,price,quantity}){
    return(
        <div className="cart-item">
            <img src="" alt="image" />
            <div>
                <h4>T-short</h4>
                <p>$12</p>
                <div className="quantity">
                    <button>-</button>
                    <span></span>
                    <button>+</button>
                </div>
            </div>
            <button className="remove-btn">Remove</button>
        </div>
    )
}