import React from "react";
import Panier from "./components/Panier/Panier";
import Filters from "./components/Filter/Filters";
import Products from "./components/Product/Products";

const App = () => {
  return (
    <div>
      <Filters />
      <Products />
      <Panier />
    </div>
  );
};

export default App;
