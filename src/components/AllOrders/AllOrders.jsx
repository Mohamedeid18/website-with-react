import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'
import { Bars } from 'react-loader-spinner';


const AllOrders = () => {
    const {id} = jwtDecode(localStorage.getItem('token'));
        const getAllOrders = async () => {
        return await axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`);
    }
    const {isLoading, data}=useQuery({
        queryKey: ['allOrders'],
        queryFn: getAllOrders
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
    <div className='py-10 px-5 w-full md:w-[80%] mx-auto'
    >{data?.data?.map(order => (
      <div key={order._id} className='p-6 mb-3 bg-slate-100'>
        <h2 className='text-lg font-bold mb-4'>TotalOrderPrice: {order.totalOrderPrice} EGY</h2>
        <h2 className='text-lg font-bold mb-4'>Payment Method type: {order.paymentMethodType}</h2>
        <div className='flex items-center flex-wrap gap-4'>
            {order.cartItems.map(item => (
              <div key={item._id} className='p-2 w-1/4 bg-white border border-gray-300'>
                <h3 className='text-md font-semibold'>Product Name: {item.product.title}</h3>
                <p>Quantity: {item.count}</p>
                <p>Price: {item.price} EGY</p>
                <div className='flex'>
                    <span>Image Product :</span><img src={item.product.imageCover} alt={item.product.title} className='object-contain w-1/3 h-24' />
                </div>
              </div>
            ))}
        </div>
      </div>
    ))}</div>
  )
}

export default AllOrders