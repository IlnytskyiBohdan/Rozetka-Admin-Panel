import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/sliceUser";
import productsReducer from "../slices/sliceProducts";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
  },
});
