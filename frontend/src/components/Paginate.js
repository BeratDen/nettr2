import { useSelector } from "react-redux";
import { nextProducts } from "../utils";

export const Paginate = () => {
  const { products, count, limit, next, previous } = useSelector(
    (state) => state.product
  );

  const totalPage = [];

  for (let i = 0; i < count / limit; i++) {
    totalPage.push(i);
  }
  let currentPage = `${process.env.REACT_APP_API_URL}products/?page=`;

  return (
    <div>
      {/* Pagination */}
      {/* TODO: set active class end paginate requests  */}
      <div className="p-4 flex items-center justify-center flex-wrap">
        <nav aria-label="Page navigation">
          <ul className="inline-flex">
            {previous && (
              <li>
                <button
                  onClick={(e) => {
                    nextProducts(previous);
                  }}
                  className="h-10 px-5 text-gega-red transition-colors duration-150 rounded-l-lg focus:shadow-outline hover:bg-green-100"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </li>
            )}

            {totalPage.map((page, index) => (
              <li>
                <button
                  onClick={(e) => {
                    nextProducts(`${currentPage}${index + 1}`);
                  }}
                  className={`${
                    next == currentPage + (index + 2)
                      ? "bg-gega-red text-white"
                      : "text-gega-red"
                  } h-10 px-5 transition-colors  duration-150 focus:shadow-outline hover:bg-white hover:text-gega-red`}
                >
                  {console.log(next, currentPage + (index + 2))}
                  {index + 1}
                </button>
              </li>
            ))}

            {/* <li>
              <button className="h-10 px-5 text-white transition-colors duration-150 bg-gega-red focus:shadow-outline">
                2
              </button>
            </li>
            <li>
              <button className="h-10 px-5 text-gega-red transition-colors duration-150 focus:shadow-outline hover:bg-white hover:text-gega-red">
                3
              </button>
            </li> */}
            {next && (
              <li>
                <button
                  onClick={(e) => {
                    nextProducts(next);
                  }}
                  className="h-10 px-5 text-white transition-colors duration-150 bg-gega-red rounded-r-lg focus:shadow-outline hover:bg-white hover:text-gega-red"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};
