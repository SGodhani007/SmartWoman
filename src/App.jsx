import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Component/Navbar";
import Footer from "./Component/Footer";
import SignIn from "./Component/SignIn";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/SmartWoman/" element={<Home />} />
        <Route path="/SmartWoman/signin" element={<SignIn />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
