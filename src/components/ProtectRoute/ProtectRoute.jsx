import { Navigate } from "react-router-dom";


const ProtectRoute = ({ children }) => {
  localStorage.getItem("token");
  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" />;
  }
  return children;
}
export default ProtectRoute