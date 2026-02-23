import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Component/Navbar";
import Footer from "./Component/Footer";
import SignIn from "./Component/SignIn";
import SingleProduct from "./Pages/SingleProduct";
import ScrollToTop from "./assets/ScrollToTop";
import CartPage from "./Component/Cart";
import Checkout from "./Component/Checkout";
import Wishlist from "./Component/Wishlist";
function App() {
  return (
    <BrowserRouter>
    <Header/>
     <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/single" element={<SingleProduct />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
