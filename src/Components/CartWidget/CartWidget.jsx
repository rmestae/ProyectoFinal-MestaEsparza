import {FaShoppingCart} from "react-icons/fa"
import "./CartWidget.css"
import { Link } from "react-router-dom";

const CartWidget = () => {
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
          <span>0</span>
        </div>
      </div>
    </Link>
  )
}

export default CartWidget