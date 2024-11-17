import Navbar from "./components/Navbar/Navbar";
import Cart from "./pages/Cart";
import LoginPage from "./pages/LoginPage";
import Product from "./pages/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // Redux only knows synchronous behaviour, so to perform async functions we need a middleware and the most common one is thunk
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
