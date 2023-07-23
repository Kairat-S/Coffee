import "./App.css";
// import { Router } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./Page/MainPage";
import CoffeePage from "./Page/CoffeePage";
import GoodsPage from "./Page/GoodsPage";
import CoffeeItemPage from "./Page/CoffeeItemPage";
import Wrapper from "./Components/Wrapper";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Wrapper></Wrapper>,
      children: [
        {
          index: true,
          element: <MainPage></MainPage>,
        },
        {
          path: "GoodsPage",
          element: <GoodsPage></GoodsPage>,
        },
        {
          path: "CoffeePage",
          element: <CoffeePage></CoffeePage>,
        },
        {
          path: "CoffeePage/:id",
          element: <CoffeeItemPage></CoffeeItemPage>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
