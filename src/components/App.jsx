import "./App.css";

//Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// //Context
// import { DarkModeProvider } from "../context/darkMode";

import Navbar from "./Navbar/Navbar";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import Cart from "./Cart/Cart";

const App = () => {
  return (
    <>
      {/* <DarkModeProvider> */}
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/cart"  element={<Cart />} />
          </Routes>
        </BrowserRouter>
      {/* </DarkModeProvider> */}
    </>
  );
};

export default App;
