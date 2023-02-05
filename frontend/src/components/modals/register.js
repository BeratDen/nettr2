import { createModal } from "../../utils";
import { useState } from "react";
import { Header } from "./components/header";
import { ModalTextField } from "./components/ModalText";
import { ModalButton } from "./components/ModalButton";
import { ModalCheck } from "./components/ModalCheck";
import { Link } from "react-router-dom";

export default function RegisterModal({ data, close }) {
  const [values, setValue] = useState({
    username: data.username,
    email: "",
    password: data.password,
  });

  const handleRegister = () => {
    setValue({ username: "", password: "" });
  };

  return (
    <div className="bg-white rounded-lg shadow relative dark:bg-gray-700">
      <Header title="Register" />
      <div className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8">
        <div className="mt-5">
          <ModalTextField
            label="Username"
            value={values.username}
            onChange={(e) => setValue({ ...values, name: e.target.value })}
            inputProps={{ type: "text", placeholder: "Jhon Doe" }}
          />
        </div>
        <div>
          <ModalTextField
            label="E-Mail"
            value={values.email}
            onChange={(e) => setValue({ ...values, name: e.target.value })}
            inputProps={{ type: "email", placeholder: "JhonDoe@mail.com" }}
          />
        </div>
        <div>
          <ModalTextField
            label="Password"
            value={values.password}
            onChange={(e) => setValue({ ...values, name: e.target.value })}
            inputProps={{ type: "password", placeholder: "******" }}
          />
        </div>

        <ModalButton onClick={handleRegister}>Register</ModalButton>
      </div>
    </div>
  );
}
