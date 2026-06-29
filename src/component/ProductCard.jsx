export default function ProductCard({ image,name, category, price,}) {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />

      <div className="product-info">
        <h3>{name}</h3>
        <p className="category">{category}</p>
        <p className="price">${price}</p>

        <div className="product-btns">
          <button className="btn-add">Add to Cart</button>
          <button className="btn-delete">Delete</button>
        </div>
      </div>
    </div>
  );
}