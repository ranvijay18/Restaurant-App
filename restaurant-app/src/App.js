import './App.css';
import Header from './components/Layout/Header';
import Meal from './components/Meals/Meal';
import Cart from './components/Cart/Cart';
import { useState } from 'react';

function App() {

  const [cartShow, setCartShow] = useState(false);

  const handleShowCart = () => {
      setCartShow(true);
  };

  const handleHideCart = () => {
     setCartShow(false);
  };


  return (
    <div>
      {cartShow && <Cart onHideCart = {handleHideCart}/> }
      <Header onShowCart = {handleShowCart} />
      <Meal />
    </div>
  );
}

export default App;
