import HomePage from "~/pages/HomePage";
import ShoppePage from "~/pages/ShoppePage";
import TikiPage from "~/pages/TikiPage";
import WeatherPage from "~/pages/WeatherPage";

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
  {
    link: "/shoppe",
    title: "Shoppe",
    element: ShoppePage,
  },
  {
    link: "/weather",
    title: "Weather",
    element: WeatherPage,
  },
];

export { routers };
