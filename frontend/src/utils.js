import store from "./stores";
import { productsFetch, createProduct } from "./stores/product";
import { generatePath } from "react-router";
import routes from "./Routes";

// generate auto path
export const url = (path, params = {}) => {
  let lastRoute, url;
  path = path.split(".").map((p) => {
    if (!lastRoute) {
      lastRoute = routes.find((r) => r.name === p);
      url = lastRoute.path;
    } else {
      lastRoute = lastRoute.children.find((r) => r.name === p);
      url += "/" + lastRoute.path;
    }
  });
  return generatePath(url.replace(/\/\//gi, "/"), params);
};

export const getProducts = () => {
  store.dispatch(productsFetch());
};

export const productCreate = (product) => {
  store.dispatch(createProduct(product));
};
