
import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';

export const cartcontext = createContext()
const CartcontextProvider = ({ children }) => {
  const {token} = useContext(AuthContext)
  const [products , setProducts] = useState([]);
  const [numOfCartItems , setNumOfCartItems] = useState(0);
  const [totalPrice , setTotalPrice] = useState(0);
  const [loading , setLoading] = useState(false);
  const [cartId, setCartId] = useState(null)
  // add product to cart
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
    // get user cart
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
            setCartId(data?.data?._id);
            return data;
        } catch (error) {
            console.log(error ,"error in get user cart");
            setLoading(false);
        }
      };
      // update cart
      const UpdateCart = async (productId , count) => {
        try {
            const {data} = await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}` , {
                count: count
            } , {
            headers: {
                token:  localStorage.getItem("token")
            }
            });
            setNumOfCartItems(data.numOfCartItems);
            setProducts(data.data.products);
            setTotalPrice(data.data.totalCartPrice);
        } catch (error) {
            console.log(error ,"error in update cart");
            getUserCart();
        }
      };
      //delete product from cart
      const removeItem = async (productId) => {
        try {
            const {data} = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}` , {
            headers: {
                token:  localStorage.getItem("token")
            }
        });
            setNumOfCartItems(data.numOfCartItems);
            setProducts(data.data.products);
            setTotalPrice(data.data.totalCartPrice);
        } catch (error) {
            console.log(error ,"error in delete product from cart");
            getUserCart();
        }
      };
      //clear all products from cart
      const ClearCart = async () => {
        try {
            const {data} = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart` , {
            headers: {
                token:  localStorage.getItem("token")
            }
        });
            setNumOfCartItems(0);
            setProducts([]);
            setTotalPrice(0);
        } catch (error) {
            console.log(error ,"error in clear cart");
            getUserCart();
        }
      };
      // payment
      // on token change
      useEffect(() => {
        if (token){
          getUserCart();
        }
          setProducts([]);
          setNumOfCartItems(0);
          setTotalPrice(0);
      }, [token]);
  return (
    <cartcontext.Provider value={
      {AddProductToCart ,  products , numOfCartItems , totalPrice , loading , UpdateCart , removeItem , ClearCart , cartId ,setNumOfCartItems ,setTotalPrice ,setProducts}}>
      {children}
    </cartcontext.Provider>
  );
};


export default CartcontextProvider;