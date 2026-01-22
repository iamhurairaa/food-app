import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart"  element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
