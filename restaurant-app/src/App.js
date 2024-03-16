import './App.css';
import Header from './components/Layout/Header';
import Meal from './components/Meals/Meal';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div>
      <Cart />
      <Header />
      <Meal />
    </div>
  );
}

export default App;
