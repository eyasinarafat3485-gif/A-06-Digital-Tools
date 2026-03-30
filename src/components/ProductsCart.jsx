import React, { useState } from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';



const ProductsCart = ({ product, carts, setCarts }) => {
    const [isBuy, setIsBuy] = useState(false)

    const handleIsBuy = () => {
        setIsBuy(true);
        const isFound = carts.find(item => item.id === product.id);
        // console.log(isFound);
        if (isFound) {
            toast.error("This product already in cart!")
            return;
        }
        setCarts([...carts, product])
        toast.success("Wow your product is successfully added to cart")
    }
    return (
        <div className='border-2 border-gray-300 rounded-2xl p-5 space-y-5'>

            <div className='flex justify-between'>
                <img className='h-15 w-auto' src={product.image} alt="" />

                <span className={`text-xs h-8 w-auto font-bold px-4 py-2 rounded-full 
            ${product.tag === "Best Seller" ? "bg-orange-100 text-orange-700" : ""}
            ${product.tag === "Popular" ? "bg-purple-100 text-purple-700" : ""}
            ${product.tag === "New" ? "bg-green-100 text-green-700" : ""}`}>
                    {product.tag}
                </span>

            </div>
            <h3 className='text-2xl font-bold'>{product.name}</h3>
            <div>
                <p>{product.description}</p>
            </div>
            <div className='text-2xl font-bold'>${product.price} <span className='text-[15px] font-medium'>/Mo</span>
            </div>

            <div className='mt-5'>
                <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3">
                            <FaRegCheckCircle className="text-green-500 text-lg" />
                            <span className="text-slate-500 text-[16px] font-normal">
                                {feature}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
            <button onClick={handleIsBuy} className='btn btn-primary bg-[#8B2CFF] hover:bg-[#7006f1] w-full'> {isBuy === true ? "Buying" : "Buy Now"}
            </button>
        </div>
    );
};

export default ProductsCart;