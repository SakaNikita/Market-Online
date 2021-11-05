import { configureStore } from "@reduxjs/toolkit";
import panierReducer from "../Features/panier/panierSlice";
import productsReducer from "../Features/product/productsSlice";

export default configureStore({
  reducer: {
    panier: panierReducer,
    products: productsReducer,
  },
});
