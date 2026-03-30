import React from 'react';
import { BiCheck } from 'react-icons/bi';
// import { Check } from 'lucide-react';

const Transparent = () => {
  const plans = [
    {
      name: 'Starter',
      price: '0',
      desc: 'Perfect for getting started',
      features: ['Access to 10 free tools', 'Basic templates', 'Community support', '1 project per month'],
      isPopular: false,
    },
    {
      name: 'Pro',
      price: '29',
      desc: 'Best for professionals',
      features: ['Access to all premium tools', 'Unlimited templates', 'Priority support', 'Unlimited projects', 'Cloud sync', 'Advanced analytics'],
      isPopular: true,
    },
    {
      name: 'Enterprise',
      price: '99',
      desc: 'For teams and businesses',
      features: ['Everything in Pro', 'Team collaboration', 'Custom integrations', 'Dedicated support', 'SLA guarantee', 'Custom branding'],
      isPopular: false,
    },
  ];

  return (
    <section className="py-15 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
        <p className="text-gray-500">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto items-center">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative p-8 rounded-3xl border-2 transition-all duration-300 ${plan.isPopular
                ? 'bg-[#8B2CF5] text-white scale-105 shadow-xl border-transparent z-10'
                : 'bg-white text-slate-900 border-gray-300'
              }`}>

            {plan.isPopular && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-200 text-yellow-800 text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                Most Popular
              </span>
            )}

            <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
            <p className={`text-sm mb-6 ${plan.isPopular ? 'text-purple-100' : 'text-gray-500'}`}>
              {plan.desc}
            </p>

            <div className="flex items-baseline mb-8">
              <span className="text-4xl font-bold">${plan.price}</span>
              <span className={`text-lg ml-1 ${plan.isPopular ? 'text-purple-200' : 'text-gray-400'}`}>/Month</span>
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <BiCheck className={`w-5 h-5 ${plan.isPopular ? 'text-white' : 'text-green-500'}`} />
                  {feature}
                </li>
              ))}
            </ul>

            <button className={`w-full py-3 cursor-pointer rounded-xl font-bold transition-colors ${plan.isPopular
                ? 'bg-white text-purple-600 hover:bg-gray-100'
                : 'bg-[#8B2CF5] text-white hover:bg-purple-700'
              }`}>
              {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started Free'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Transparent;