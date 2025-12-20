import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Bars } from "react-loader-spinner";
import HomeSlider from "../HomeSlider/HomeSlider";
import CategorySlider from "../CategorySlider/CategorySlider";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { cartcontext } from "../../Context/Cartcontext";
import toast from "react-hot-toast";



const Home = () => {
      const [loading, setLoading] = useState(null)
    const AddProductToCart = useContext(cartcontext);
    const AddToCart = async (id) => {
        setLoading(id);
        const data = await AddProductToCart(id);
        console.log(data);
        if (data?.status === "success"){
            toast.success(data.message, { duration: 2000 });
        }else{
            toast.error(data.message, { duration: 2000 });
        }
        setLoading(null)
    }

  const getProducts = async () => {
    
      return await axios.get(
        "https://ecommerce.routemisr.com/api/v1/products"
      );
      
  };
  const { data, isLoading} = useQuery({
    queryKey: ['products'],
    queryFn: getProducts
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
    <>
        <div className="w-full md:w-[90%] mx-auto">
          {/* slider */}
          <HomeSlider/>
          {/* category slider */}
          <CategorySlider/>
          { /* products */ }
          <div className="flex flex-wrap justify-center items-center">
            {data?.data.data.map((product) => (
              
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4" key={product._id}>
                <div className="p-3 bg-slate-100">
                      <Link to={`/productDetails/${product._id}`}>
                      <img src={product.imageCover} alt={product.title} className="w-full" />
                      <h3 className="mt-3 text-green-700">{product.category.name}</h3>
                      <h3 className=" mt-3">{(product.title).split(" ").splice(0, 2).join(" ")}</h3>
                      <div className="mt-3 flex flex-wrap justify-between items-center">
                        <div>
                          <h2>{product.price} EGP</h2>
                        </div>
                        <div>
                          <i className="fa fa-star text-yellow-400"></i>{product.ratingsAverage}
                        </div>
                      </div>
                      </Link>
                      <button
                        className="w-full text-white bg-green-600 hover:bg-green-700 
                        focus:ring-4 focus:ring-green-300 font-medium rounded-lg 
                        text-sm px-5 py-2"
                        onClick={() => AddToCart(product._id)}
                        disabled={loading === product._id}
                      >
                        {loading == product._id ? <i className="fa fa-spinner fa-spin"></i>: 'Add to cart'}
                      </button>
                    </div>
              </div>
            ))}
          </div>
        </div>
    </>
  );
};

export default Home;
