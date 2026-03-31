import React from 'react';

const Transform = () => {
    return (
        <section className="w-full py-10 md:py-20 px-4 bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white text-center">
      <div className="max-w-4xl mx-auto">
        
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready To Transform Your Workflow?
        </h2>

        {/* Description */}
        <p className=" text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Join thousands of professionals who are already using Digitools to work smarter. 
          Start your free trial today.
        </p>

        {/* Buttons Container */}
        <div className="flex flex-col-2 sm:flex-row items-center justify-center gap-4 mb-8">
          {/* White Button */}
          <button className="bg-white cursor-pointer text-purple-700 px-2 py-1 md:px-8 Md:py-3 rounded-full font-medium md:font-semibold hover:bg-gray-100 transition-colors w-full sm:w-auto">
            Explore Products
          </button>
          
          {/* Outline Button */}
          <button className="border cursor-pointer border-white text-white px-2 py-1 md:px-8 Md:py-3 rounded-full font-medium md:font-semibold hover:bg-white/10 transition-colors w-full sm:w-auto">
            View Pricing
          </button>
        </div>

        {/* Footer Text */}
        <p className="text-[16px]">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
    );
};

export default Transform;