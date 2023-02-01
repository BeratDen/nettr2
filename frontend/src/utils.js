import store from "./stores";
import { productsFetch } from "./stores/product";

export const getProducts = () => {
  store.dispatch(productsFetch());
};
