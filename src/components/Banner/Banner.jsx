import React from 'react';

const Banner = () => {
    return (
        <section className="min-h-[80vh] flex items-center justify-center bg-white px-6 md:px-16  py-14">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-blue-50 border border-blue-100">
                        <span className="text-sm w-4 h-4"></span>
                        <span className="text-[#8B2CFF] font-medium text-sm">New: AI-Powered Tools Available</span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold ">
                        <span className=" block">Supercharge Your Digital Workflow</span>
                    </h1>

                    <p className="text-gray-600 text-lg md:text-xl max-w-lg">
                        Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. Explore Products
                    </p>

                    <div className='space-x-5'>
                    <button className="bg-[#8B2CFF] text-white px-7 py-4 rounded-full font-semibold hover:bg-[#7006f1] transition cursor-pointer">Explore Products
                    </button>

                    <button className='btn btn-outline px-10 py-7 text-[#8B2CFF] rounded-full font-semibold '><img src="Play.png" alt="" /> Watch Demo</button>
                    </div>
                </div>

                <div className="flex justify-center">
                    <img className="w-full h-120 object-contain" src="banner.png" alt="" />
                </div>

            </div>
        </section>
    );
};

export default Banner;