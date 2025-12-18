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

const App = () => {
  const router = createBrowserRouter([
    {path: "", element: <Layout /> , children: [
    {path: "/", element: <Home /> },
    {path: "/cart", element: <Cart /> },
    {path: "/login", element: <Login /> },
    {path: "/register", element: <Register /> },
    {path: "/brands", element: <Brands /> },
    {path: "/category", element: <Category /> },
    {path: "*", element: <Error/> }
    ]}
  ])
  return (
    <>
      <Toaster/>
      <RouterProvider router={router} />
    </>
  )
}

export default App