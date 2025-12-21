import { useQuery } from "@tanstack/react-query";
import { cartcontext } from './../../Context/Cartcontext';
import { Bars } from "react-loader-spinner";
import { useContext } from "react";

const Cart = () => {
  const {products ,  totalPrice , loading , UpdateCart , removeItem , ClearCart} = useContext(cartcontext);
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
    <div className="flex-1  w-full md:w-[90%] mx-auto bg-slate-300 p-3 my-3">
      {products.length === 0 ? <div className="flex justify-center items-center h-96">
        <h2 className="text-2xl font-bold">Your Cart is Empty</h2>
      </div> : 
      <>
      <h1 className="text-3xl font-semibold text-gray-700 my-5">Shop Cart :</h1>
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-mono text-green-600 text-lg mb-4">Total Cart Price : {totalPrice} EGP</h2>
        <button onClick={ClearCart} className="px-4 py-2 bg-transparent border border-red-600 text-red-600 rounded hover:bg-red-700 hover:text-white"><i className="fa fa-trash mr-1 text-lg"></i>Clear Cart</button>
      </div>
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
            <h3 className="text-green-600 text-xl my-2">Price : {product.price} EGP</h3>
            <button onClick={() => removeItem(product.product._id)} className="text-lg text-red-700 border border-red-600 rounded px-2 py-1 hover:bg-red-600 hover:text-white group"><i className="text-red-600 group-hover:text-white mr-1 fa fa-trash"></i>Remove</button>
          </div>
          <div className="w-1/6 p-4">
          <div className="flex flex-wrap justify-center items-center">
            <button onClick={()=>UpdateCart(product.product._id ,product.count +1)} disabled={loading} className="border-4 border-green-600 w-8 h-10 hover:bg-green-600 hover:text-white">+</button>
            <h3 className="font-bold mx-2">{product.count}</h3>
            <button onClick={()=>UpdateCart(product.product._id ,product.count -1)} disabled={loading} className="border-4 border-green-600 w-8 h-10 hover:bg-green-600 hover:text-white">-</button>
          </div>
          </div>
        </div>
      ))}
      </div>
      </>
      }
    </div>
  )
}

export default Cart