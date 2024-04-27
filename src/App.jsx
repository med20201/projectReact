import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import LoginSignup from "./Pages/LoginSignup";
import Cart from "./Pages/Cart";
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import kid_banner from "./Components/Assets/banner_kids.png";
import ShopContextProvider from "./Context/ShopContext";
import Admin from "./Pages/Pages/Admin/Admin";
import AddProduct from "./Pages/Components/AddProduct/AddProduct";
import ListProduct from "./Pages/Components/ListProduct/ListProduct";
import Navbar from './Components/Navbar/Navbar';
const App = () => { 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Shop />,
  },
  {
    path: "/mens",
    element: <ShopCategory banner={men_banner} category="men" />,
  },
  {
    path: "/womens",
    element: <ShopCategory banner={women_banner} category="women" />,
  },
  {
    path: "/kids",
    element: <ShopCategory banner={kid_banner} category="kid" />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/product/:productId",
    element: <Product />,
  },
  {
    path: "/product/:productId",
    element: <Product />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/login",
    element: <LoginSignup />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/addproduct",
    element: <AddProduct />,
  },
  {
    path: "/listproduct",
    element: <ListProduct />,
  },
]);

return (
  <ShopContextProvider>
    
     <RouterProvider router={router} />
  </ShopContextProvider>
)
}

export default App;
