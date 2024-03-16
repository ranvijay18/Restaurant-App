import "./CartIcon.css";
import { FaCartPlus } from "react-icons/fa"


const CartIcon = () => {
    return(
        <button>
            <span>
                <FaCartPlus />
            </span>
            <span>Your Cart</span>
            <span className="quantity">3</span>
        </button>
    )
}


export default CartIcon