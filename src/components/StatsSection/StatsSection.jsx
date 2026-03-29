import React from 'react';

const StatsSection = () => {
  const stats = [
    { label: 'Active Users', value: '50K+' },
    { label: 'Premium Tools', value: '200+' },
    { label: 'Rating', value: '4.9' },
  ];

  return (
    
    <div className="bg-[#8B2CFF] py-10 px-5">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-around text-white">
        {stats.map((stat, index) => (
          <React.Fragment key={index}>
            {/* Stat Item */}
            <div className="flex flex-col items-center text-center py-6 md:py-0">
              <span className="text-5xl font-bold mb-2">{stat.value}</span>
              <span className="text-lg opacity-80">{stat.label}</span>
            </div>

            
            {index !== stats.length - 1 && (
              <div className="hidden md:block h-16 w-1 bg-white/30" />
            )}
          </React.Fragment>
        ))}
      </div>
      
    </div>
    
  );
};

export default StatsSection;