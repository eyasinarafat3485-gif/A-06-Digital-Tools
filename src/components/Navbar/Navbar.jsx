import React from 'react';
import { CgShoppingCart } from 'react-icons/cg';

const Navbar = () => {
    return (
        <div>
            <nav className="flex items-center justify-between px-6 md:px-16 py-4 bg-white shadow-sm">
                {/* 1. Logo Section */}
                <div className="flex items-center gap-2">
                    <div className=" p-2 rounded-lg">
                        <img className='h-10 w-auto' src="DigiTools.png" alt="" />
                    </div>
                    
                </div>

                {/* 2. Menu Links */}
                <ul className="hidden md:flex items-center gap-8 text-lg font-medium text-gray-800">
                    <li className="cursor-pointer hover:text-[#7006f1]">Products</li>
                    <li className="cursor-pointer hover:text-[#7006f1]">Features</li>
                    <li className="cursor-pointer hover:text-[#7006f1]">Pricing</li>
                    <li className="cursor-pointer hover:text-[#7006f1]">Testimonials</li>
                    <li className="cursor-pointer hover:text-[#7006f1]">FAQ</li>
                </ul>

                {/* 3. Action Buttons */}
                <div className="flex items-center gap-4">
                    <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                        <CgShoppingCart size={20} />
                        {/* <LuShoppingCart className="text-red-500" size={22} /> */}
                    </button>
                    <button className='btn'>Login</button>
                    <button className="bg-[#8B2CFF] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#7006f1] transition cursor-pointer">
                        Get Started
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;