import { getProducts } from "../utils";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Poster from "../components/Poster";
import News from "../components/News";
import { createModal, useModals } from "../utils";
import Modal from "../components/modals/index";
import { Paginate } from "../components/Paginate";

export default function Home() {
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    getProducts();
  }, []);

  const modals = useModals();

  return (
    <div className="bg-black text-white">
      {modals.length > 0 && <Modal />}

      <section className="py-24 bg-black">
        {/* <!--Movies Content--> */}
        <div className="container flex flex-col lg:flex-row lg:space-x-16 space-y-8 lg:space-y-0">
          {/* <!--Left Content--> */}
          <div className="basis-2/3">
            {/* <!--Titles--> */}
            <div className="flex justify-between">
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
              <button
                onClick={(e) => {
                  createModal("addProduct");
                }}
                className="bg-gega-red text-white rounded py-2 px-6 hover:bg-red-800"
              >
                Create Product
              </button>
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
        <Paginate />
      </section>
    </div>
  );
}
