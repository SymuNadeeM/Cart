import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import data from "./data";
import Main from "./Components/Main";
import Back from "./Components/Back";

function App() {
  const { productData } = data;
  const [cartItem, setCartItem] = useState([]);

  const onAdd = (product) => {
    const exist = cartItem.find((x) => x.id === product.id);

    if (exist) {
      setCartItem(
        cartItem.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItem([...cartItem, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItem.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItem(cartItem.filter((x) => x.id !== product.id));
    } else {
      setCartItem(
        cartItem.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div className="App">
      <Header countProduct={cartItem.length} />
      <div className="container">
        <Main onAdd={onAdd} productData={productData} />
        <Back onRemove={onRemove} onAdd={onAdd} cartItem={cartItem} />
      </div>
    </div>
  );
}

export default App;
