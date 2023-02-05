import { configureStore } from "@reduxjs/toolkit";
import product from "./product";
import modal from "./modal";

const store = configureStore({
  reducer: {
    product,
    modal,
  },
});

export default store;
