import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Bars } from "react-loader-spinner";
import { useContext, useState } from "react";
import { cartcontext } from "../../Context/Cartcontext";
import toast from "react-hot-toast";

const ProductDetials = () => {
    const [loading, setLoading] = useState(false)
    const { id } = useParams();
    const AddProductToCart = useContext(cartcontext);
    const AddToCart = async () => {
        setLoading(true);
        const data = await AddProductToCart(id);
        if (data.status === "success"){
            toast.success(data.message, { duration: 2000 });
            setLoading(false);
        }else{
            toast.error(data.message, { duration: 2000 });
            setLoading(false);
        }
        
    }
    
    const getProductDetials = async () => {
        return await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
    }
    const { data, isLoading } = useQuery({
        queryKey: ['productDetials' , id],
        queryFn: getProductDetials
    })
    
    if (isLoading) {
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
    <div className="w-full md:w-[80%] mx-auto flex-1 translate-y-20 mb-10">
        <div className="flex flex-wrap justify-center items-center">
            <div className="md:w-1/3 p-5">
            <div>
                <img src={data?.data.data.imageCover} alt=""  className="w-full h-64 object-contain"/>
            </div>
            </div>
            <div className="md:w-2/3 p-5">
            <h1 className="text-3xl font-bold mb-4">{data?.data.data.title}</h1>
            <p className="mb-4">{data?.data.data.description}</p>
            <h3 className="mb-4">{data?.data.data.category.name}</h3>
            <div className="mb-3 flex flex-wrap justify-between items-center">
                <div>
                <h2>{data?.data.data.price} EGP</h2>
                </div>
                <div>
                <i className="fa fa-star text-yellow-400"></i>{data?.data.data.ratingsAverage}
                </div>
            </div>
            <button
              className="w-full text-white bg-green-600 hover:bg-green-700 
              focus:ring-4 focus:ring-green-300 font-medium rounded-lg 
              text-sm px-5 py-2"
              onClick={AddToCart}
            >
                {loading ? <i className="fa fa-spinner fa-spin"></i>: 'Add to cart'}
            </button>
            </div>
        </div>
    </div>
  )
}

export default ProductDetials