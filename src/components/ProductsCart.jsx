import React, { useState } from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';


const ProductsCart = ({product}) => {
    const [isBuy, setIsBuy] = useState(false)
    return (
        <div className='border-2 border-gray-300 rounded-2xl p-5 space-y-3'>
                    
     
                    <div className='flex justify-between'>
                        <img src="" alt="" />
                         <span className=" top-6 right-6  text-orange-700 bg-orange-100 text-xs font-bold px-3 py-1 rounded-full">{product.tag} </span>
                    </div>
                    <h3 className='text-2xl font-bold'>{product.name}</h3>
                    <div>
                        <p>{product.description}</p>
                    </div>
                    <div className='text-2xl font-bold'>${product.price} <span className='text-[15px] font-medium'>/Mo</span>
                    </div>

                    <div className='text-xl flex flex-1 justify-center gap-3'>
                        <ul className="space-y-4">
                            <li key={product.id} className="flex items-center gap-3">
                                <FaRegCheckCircle />
                                <span className="text-slate-600 text-[17px] font-medium leading-tight">
                                    {product.features}</span>         
                            </li>
                        </ul>
                
                    </div>
                    <button onClick={()=> setIsBuy(true)} className='btn btn-primary bg-[#8B2CFF] hover:bg-[#7006f1] w-full'>
                        {isBuy === true ? "Buying" : "Buy Now"}
                    </button>
                </div>
    );
};

export default ProductsCart;