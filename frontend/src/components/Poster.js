export default function Poster({ name, description, categories, actors }) {
  return (
    <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3">
      {/* <!--Image--> */}
      <img
        src={require("./images/mv1.jpg")}
        className="group-hover:scale-110 group-hover:opacity-50 duration-500"
      />
      {/* <!--Image Detail Container--> */}
      <div className="absolute px-6 bottom-8">
        <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">
          {name}
        </h3>
        <p className="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">
          {description}
        </p>
        {/* <!--Icons Container--> */}
        <div className="absolute flex space-x-8 text-gega-grey opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
          <a className="hover:text-gega-red" href="#">
            <i className="fa-solid fa-play"></i>
          </a>
          <a className="hover:text-gega-red" href="#">
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
