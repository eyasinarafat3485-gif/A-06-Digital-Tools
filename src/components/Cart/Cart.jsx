import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({carts, setCarts}) => {
    // console.log(carts);
    const totalPrice= carts.reduce((sum, item) => sum + item.price, 0)

    const handlePayment=()=>{
        setCarts([]);
        toast.success("Payment successfully done")
    }
    const handleDelete=(item)=>{
        // console.log(item)
        const filterArray=carts.filter(c => c.id != item.id)
        // console.log(filterArray)
        setCarts(filterArray);
        
        toast.error("Your product is deleted!")
    }
    return (
        <div>
        <div className='border-2 border-gray-300 rounded-2xl w-[90%] mx-auto gap-5 p-5 md:p-10'>
            <h2 className='font-bold text-2xl'>Your Cart</h2>
            {
                carts.length === 0 ? <p className='text-2xl text-center font-bold'>Cart is empty</p> : <>
                 <div>
            {
                carts.map(item =>
                    <div className='flex justify-between items-center border rounded-2xl p-3 mt-5 bg-gray-100' key={item.id}>
                        <div className='flex items-center gap-3'>
                        <div>
                            <img className='h-25 w-25 md:h-40 md:w-40 object-contain' src={item.image} alt="" />
                        </div>

                        <div className='space-y-3'>
                            <h2 className='text-lg md:text-2xl font-bold'>{item.name}</h2>
                            <p className='font-medium md:font-semibold'>${item.price}</p>
                            
                        </div>
                        </div>

                        <div >
                        
                        <button onClick={()=>handleDelete(item)} className='btn text-red-400 font-bold'>Remove</button>
                        </div>
                    </div>)
            }
            <div className='flex justify-between py-4 px-1 text-2xl md:text-3xl font-bold'>
                <div>Total</div>
                <div>${totalPrice}</div>
            </div>
            <button onClick={handlePayment} className='btn w-full py-5 md:py-8 bg-[#8B2CFF] hover:bg-[#7006f1] text-xl md:text-2xl text-white rounded-2xl'>Proceed to Checkout</button>

            </div>
                </>
            }
           
            
            
        </div>
        </div>
    );
};

export default Cart;