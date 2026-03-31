import React from 'react';
import { CgShoppingCart } from 'react-icons/cg';

const Navbar = ({cartCount}) => {
    return (
        <div>
            <nav className="flex items-center justify-between px-2 md:px-16 py-4 bg-white shadow-sm">
                <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg">
                        <img className='h-5 md:h-10 w-auto' src="DigiTools.png" alt="" />
                    </div> 
                </div>

                <ul className="hidden md:flex items-center gap-8 text-lg font-medium text-gray-800">
                    <li className="cursor-pointer hover:text-[#7006f1]">Products</li>
                    <li className="cursor-pointer hover:text-[#7006f1]">Features</li>
                    <li className="cursor-pointer hover:text-[#7006f1]">Pricing</li>
                    <li className="cursor-pointer hover:text-[#7006f1]">Testimonials</li>
                    <li className="cursor-pointer hover:text-[#7006f1]">FAQ</li>
                </ul>

                <div className="flex items-center gap-2 md:gap-4">

                    <button className='flex md:gap-2 gap-1 bg-gray-100 cursor-pointer hover:bg-gray-200 rounded p-2'>
                        <CgShoppingCart size={20} />( {cartCount} )
                    </button>
                    <button className='btn'>Login</button>
                    <button className="bg-[#8B2CFF] text-white px-2 py-1.5 md:px-6 md:py-2 rounded-full text-[13px] font-medium md:text-lg md:font-semibold hover:bg-[#7006f1] transition cursor-pointer">Get Started    
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;