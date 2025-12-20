import { useQuery } from "@tanstack/react-query";
import { cartcontext } from './../../Context/Cartcontext';
import { Bars } from "react-loader-spinner";
import { useContext } from "react";

const Cart = () => {
  const {products ,  totalPrice , loading} = useContext(cartcontext);
    if (loading) {
    return (
      <div className="h-screen bg-green-500 flex items-center justify-center">
          <Bars
          height="80"
          width="80"
          color="#ffffff"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          />
        </div> 
    );
  }
  return (
    <div className="w-full md:w-[90%] mx-auto bg-slate-300 p-3 my-3">
      <h1 className="text-3xl font-semibold text-gray-700 my-5">Shop Cart :</h1>
      <h2 className="font-mono text-green-600 text-lg mb-3">Total Cart Price : {totalPrice} EGP</h2>
      <div>
       {products?.map((product, index) => (
        <div key={index} className="flex flex-wrap justify-center items-center border-b-[1px] border-gray-400">
          {/* image */}
          <div className="w-1/6 p-4">
            <div>
                  <img src={product.product.imageCover} alt={product.product.title} className="w-full h-32 object-center" />
            </div>
          </div>
          {/* content */}
          <div className="w-4/6 p-4">
            <h2 className="text-xl font-semibold text-gray-700">{product.product.title}</h2>
            <h3 className="text-green-600 text-xl">Price : {product.price} EGP</h3>
            <button className="text-lg text-gray-700"><i className="text-green-600 mr-1 fa fa-trash"></i>Remove</button>
          </div>
          <div className="w-1/6 p-4">
          <div className="flex flex-wrap justify-center items-center">
            <button className="border-4 border-green-600 w-8 h-10">+</button>
            <h3 className="font-bold mx-2">{product.count}</h3>
            <button className="border-4 border-green-600 w-8 h-10">-</button>
          </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Cart