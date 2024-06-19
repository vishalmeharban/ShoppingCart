import Header from "./Components/Header";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart";
import ProductList from "./Components/ProductList";

function App() {
  const [cart, setCart] = useState([]);

  console.log(cart);

  function addToCart(data1) {
    setCart([...cart, {...data1, quantity : 1}]);
  }

  return (
    <div>
      <BrowserRouter>
        <Header count={cart.length}/>

        <Routes>
          <Route
            path="/shop"
            element={<ProductList addToCart={addToCart} />}
          ></Route>
          <Route path="/cart" element={<Cart cart={cart}/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
