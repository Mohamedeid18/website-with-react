
import axios from 'axios';
import { createContext } from 'react';

export const cartcontext = createContext()
const CartcontextProvider = ({ children }) => {
      const AddProductToCart = async (id) => {
        try {
            const {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/cart' , {productId: id} , {
            headers: {
                token:  localStorage.getItem("token")
            }
        });
            return data;
        } catch (error) {
            console.log(error ,"error in add to cart");
        }
        
    }
  return (
    <cartcontext.Provider value={AddProductToCart}>
      {children}
    </cartcontext.Provider>
  );
};


export default CartcontextProvider;