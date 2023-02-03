import { NavLink, Outlet } from "react-router-dom";
import { url } from "../utils";

export default function HomeLayout() {
  return (
    <>
      <header class="bg-black py-6 lg:py-12 text-gega-grey uppercase">
        {/* <!--Header Container--> */}
        <div class="container flex items-center justify-between space-x-8 lg:space-x-16">
          {/* <!--Logo--> */}

          <NavLink
            to={url("home")}
            className="pl-4 md:pl-0 text-4xl lg:text-6xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-gega-red to-gega-grey whitespace-nowrap"
          >
            NET TR
          </NavLink>

          {/* <!--Mobile Menu--> */}
          <div class="block md:hidden pr-4">
            <div class="space-y-1 cursor-pointer">
              <div class="bg-gega-grey w-8 h-1 rounded-full"></div>
              <div class="bg-gega-grey w-8 h-1 rounded-full"></div>
              <div class="bg-gega-grey w-8 h-1 rounded-full"></div>
            </div>
          </div>

          {/* <!--Navigation--> */}
          <nav class="hidden md:flex justify-between flex-1">
            {/* <!--Menu--> */}
            <div class="flex items-center lg:text-lg space-x-4 lg:space-x-8">
              <NavLink
                to={url("home")}
                className="hover:text-gega-melon transition duration-500"
                style={({ isActive }) => ({
                  color: isActive ? "red" : "",
                })}
              >
                movies
              </NavLink>

              <NavLink
                to={url("home.celebrities")}
                className="hover:text-gega-melon transition duration-500"
                style={({ isActive }) => ({
                  color: isActive ? "red" : "",
                })}
              >
                celebrities
              </NavLink>
              <NavLink
                to={url("home.blog")}
                className="hover:text-gega-melon transition duration-500"
                style={({ isActive }) => ({
                  color: isActive ? "red" : "",
                })}
              >
                blog
              </NavLink>
              <NavLink
                to={url("home.news")}
                className="hover:text-gega-melon transition duration-500"
                style={({ isActive }) => ({
                  color: isActive ? "red" : "",
                })}
              >
                news
              </NavLink>
              <NavLink
                to={url("home.about")}
                className="hover:text-gega-melon transition duration-500"
                style={({ isActive }) => ({
                  color: isActive ? "red" : "",
                })}
              >
                about
              </NavLink>
            </div>
            {/* <!--Login Area--> */}
            <div class="flex items-center space-x-4 lg:space-x-8">
              {/* <!--Search Area--> */}
              <form>
                <div class="group border-r px-4 mx-4 py-1 border-gega-red">
                  <input
                    type="text"
                    class="opacity-0 group-hover:opacity-100 bg-transparent border-b border-gega-red focus:outline-none w-24 lg:w-44 transition duration-500 "
                  />
                  <button class="-ml-4 group-hover:ml-0 transition duration-500">
                    <i class="fas fa-search group-hover:text-gega-red transition duration-500"></i>
                  </button>
                </div>
              </form>
              {/* <!--Signup Area--> */}
              <div class="flex items-center space-x-4 lg:space-x-8 lg:text-lg">
                <a href="#">Login</a>
                <a
                  href="#"
                  class="bg-gega-red px-3 py-1 hover:bg-rose-600 hover:text-gega-grey cursor-pointer transition duration-500 whitespace-nowrap"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <Outlet></Outlet>
    </>
  );
}
