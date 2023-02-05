import { useState } from "react";
import { Header } from "./components/header";
import { ModalTextField } from "./components/ModalText";
import { ModalButton } from "./components/ModalButton";
import { createModal, productCreate } from "../../utils";

export default function AddProduct() {
  const [values, setValue] = useState({
    name: "",
    descriptions: "",
  });

  const handleAddProduct = () => {
    setValue({ name: "", descriptions: "" });
    productCreate(values);
  };

  return (
    <div className="bg-white rounded-lg shadow relative dark:bg-gray-700">
      <Header title="Add Product" />
      <div className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8">
        <div className="mt-5">
          <ModalTextField
            label="Name"
            value={values.name}
            onChange={(e) => setValue({ ...values, name: e.target.value })}
            inputProps={{ type: "text", placeholder: "Jhon Doe" }}
          />
        </div>
        <div>
          <ModalTextField
            label="Description"
            value={values.descriptions}
            onChange={(e) =>
              setValue({ ...values, descriptions: e.target.value })
            }
            inputProps={{ type: "text", placeholder: "Jhon Doe" }}
          />
        </div>

        <div className=" flex justify-between">
          <button
            onClick={(e) => {
              createModal("addCategory");
            }}
            className=" w-5/12 h-9 rounded hover:bg-gray-300 felx items-center justify-center font-bold"
          >
            Add Category +
          </button>
          <button
            onClick={(e) => {
              createModal("addActor");
            }}
            className="w-5/12 h-9 rounded hover:bg-gray-300 felx items-center justify-center font-bold"
          >
            Add Actor +
          </button>
        </div>

        <ModalButton onClick={handleAddProduct}>Add Product</ModalButton>
      </div>
    </div>
  );
}
