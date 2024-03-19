import "./Items.css"
import { useState,useContext } from "react";
import CartContext from "../../store/cart-context";


const Items = (props) => {

    const [amountIsValid, setAmountIsValid] = useState(true);
    const cartCtx = useContext(CartContext);

    // const price = `$${props.price.toFixed(2)}`;

  
    const submitHandler = (event) => {
      
        event.preventDefault();
      const enteredAmount = event.target.amount.value;
      const enteredAmountNumber = +enteredAmount;
  
      if (
        enteredAmount.trim().length === 0 ||
        enteredAmountNumber < 1 ||
        enteredAmountNumber > 5
      ) {
        setAmountIsValid(false);
        return;
      }
  
      cartCtx.addItem({
        id: props.keys,
        dish: props.items.dish,
        amount:  event.target.amount.value,
        price: props.items.price
      });
      console.log(cartCtx);
     
    };

 
   return(
    <>
    <div className="meal">
    <div>
    <h2>{props.items.dish}</h2>
    <p>{props.items.description}</p>
    <h3>$ {props.items.price}</h3>
    </div>
    <div className="amount">
        <form onSubmit={submitHandler}>
            <label className="head">Amount </label>
            <input name="amount" type="number" defaultValue="1"/>
            <br/>
            <br/>
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
        </form>
    </div>
    </div>
    <hr />
    </>
   )
}


export default Items; 