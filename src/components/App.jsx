import "./App.css";

//Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Context
import { LightModeProvider } from "../context/lightMode";
import { CartContextProvider } from "../context/cartContext";

//Components
import Navbar from "./Navbar/Navbar";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import { ToastContainer } from "react-toastify";
import Cart from "./Cart/Cart";
import Checkout from "./Checkout/Checkout";

const App = () => {
  return (
    <div>
      <LightModeProvider>
        <BrowserRouter>
          <CartContextProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route
                path="/category/:category"
                element={<ItemListContainer />}
              />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<h1>Ruta no encontrada</h1>} />
            </Routes>
            <ToastContainer />
          </CartContextProvider>
        </BrowserRouter>
      </LightModeProvider>
    </div>
  );
};

export default App;
