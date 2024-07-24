import TikiPage from "~/pages/TikiPage";

const routers = [
  {
    link: "/",
    title: "Home",
    element: TikiPage,
  },
  {
    link: "/tiki",
    title: "Tiki",
    element: TikiPage,
  },
];

export { routers };
