import Modal from "../UI/Modal";
import "./Cart.css"

const Cart = (props) => {
    const cartItems = [];
   return(
    <Modal onClose={props.onHideCart}>
    {cartItems}
    <div className="details">
        <h2>Amount</h2>
        <h2>$ 23</h2>
    </div>
    <div className="action">
        <button onClick={props.onHideCart} className="close">Close</button>
        <button>Order</button>
    </div>
    </Modal>
   )
}


export default Cart;