import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Brands from './components/Brands/Brands';
import Category from './components/Category/Category';
import Error from './components/Error/Error';
import Layout from './components/Layout/Layout';
import { Toaster } from "react-hot-toast";
import AuthContextProvider from "./Context/AuthContext";
import ProtectRoute from "./components/ProtectRoute/ProtectRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductDetials from "./components/ProductDetials/ProductDetials";
import CartcontextProvider from "./Context/Cartcontext";

const App = () => {
  const queryClient = new QueryClient();
  const router = createBrowserRouter([
    {path: "", element: <Layout /> , children: [
    {path: "/", element: <ProtectRoute><Home /></ProtectRoute> },
    {path: "/productDetails/:id", element: <ProtectRoute><ProductDetials /></ProtectRoute> },
    {path: "/cart", element: <ProtectRoute><Cart /></ProtectRoute> },
    {path: "/login", element: <Login /> },
    {path: "/register", element: <Register /> },
    {path: "/brands", element: <ProtectRoute><Brands /></ProtectRoute> },
    {path: "/category", element: <ProtectRoute><Category /></ProtectRoute> },
    {path: "*", element: <Error/> }
    ]}
  ])
  return (
    <QueryClientProvider client={queryClient}>
    <AuthContextProvider>
      <CartcontextProvider>
      <Toaster/>
      <RouterProvider router={router} />
      </CartcontextProvider>
    </AuthContextProvider>
    </QueryClientProvider>
  )
}

export default App