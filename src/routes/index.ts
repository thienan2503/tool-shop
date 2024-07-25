import HomePage from "~/pages/HomePage";
import TikiPage from "~/pages/TikiPage";

const routers = [
  {
    link: "/",
    title: "Home",
    element: HomePage,
  },
  {
    link: "/tiki",
    title: "Tiki",
    element: TikiPage,
  },
];

export { routers };
