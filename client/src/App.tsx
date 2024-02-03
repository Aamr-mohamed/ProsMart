import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./scenes/home/Home";
import ItemsDetails from "./scenes/itemDetails/ItemsDetails";
import Checkout from "./scenes/checkout/Checkout";
import Confirmation from "./scenes/checkout/confirmation";
import Navbar from "./scenes/global/Navbar";
import CartMenu from "./scenes/global/CartMenu";
import SignUp from "./scenes/signUp/sigup";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="item/:itemId" element={<ItemsDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="checkout/sucess" element={<Confirmation />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
        <CartMenu />
      </BrowserRouter>
    </div>
  );
}

export default App;
