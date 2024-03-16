import Modal from "../UI/Modal";
import "./Cart.css"

const Cart = () => {
    const cartItems = [];
   return(
    <Modal>
    {cartItems}
    <div className="details">
        <h2>Amount</h2>
        <h2>$ 23</h2>
    </div>
    <div className="action">
        <button className="close">Close</button>
        <button>Order</button>
    </div>
    </Modal>
   )
}


export default Cart;