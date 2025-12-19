import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Bars } from "react-loader-spinner";



const Home = () => {

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
        <div className="md:w-[90%] mx-auto">
          <div className="flex flex-wrap justify-center items-center">
            {data?.data.data.map((product) => (
              <div
                key={product._id}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4"
              >
                <div className="p-3 bg-slate-100">
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
                </div>
              </div>
            ))}
          </div>
        </div>
    </>
  );
};

export default Home;
