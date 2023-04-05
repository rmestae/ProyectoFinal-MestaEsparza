import { FaShoppingCart } from "react-icons/fa";
import "./CartWidget.css";

import { useContext } from "react"

import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {

  const { getTotalQuantity } = useContext( CartContext )

  const total = getTotalQuantity()

  return (
    <Link to="/cart">
      <div className="container-cart">
        <FaShoppingCart
          style={{
            fontSize: "2rem",
            color: "white",
          }}
        />
        <div className="bubble-counter">
          <span>{total}</span>
        </div>
      </div>
    </Link>
  );
};

export default CartWidget;
