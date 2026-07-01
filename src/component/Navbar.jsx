import { FaShoppingCart } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
 function Navbar({cartCount}) {
return (
<header className="header" >
  
      <nav className="navbar">
        <div className="navbar-logo">
             <FaBagShopping className="bagIcon" size={25} />
          <h1>My <span>Shop</span> </h1>
        </div>

        <ul className="navbar-menu">
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/about">About</a></li>
          <input
          type="text"
          placeholder="Search..."
          className="navbar-search"
        />
        </ul>

        

       <div className="paniers">
         <Link to="/cart"><FaShoppingCart className="icon" size={24} /></Link>
        
        <span>{cartCount}</span>
       </div>
      </nav>
      
     
    </header>
  );
}
export default Navbar;