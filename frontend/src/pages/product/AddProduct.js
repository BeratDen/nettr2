import { Button } from "../../components/Button";
import { TextField } from "../../components/TextField";
import { useState } from "react";
import { productCreate } from "../../utils";

export function AddProduct() {
  const [values, setValue] = useState({
    name: "",
    description: "",
  });

  const handleAddProduct = () => {
    setValue({ name: "", description: "" });
    productCreate(values);
  };

  return (
    <div className="max-w-xl mx-auto">
      <TextField
        label="Name"
        value={values.name}
        onChange={(e) => setValue({ ...values, name: e.target.value })}
        inputProps={{ type: "text", placeholder: "Jhon Doe" }}
      ></TextField>
      <br />
      <TextField
        label="Description"
        value={values.description}
        onChange={(e) => setValue({ ...values, description: e.target.value })}
        inputProps={{ type: "text", placeholder: "Jhon Doe" }}
      ></TextField>
      <Button onClick={handleAddProduct}>Submit</Button>
    </div>
  );
}
