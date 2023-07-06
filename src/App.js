import { useState } from "react";
import "./App.css";
import Header from "./Component/Layout/Header";
import Meals from "./Component/Meals/Meals";
import Cart from "./Component/Cart/Cart";
import CartProvider from "./Store/CartProvider";
function App() {
  const [cartisShown, setCartisShown] = useState(false);
  const cartHideHandler = () => {
    setCartisShown(false);
  };
  const cartShowHandler = () => {
    setCartisShown(true);
  };
  return (
    <CartProvider>
      {cartisShown && <Cart onHideCart={cartHideHandler} />}
      <Header onShowCart={cartShowHandler} />
      
      <mains>
        <Meals />
      </mains>
    </CartProvider>
  );
}

export default App;
