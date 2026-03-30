import React from 'react';

const Cart = ({carts, setCarts}) => {
    // console.log(carts);
    const totalPrice= carts.reduce((sum, item) => sum + item.price, 0)

    const handlePayment=()=>{
        setCarts([])
    }
    const handleDelete=(item)=>{
        // console.log(item)
        const filterArray=carts.filter(c => c.id != item.id)
        // console.log(filterArray)
        setCarts(filterArray)
    }
    return (
        <div>
        <div className='border-2 border-gray-300 rounded-2xl w-[90%] mx-auto gap-5 p-10'>
            <h2 className='font-bold text-2xl'>Your Cart</h2>
            {
                carts.length === 0 ? <p className='text-2xl text-center font-bold'>Cart is empty</p> : <>
                 <div>
            {
                carts.map(item =>
                    <div className='flex justify-between items-center border rounded-2xl p-3 mt-5 bg-gray-100' key={item.id}>
                        <div className='flex items-center gap-3'>
                        <div>
                            <img className='h-40 w-40 object-contain' src={item.image} alt="" />
                        </div>

                        <div className='space-y-3'>
                            <h2 className='text-2xl font-bold'>{item.name}</h2>
                            <p className='font-semibold'>${item.price}</p>
                            {/* <p>{item.description}</p> */}
                        </div>
                        </div>

                        <div >
                        
                        <button onClick={()=>handleDelete(item)} className='btn text-red-400 font-bold'>Remove</button>
                        </div>
                    </div>)
            }
            <div className='flex justify-between py-4 px-1 text-3xl font-bold'>
                <div>Total</div>
                <div>${totalPrice}</div>
            </div>
            <button onClick={handlePayment} className='btn w-full py-8 bg-[#8B2CFF] hover:bg-[#7006f1] text-2xl text-white rounded-2xl'>Proceed to Checkout</button>

            </div>
                </>
            }
           
            
            
        </div>
        </div>
    );
};

export default Cart;