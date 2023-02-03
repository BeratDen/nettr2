export default function News() {
  return (
    <>
      {/* <!--Right Content--> */}
      <div className="basis-1/3 pl-10 lg:pl-0">
        {/* <!--Title--> */}
        <h2 className="text-gega-grey mb-8">Hot News</h2>
        {/* <!--News Container--> */}
        <div className="flex flex-row lg:flex-col lg:h-full lg:pb-16 justify-start lg:justify-between flex-wrap lg:flex-nowrap space-y-4">
          {/* <!--Item--> */}
          <div className="flex items-center group basis-3/4 md:basis-1/2">
            {/* <!--News Image Container--> */}
            <div className="basis-1/3 h-full">
              <img
                src={require("../components/images/new1.jpg")}
                className="h-full w-full object-cover"
                alt=""
              />
            </div>
            {/* <!--Item Dteail--> */}
            <div className="pl-8 basis-2/3 text-gega-grey group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, delectus.
              </p>
              <p className="text-xs tracking-tighter mt-2 font-bold font-gemunu">
                ON NOW 01 2022
              </p>
            </div>
          </div>
          {/* <!--Item--> */}
          <div className="flex items-center group basis-3/4 md:basis-1/2">
            {/* <!--News Image Container--> */}
            <div className="basis-1/3 h-full">
              <img
                src={require("../components/images/new1.jpg")}
                className="h-full w-full object-cover"
                alt=""
              />
            </div>
            {/* <!--Item Dteail--> */}
            <div className="pl-8 basis-2/3 text-gega-grey group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, delectus.
              </p>
              <p className="text-xs tracking-tighter mt-2 font-bold font-gemunu">
                ON NOW 01 2022
              </p>
            </div>
          </div>
          {/* <!--Item--> */}
          <div className="flex items-center group basis-3/4 md:basis-1/2">
            {/* <!--News Image Container--> */}
            <div className="basis-1/3 h-full">
              <img
                src={require("../components/images/new1.jpg")}
                className="h-full w-full object-cover"
                alt=""
              />
            </div>
            {/* <!--Item Dteail--> */}
            <div className="pl-8 basis-2/3 text-gega-grey group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, delectus.
              </p>
              <p className="text-xs tracking-tighter mt-2 font-bold font-gemunu">
                ON NOW 01 2022
              </p>
            </div>
          </div>
          {/* <!--Item--> */}
          <div className="flex items-center group basis-3/4 md:basis-1/2">
            {/* <!--News Image Container--> */}
            <div className="basis-1/3 h-full">
              <img
                src={require("../components/images/new1.jpg")}
                className="h-full w-full object-cover"
                alt=""
              />
            </div>
            {/* <!--Item Dteail--> */}
            <div className="pl-8 basis-2/3 text-gega-grey group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, delectus.
              </p>
              <p className="text-xs tracking-tighter mt-2 font-bold font-gemunu">
                ON NOW 01 2022
              </p>
            </div>
          </div>
          {/* <!--Item--> */}
          <div className="flex items-center group  basis-3/4 md:basis-1/2 md:hidden lg:flex">
            {/* <!--News Image Container--> */}
            <div className="basis-1/3 h-full">
              <img
                src={require("../components/images/new1.jpg")}
                className="h-full w-full object-cover"
                alt=""
              />
            </div>
            {/* <!--Item Dteail--> */}
            <div className="pl-8 basis-2/3 text-gega-grey group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, delectus.
              </p>
              <p className="text-xs tracking-tighter mt-2 font-bold font-gemunu">
                ON NOW 01 2022
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
