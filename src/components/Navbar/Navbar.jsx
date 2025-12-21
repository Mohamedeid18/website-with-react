import { useContext, useEffect } from "react";
import logoImg from "./../../assets/images/freshcart-logo.svg"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { AuthContext } from "../../Context/AuthContext";
import { cartcontext } from "../../Context/Cartcontext";

const Navbar = () => {
  const navigate = useNavigate();
  const { token , setToken } = useContext(AuthContext);
  const { numOfCartItems } = useContext(cartcontext);
  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
    navigate("/login");
  }
  return (
    <nav className="p-4 bg-gray-100 text-center">
      <div className="container mx-auto p-2">
        <div className="flex flex-wrap  flex-col md:flex-row items-center justify-between">
          <div className="flex flex-wrap  flex-col md:flex-row items-center justify-between">
            <Link to="/">
              <img src={logoImg} alt="Freshcart Logo" className="w-[120px]" />
            </Link>
            <ul className="flex flex-wrap  flex-col md:flex-row items-center justify-between">
              
              <li className="mx-3 my-3 md:my-0">
                <NavLink to="/" className={({ isActive }) => isActive ? "text-green-400" : ""}>
                Home
                </NavLink>
              </li>
              <li className="mx-2 my-2 md:my-0">
                <NavLink to="/brands" className={({ isActive }) => isActive ? "text-green-400" : ""}>
                Brands
                </NavLink>
              </li>
              <li className="mx-2 my-2 md:my-0">
                <NavLink to="/category" className={({ isActive }) => isActive ? "text-green-400" : ""}>
                Category
                </NavLink>
              </li>
              <li className="mx-2 my-2 md:my-0">
                <NavLink to="/cart" className={({ isActive }) => isActive ? "text-green-400 relative" : "relative"}>
                Cart
                 <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500  border-white rounded-full -top-2 -end-4">{numOfCartItems}</div>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap  flex-col md:flex-row items-center justify-between">
            <div>
              <i className="fa fa-brands fa-youtube ml-2"></i>
              <i className="fa fa-brands fa-facebook ml-2"></i>
              <i className="fa fa-brands fa-twitter ml-2"></i>
              <i className="fa fa-brands fa-linkedin ml-2"></i>
              <i className="fa fa-brands fa-instagram ml-2"></i>
            </div>
            <ul className="flex flex-wrap  flex-col md:flex-row items-center justify-between">
              {token ? <button className="mx-3 my-3 md:my-0" onClick={logout}>Logout</button>:<>
              <li className="mx-3 my-3 md:my-0">
                <NavLink to="/login" className={({ isActive }) => isActive ? "text-green-400" : ""}>
                Login
                </NavLink>
              </li>
              <li className="mx-2 my-2 md:my-0">
                <NavLink to="/register" className={({ isActive }) => isActive ? "text-green-400" : ""}>
                Registor
                </NavLink>
              </li>
              </>}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar