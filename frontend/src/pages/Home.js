import { getProducts } from "../utils";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Poster from "../components/Poster";
import News from "../components/News";
import { AddProduct } from "./product/AddProduct";

export default function Home() {
  const { products, status } = useSelector((state) => state.product);

  console.log(products);

  useEffect(() => {
    console.log("component did mount ?? ");
    getProducts();
  }, []);

  return (
    <div className="bg-black text-white">
      <AddProduct></AddProduct>
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
    </div>
  );
}
