import React from 'react';

const Footer = () => {
  return (
    <div className='bg-black mt-5'>
      <div className='footer-container'>
        <div className='grid grid-cols-2 text-gray-400 md:grid-cols-6 pt-10 md:pt-25'>
          <div className='col-span-2 flex flex-col p-5 md:p-10'>
            <p className='font-bold'> Staffing Agency </p>
            <p className='my-2 text-xs font-thin'>A  Staffing Agency is a physical location where an individual or group of people carry out work-related activities, such as an office, factory, store, or other commercial or industrial space.</p>
          </div>
          <div className='col-span-1 flex flex-col p-3 md:p-5'>
            <p className='mb-1 font-bold'>Company</p>
            <p className='my-1 text-xs font-thin'>About Us</p>
            <p className='my-1 text-xs font-thin'>Work</p>
            <p className='my-1 text-xs font-thin'>Latest News</p>
            <p className='my-1 text-xs font-thin'>Careers</p>
          </div>
          <div className='col-span-1 flex flex-col p-3 md:p-5'>
            <p className='mb-1 font-bold'>Product</p>
            <p className='my-1 text-xs font-thin'>Prototype</p>
            <p className='my-1 text-xs font-thin'>Plans & Pricing</p>
            <p className='my-1 text-xs font-thin'>Customers</p>
            <p className='my-1 text-xs font-thin'>Integrations</p>
          </div>
          <div className='col-span-1 flex flex-col p-3 md:p-5'>
            <p className='mb-1 font-bold'>Support</p>
            <p className='my-1 text-xs font-thin'>Help Desk</p>
            <p className='my-1 text-xs font-thin'>Sales</p>
            <p className='my-1 text-xs font-thin'>Become a Partner</p>
            <p className='my-1 text-xs font-thin'>Developers</p>
          </div>
          <div className='col-span-1 flex flex-col p-3 md:p-5'>
            <p className='mb-1 font-bold'>Contact</p>
            <p className='my-1 text-xs font-thin'>46/A Dolphine Goli, Kalabagan, Dhaka</p>
            <p className='my-1 text-xs font-thin'>+880 173 650 0817</p>
          </div>
        </div>
        <div className="border-t border-gray-800 w-[95%] mx-auto"></div>
        <div className='text-gray-300 p-5 md:p-10 flex justify-between items-center'>
          <p className='text-[0.5rem]'>@2023  Staffing Agency . All Rights Reserved</p>
          <p className='text-[0.5rem]'>Powered by Hossain Mohammad Ismail</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;