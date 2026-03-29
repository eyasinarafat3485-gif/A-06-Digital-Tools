import React from 'react';
const stepsData = [
  {
    id: "01",
    icon: "/user.png", // এখানে আপনি Lucide-react বা FontAwesome আইকন ব্যবহার করতে পারেন
    title: { en: "Create Account", bn: "অ্যাকাউন্ট তৈরি করুন" },
    desc: { 
      en: "Sign up for free in seconds. No credit card required.", 
      bn: "সেকেন্ডের মধ্যে বিনামূল্যে সাইন আপ করুন। কোনো ক্রেডিট কার্ড লাগবে না।" 
    }
  },
  {
    id: "02",
    icon: "/package.png",
    title: { en: "Choose Products", bn: "পণ্য পছন্দ করুন" },
    desc: { 
      en: "Browse our catalog and select the tools that fit your needs.", 
      bn: "আমাদের ক্যাটালগ দেখুন এবং আপনার প্রয়োজনীয় টুলগুলো বেছে নিন।" 
    }
  },
  {
    id: "03",
    icon: "/rocket.png",
    title: { en: "Start Creating", bn: "তৈরি করা শুরু করুন" },
    desc: { 
      en: "Download and start using your premium tools immediately.", 
      bn: "ডাউনলোড করুন এবং এখনই আপনার প্রিমিয়াম টুলগুলো ব্যবহার শুরু করুন।" 
    }
  }
];
const Steps = () => {
    return (
        <div className='bg-gray-200 my-14'>
        <div className='px-6 md:px-16 py-14 mx-auto items-center text-center space-y-3'>
            <h2 className='text-3xl md:text-4xl font-bold'>Get Started in 3 Steps</h2>
            <p>Start using premium digital tools in minutes, not hours.</p>
        </div>
        <div>
            {
                stepsData.map(steps=> <div className=' w-[80%] mx-auto'>
                    <div className='border-2 border-gray-300 rounded-2xl p-5 space-y-3'>
                        <div className='flex justify-between'>
                        <p>{steps.id}</p>
                        <img src={steps.icon} alt="" />
                        </div>

                    </div>
                     </div>)
            }
        </div>
        </div>
    );
};

export default Steps;