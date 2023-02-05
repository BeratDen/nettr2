import HomeLayout from "./pages/HomeLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Celebrities from "./pages/Celebrities";
import { BlogLayout, Blog } from "./pages/blog";
import { NewsLayout, News } from "./pages/news";

const routes = [
  {
    path: "/",
    name: "home",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        name: "index",
        element: <Home />,
      },
      {
        name: "about",
        path: "about",
        element: <About />,
      },
      {
        name: "celebrities",
        path: "celebrities",
        element: <Celebrities />,
      },
      {
        name: "blog",
        path: "blog",
        element: <BlogLayout />,
        children: [
          {
            name: "index",
            index: true,
            element: <Blog />,
          },
        ],
      },
      {
        name: "news",
        path: "news",
        auth: false,
        element: <NewsLayout />,
        children: [
          {
            index: true,
            name: "index",
            element: <News />,
          },
        ],
      },
    ],
  },
];

const authMap = (routes) =>
  routes.map((route) => {
    // if (route?.auth) {
    //   route.element = <PrivateRoute>{route.element}</PrivateRoute>;
    // }
    // admin denetimi istendiğinde admin denetimi için component oluştur ve aynı şekilde diğer şeyleride değiştirebilirsin
    // if (route?.admin) {
    //     route.element = <AdminRoute>{route.element}</AdminRoute>;
    //   }
    if (route?.children) {
      route.children = authMap(route.children);
    }
    return route;
  });

authMap(routes);

export default authMap(routes);
