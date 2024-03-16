import "./CartIcon.css";
import { FaCartPlus } from "react-icons/fa"


const CartIcon = (props) => {
    return(
        <button onClick={props.onClick}>
            <span>
                <FaCartPlus />
            </span>
            <span>Your Cart</span>
            <span className="quantity">3</span>
        </button>
    )
}


export default CartIcon