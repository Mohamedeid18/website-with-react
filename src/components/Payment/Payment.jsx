import { useContext, useState } from "react"
import { cartcontext } from "../../Context/Cartcontext";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Payment = () => {
    const navigatory = useNavigate();
    const { cartId , setNumOfCartItems , setTotalPrice , setProducts } = useContext(cartcontext);
    const [detials, setDetials] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [loadingCash, setLoadingCash] = useState(false);
    const [loadingOnline, setLoadingOnline] = useState(false);

    const cashPayment = async () => {
        setLoadingCash(true);
        const paymentData = {
            shippingAddress:{
                details: detials,
                phone: phone,
                city: city
            }
        };
        try {
            const {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`, paymentData , {
            headers: {
                token:  localStorage.getItem("token")
            }
            } ,);
            setNumOfCartItems(0);
            setTotalPrice(0);
            setProducts([]);
            setLoadingCash(false);
            navigatory("/");
            return data;
        } catch (error) {
            console.log(error ,"error in payment"); 
            setLoadingCash(false);
             
        }
    }

    //online payment 
    const onlinePayment = async () =>{
        setLoadingOnline(true);
      const paymentData = {
            shippingAddress:{
                details: detials,
                phone: phone,
                city: city
            }
        };
      try {
        const {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}`, paymentData,{
        headers: {
          token: localStorage.getItem("token")
        },
        params: {
          url: "http://localhost:5173"
        }
      })
      window.open(data.session.url , "_blank");
      setLoadingOnline(false);
      return data;
      } catch (error) {
        console.log(error ,'error from online payment');
        setLoadingOnline(false);
      }
    }

    
  return (
    <div className="py-10 px-5 w-full md:w-[60%] mx-auto">
        <h1 className="text-3xl font-semibold text-gray-700 my-5">Payment Page</h1>
        <div className="space-y-6">
            <div className="relative z-0 w-full group">
              <input
                type="text"
                id="details"
                name="details"
                onChange={(e) => {setDetials(e.target.value)}}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent 
                border-0 border-b-2 border-gray-300 appearance-none 
                focus:outline-none focus:ring-0 focus:border-green-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="details"
                className="absolute text-sm text-gray-500 duration-300 transform 
                -translate-y-6 scale-75 top-3 -z-10 origin-[0]
                peer-focus:text-green-600 peer-placeholder-shown:scale-100 
                peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
                peer-focus:-translate-y-6"
              >
                Detials
              </label>
               
            </div>
            <div className="relative z-0 w-full group">
              <input
                type="tel"
                id="phone"
                name="phone"
                onChange={(e) => {setPhone(e.target.value)}}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent 
                border-0 border-b-2 border-gray-300 appearance-none 
                focus:outline-none focus:ring-0 focus:border-green-600 peer"
                placeholder=" "
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
            <div className="relative z-0 w-full group">
              <input
                id="city"
                name="city"
                onChange={(e) => {setCity(e.target.value)}}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent 
                border-0 border-b-2 border-gray-300 appearance-none 
                focus:outline-none focus:ring-0 focus:border-green-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="city"
                className="absolute text-sm text-gray-500 duration-300 transform 
                -translate-y-6 scale-75 top-3 -z-10 origin-[0]
                peer-focus:text-green-600 peer-placeholder-shown:scale-100 
                peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
                peer-focus:-translate-y-6"
              >
                City
              </label>
               
            </div>
            <div className="flex gap-4">
              <button onClick={cashPayment} className="px-4 py-2 bg-green-600 border border-green-600 text-white rounded hover:bg-green-700 ">
                  {loadingCash ? <i className="fa fa-spinner fa-spin"></i> : "Cash Payment"} </button>
              <button onClick={onlinePayment} className="px-4 py-2 bg-green-600 border border-green-600 text-white rounded hover:bg-green-700 ">
                  {loadingOnline ? <i className="fa fa-spinner fa-spin"></i> : "Online Payment"} </button>
            </div>

        </div>
    </div>
  )
}


export default Payment