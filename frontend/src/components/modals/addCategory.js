import { useState } from "react";
import { Header } from "./components/header";
import { ModalTextField } from "./components/ModalText";
import { ModalButton } from "./components/ModalButton";

export default function AddCategory() {
  const [values, setValue] = useState({
    name: "",
  });

  const handleAddCategory = () => {
    setValue({ name: "" });
  };

  return (
    <div className="bg-white rounded-lg shadow relative dark:bg-gray-700">
      <Header title="Add Category" />
      <div className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8">
        <div className="mt-5">
          <ModalTextField
            label="Category Name"
            value={values.name}
            onChange={(e) => setValue({ ...values, name: e.target.value })}
            inputProps={{ type: "text", placeholder: "Jhon Doe Categories" }}
          />
        </div>

        <ModalButton onClick={handleAddCategory}>Add Category</ModalButton>
      </div>
    </div>
  );
}
