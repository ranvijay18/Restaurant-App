import "./CartIcon.css";
import { FaCartPlus } from "react-icons/fa"
import { useContext } from "react";
import CartContext from "../../store/cart-context";


const CartIcon = (props) => {

    const cartCtx = useContext(CartContext);

    const numberOfItems = cartCtx.items.length;
    return(
        <button onClick={props.onClick}>
            <span>
                <FaCartPlus />
            </span>
            <span>Your Cart</span>
            <span className="quantity">{numberOfItems}</span>
        </button>
    )
}


export default CartIcon