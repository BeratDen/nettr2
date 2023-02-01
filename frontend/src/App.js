import logo from "./logo.svg";
import "./App.css";
import { getProducts } from "./utils";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function App() {
  const { products, status } = useSelector((state) => state.product);

  useEffect(() => {
    console.log("component did mount ?? ");
    getProducts();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {status}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </header>
      <div
        style={{ display: "grid", justifyContent: "center", marginTop: "10px" }}
      >
        {products.map((product) => (
          <div style={{ marginBottom: "5px", width: "500px" }}>
            <div
              key={product.id}
              style={{
                border: "3px solid black",
                width: "50%",
              }}
            >
              <div>{product.name}</div>
              <div>{product.descriptions}</div>
              <hr />
              <div style={{ marginBottom: "5px" }}>
                <div>Categoriler</div>
                {product.category.map((category) => (
                  <div key={category.id}>
                    <div>{category.name}</div>
                  </div>
                ))}
              </div>
              <hr />
              <div style={{ marginBottom: "5px" }}>
                <div>Aktörler</div>
                {product.actor.map((actor) => (
                  <div key={actor.id}>
                    <div>{actor.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
