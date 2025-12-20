
import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';

export const cartcontext = createContext()
const CartcontextProvider = ({ children }) => {
  const {token} = useContext(AuthContext)
  const [products , setProducts] = useState(null);
  const [numOfCartItems , setNumOfCartItems] = useState(0);
  const [totalPrice , setTotalPrice] = useState(0);
  const [loading , setLoading] = useState(false);
      const AddProductToCart = async (id) => {
        try {
            const {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/cart' , {productId: id} , {
            headers: {
                token:  localStorage.getItem("token")
            }
        });
            await getUserCart();
            return data;
        } catch (error) {
            console.log(error ,"error in add to cart");
        }
        
    }
      const getUserCart = async () => {
        setLoading(true);
        try {
            const {data} = await axios.get('https://ecommerce.routemisr.com/api/v1/cart' , {
            headers: {
                token:  localStorage.getItem("token")
            }
        });
            
            setNumOfCartItems(data.numOfCartItems);
            setProducts(data.data.products);
            setTotalPrice(data.data.totalCartPrice);
            setLoading(false);
            return data;
        } catch (error) {
            console.log(error ,"error in get user cart");
            setLoading(false);
        }
      };
      useEffect(() => {
        if (token){
          getUserCart();
        }
          setProducts(null);
          setNumOfCartItems(0);
          setTotalPrice(0);
      }, [token]);
  return (
    <cartcontext.Provider value={
      {AddProductToCart ,  products , numOfCartItems , totalPrice , loading}}>
      {children}
    </cartcontext.Provider>
  );
};


export default CartcontextProvider;