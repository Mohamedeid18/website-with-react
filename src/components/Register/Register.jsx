

const Register = () => {
  return (
    <div className="flex-1 py-7">
      <div className="container mx-auto">
        <h1 className="text-green-600 hover:text-green-500 text-5xl font-bold text-center mb-12">Register</h1>
        <div className="w-[50%] mx-auto">
          <form className="space-y-6">
            {/* Full Name */}
            <div className="relative z-0 w-full group">
              <input
                type="text"
                name="full_name"
                id="full_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent 
                border-0 border-b-2 border-gray-300 appearance-none 
                focus:outline-none focus:ring-0 focus:border-green-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="full_name"
                className="absolute text-sm text-gray-500 duration-300 transform 
                -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                peer-focus:left-0 peer-focus:text-green-600 
                peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Full name
              </label>
            </div>

            {/* Email */}
            <div className="relative z-0 w-full group">
              <input
                type="email"
                id="email"
                name="email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent 
                border-0 border-b-2 border-gray-300 appearance-none 
                focus:outline-none focus:ring-0 focus:border-green-600 peer"
                placeholder=" "
                required
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
            </div>

            {/* Password */}
            <div className="relative z-0 w-full group">
              <input
                type="password"
                id="password"
                name="password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent 
                border-0 border-b-2 border-gray-300 appearance-none 
                focus:outline-none focus:ring-0 focus:border-green-600 peer"
                placeholder=" "
                required
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
            </div>

            {/* Confirm Password */}
            <div className="relative z-0 w-full group">
              <input
                type="password"
                id="confirm"
                name="confirm_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent 
                border-0 border-b-2 border-gray-300 appearance-none 
                focus:outline-none focus:ring-0 focus:border-green-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="confirm"
                className="absolute text-sm text-gray-500 duration-300 transform 
                -translate-y-6 scale-75 top-3 -z-10 origin-[0]
                peer-focus:text-green-600 peer-placeholder-shown:scale-100 
                peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
                peer-focus:-translate-y-6"
              >
                Confirm password
              </label>
            </div>

            {/* Phone */}
            <div className="relative z-0 w-full group">
              <input
                type="tel"
                id="phone"
                name="phone_number"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent 
                border-0 border-b-2 border-gray-300 appearance-none 
                focus:outline-none focus:ring-0 focus:border-green-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="phone"
                className="absolute text-sm text-gray-500 duration-300 transform 
                -translate-y-6 scale-75 top-3 -z-10 origin-[0]
                peer-focus:text-green-600 peer-placeholder-shown:scale-100 
                peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
                peer-focus:-translate-y-6"
              >
                Phone number
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className=" text-white bg-green-600 hover:bg-green-700 
              focus:ring-4 focus:ring-green-300 font-medium rounded-lg 
              text-sm px-5 py-2.5"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register