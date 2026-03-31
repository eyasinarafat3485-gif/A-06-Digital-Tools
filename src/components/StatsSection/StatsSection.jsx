import React from 'react';

const StatsSection = () => {
  const stats = [
    { label: 'Active Users', value: '50K+' },
    { label: 'Premium Tools', value: '200+' },
    { label: 'Rating', value: '4.9' },
  ];

  return (
    
    <div className="bg-[#8B2CFF] py-5 md:py-10 px-1">
      <div className="mx-auto flex flex-col-3 md:flex-row items-center justify-around text-white">
        {stats.map((stat, index) => (
          <>
           
            <div className="flex flex-col items-center text-center py-6 md:py-0">
              <span className="text-3xl md:text-5xl font-bold mb-2">{stat.value}</span>
              <span className="text-lg opacity-80">{stat.label}</span>
            </div>

            
            {index !== stats.length - 1 && (
              <div className="hidden md:block h-5 md:h-15 w-1 bg-white" />
            )}
          </>
        ))}
      </div>
      
    </div>
    
  );
};

export default StatsSection;