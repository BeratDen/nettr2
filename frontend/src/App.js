import logo from "./logo.svg";
import "./App.css";

import routes from "./Routes";
import { useRoutes } from "react-router-dom";

function App() {
  return useRoutes(routes);
}

export default App;
