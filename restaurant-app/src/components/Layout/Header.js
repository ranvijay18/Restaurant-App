import "./Header.css";
import food from "../../assests/food.jpg"
import CartIcon from "../Cart/CartIcon";

const Header = (props) => {
    return(
        <>
        <div className="header">
        <h1>ReactMeals</h1>
        <span></span>
        <CartIcon onClick={props.onShowCart} onClose={props.onHideCart}/>
        </div>
        <div>
             <img src={food} />
        </div>
        </>
    )
   
}

export default Header;