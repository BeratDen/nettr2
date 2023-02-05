import { createModal } from "../../utils";
import { useState } from "react";
import { Header } from "./components/header";
import { ModalTextField } from "./components/ModalText";
import { ModalButton } from "./components/ModalButton";
import { ModalCheck } from "./components/ModalCheck";
import { Link } from "react-router-dom";

export default function LoginModal({ data, close }) {
  const [values, setValue] = useState({
    username: "",
    password: "",
    check: false,
  });

  const handleLogin = () => {
    setValue({ username: "", password: "", check: false });
  };

  return (
    <div className="bg-white rounded-lg shadow relative dark:bg-gray-700">
      <Header title="Giriş Yap" />
      <div className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8">
        <div className="mt-5">
          <ModalTextField
            label="Username"
            value={values.username}
            onChange={(e) => setValue({ ...values, username: e.target.value })}
            inputProps={{ type: "text", placeholder: "Jhon Doe" }}
          />
        </div>
        <div>
          <ModalTextField
            label="Password"
            value={values.password}
            onChange={(e) => setValue({ ...values, password: e.target.value })}
            inputProps={{ type: "password", placeholder: "******" }}
          />
        </div>

        <div className="flex justify-between">
          <ModalCheck
            label="Remember me"
            value={values.check}
            onChange={(e) => setValue({ ...values, check: e.target.value })}
          />
          <Link
            to="#"
            className="text-sm text-blue-700 hover:underline dark:text-blue-500"
          >
            Lost Password?
          </Link>
          {/* TODO: add forgot password model */}
        </div>

        <ModalButton onClick={handleLogin}>Login</ModalButton>

        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Not registered?
          <a
            href="#"
            onClick={() =>
              createModal("register", {
                username: values.username,
                password: values.password,
              })
            }
            className="text-blue-700 hover:underline dark:text-blue-500"
          >
            Create account
          </a>
        </div>
      </div>
    </div>
  );
}

{
  /* <Button
        onClick={() =>
          createModal("register", {
            name: "berat",
            surname: "deniz",
          })
        }
      >
        Register modal
      </Button> */
}
