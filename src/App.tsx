import { createElement } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import { routers } from "./routes";

function App() {
  const routeElements = routers.map(({ link, element }) => ({
    path: link,
    element: <DefaultLayout>{createElement(element)}</DefaultLayout>,
  }));

  const router = createBrowserRouter(routeElements);

  return <RouterProvider router={router} />;
}

export default App;
