import "./Header.css";
import food from "../../assests/food.jpg"

const Header = () => {
    return(
        <>
        <div className="header">
        <h1>ReactMeals</h1>
        <button className="cart">Cart</button>
        </div>
        <div>
             <img src={food} />
        </div>
        </>
    )
   
}

export default Header;