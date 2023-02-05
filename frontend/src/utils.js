import store from "./stores";
import {
  productsFetch,
  createProduct,
  nextProductFetch,
} from "./stores/product";
import { append, destroy, destroyAll } from "./stores/modal";
import { generatePath } from "react-router";
import routes from "./Routes";
import { useSelector } from "react-redux";

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

export const useModals = () => useSelector((state) => state.modal.modals);
export const createModal = (name, data = false) =>
  store.dispatch(
    append({
      name,
      data,
    })
  );
export const destroyModal = () => store.dispatch(destroy());
export const destroyAllModal = () => store.dispatch(destroyAll());

export const getProducts = () => {
  store.dispatch(productsFetch());
};

export const productCreate = (product) => {
  store.dispatch(createProduct(product));
};

export const nextProducts = (endPoint) => {
  store.dispatch(nextProductFetch(endPoint));
};
