import './CartItem.css';

const CartItem = (props) => {
  const price = `$${props.price}`;
  console.log(props);

  return (
    <li className='cart-item'>
      <div>
        <h2>{props.dish}</h2>
        <div className='summary'>
          <span className='price'>{price}</span>
          <span className='amount'>x {props.amount}</span>
        </div>
      </div>
      <div className='actions'>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;