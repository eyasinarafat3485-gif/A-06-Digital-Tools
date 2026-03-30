import React from 'react';
const stepsData = [
  {
    id: "01",
    icon: "/user.png", 
    title: "Create Account" ,
    desc: "Sign up for free in seconds. No credit card required to get started."
     
  },
  {
    id: "02",
    icon: "/package.png",
    title: "Choose Products",
    desc: "Browse our catalog and select the tools that fit your needs."
     
  },
  {
    id: "03",
    icon: "/rocket.png",
    title: "Start Creating",
    desc: "Download and start using your premium tools immediately."
      
  }
];
const Steps = () => {
  return (
    <section className="py-16 px-4 bg-gray-200 text-center my-15">
      <h2 className="text-3xl font-bold mb-2">Get Started In 3 Steps</h2>
      <p className="text-gray-500 mb-12">Start using premium digital tools in minutes, not hours.</p>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {stepsData.map((step) => (
          <div key={step.id} className="relative py-15 px-12 border border-gray-100 rounded-2xl shadow-sm bg-white hover:shadow-md transition-shadow">
            
            <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold px-2 py-2 rounded-full">
              {step.id}
            </span>

            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6"> <img className='w-10 h-auto' src={step.icon} alt="" />
            </div>

            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
    
};

export default Steps;