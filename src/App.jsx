import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Component/Navbar";
import Footer from "./Component/Footer";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/SmartWoman/" element={<Home />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
