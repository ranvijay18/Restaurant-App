import "./Header.css";
import food from "../../assests/food.jpg"
import CartIcon from "../Cart/CartIcon";

const Header = () => {
    return(
        <>
        <div className="header">
        <h1>ReactMeals</h1>
        <span></span>
        <CartIcon />
        </div>
        <div>
             <img src={food} />
        </div>
        </>
    )
   
}

export default Header;