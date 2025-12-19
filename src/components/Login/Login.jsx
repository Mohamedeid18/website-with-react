import axios from "axios";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { AuthContext } from "../../Context/AuthContext";

const Login = () => {
  const { setToken } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const User = {
    email: "",
    password: "",
  };
  const Yupvalid = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().matches(/^[A-Z].{5,}$/,"Password must start with capital letter and contain at least 6 characters").required("Password is required"),
  });
  const signup = async (values) => {
    setLoading(true);
    try {
      const { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signin",
        values
      );
      localStorage.setItem("token", data.token);
      setToken(data.token);
      toast.success(data.message, { duration: 2000 });
      setLoading(false);
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message, { duration: 2000 });
      setLoading(false);
    }
  };
  const formik = useFormik({
    initialValues: User,
    onSubmit: signup,
    validationSchema: Yupvalid,

  });
  return (
    <div className="flex-1 py-7">
      <div className="container mx-auto">
        <h1 className="text-green-600 hover:text-green-500 text-5xl font-bold text-center mb-12">
          Login Now
        </h1>
        <div className="w-[50%] mx-auto">
          <form className="space-y-6" onSubmit={formik.handleSubmit}>
            {/* Email */}
            <div className="relative z-0 w-full group">
              <input
                type="email"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent 
                border-0 border-b-2 border-gray-300 appearance-none 
                focus:outline-none focus:ring-0 focus:border-green-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute text-sm text-gray-500 duration-300 transform 
                -translate-y-6 scale-75 top-3 -z-10 origin-[0]
                peer-focus:text-green-600 peer-placeholder-shown:scale-100 
                peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
                peer-focus:-translate-y-6"
              >
                Email address
              </label>
              {formik.errors.email && formik.touched.email ? <div className="p-2 mb-4 text-sm text-red-800 rounded-sm bg-red-100 " role="alert">
                <span className="font-medium">Error!</span> {formik.errors.email}
              </div> : ''}
            </div>

            {/* Password */}
            <div className="relative z-0 w-full group">
              <input
                type="password"
                id="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent 
                border-0 border-b-2 border-gray-300 appearance-none 
                focus:outline-none focus:ring-0 focus:border-green-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="password"
                className="absolute text-sm text-gray-500 duration-300 transform 
                -translate-y-6 scale-75 top-3 -z-10 origin-[0]
                peer-focus:text-green-600 peer-placeholder-shown:scale-100 
                peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
                peer-focus:-translate-y-6"
              >
                Password
              </label>
              {formik.errors.password && formik.touched.password ? <div className="p-2 mb-4 text-sm text-red-800 rounded-sm bg-red-100 " role="alert">
                <span className="font-medium">Error!</span> {formik.errors.password}
              </div> : ''}
            </div>
            {/* Submit */}
            <button
              type="submit"
              className=" text-white bg-green-600 hover:bg-green-700 
              focus:ring-4 focus:ring-green-300 font-medium rounded-lg 
              text-sm px-5 py-2.5"
            >
              {loading ? <i className="fa fa-spinner fa-spin"></i> : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
