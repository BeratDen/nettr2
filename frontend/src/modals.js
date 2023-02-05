import LoginModal from "./components/modals/login";
import RegisterModal from "./components/modals/register";
import AddProduct from "./components/modals/addProduct";
import AddActor from "./components/modals/addActor";
import AddCategory from "./components/modals/addCategory";

const modals = [
  {
    name: "login",
    element: LoginModal,
  },
  {
    name: "register",
    element: RegisterModal,
  },
  {
    name: "addProduct",
    element: AddProduct,
  },
  {
    name: "addActor",
    element: AddActor,
  },
  {
    name: "addCategory",
    element: AddCategory,
  },
];

export default modals;
