import { getProducts } from "../utils";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Poster from "../components/Poster";
import News from "../components/News";

export default function Home() {
  const { products, status } = useSelector((state) => state.product);

  useEffect(() => {
    console.log("component did mount ?? ");
    getProducts();
  }, []);
  return (
    <div>
      <section className="py-24 bg-black">
        {/* <!--Movies Content--> */}
        <div className="container flex flex-col lg:flex-row lg:space-x-16 space-y-8 lg:space-y-0">
          {/* <!--Left Content--> */}
          <div className="basis-2/3">
            {/* <!--Titles--> */}
            <div className="flex space-x-2 divide-x divide-gega-red divide-opacity-50 mb-8 pl-10 lg:pl-0">
              <h2 className="text-gega-red">
                <a href="#">Latest</a>
              </h2>
              <h2 className="text-gega-grey pl-2 hover:text-gega-red duration-500">
                <a href="#">Popular</a>
              </h2>
              <h2 className="text-gega-grey pl-2 hover:text-gega-red duration-500">
                <a href="#">Best</a>
              </h2>
            </div>
            {/* <!--Images Container--> */}
            <div className="flex flex-wrap">
              {/* <!--Image 1--> */}
              {products.map((product) => (
                <Poster
                  key={product.id}
                  name={product.name}
                  description={product.descriptions}
                  categories={product.category}
                  actors={product.actor}
                ></Poster>
              ))}
            </div>
          </div>
          <News></News>
        </div>
      </section>
      {/* <div
        style={{ display: "grid", justifyContent: "center", marginTop: "10px" }}
      >
        {products.map((product) => (
          <div key={product.id} style={{ marginBottom: "5px", width: "500px" }}>
            <div
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
      </div> */}
    </div>
  );
}
