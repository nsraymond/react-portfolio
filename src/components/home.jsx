import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full mt-20 bg-[#f0f3f8]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#0a192f] font-bold text-xl pt-10'>Hi, my name is</p>
        <h1 className='text-2xl sm:text-3xl font-bold mt-2 text-[#0a192f]'>
          Raymond Nsiegbunam
        </h1>
        <h2 className='text-3xl sm:text-7xl font-bold text-[#0a192f]'>
          I'm a Software Engineer
        </h2>
        <p className='text-[#0a192f] py-4 max-w-[700px] font-bold'>
        I am a Backend engineer with expertise in crafting robust digital solutions. 
        My primary focus revolves around developing scalable backend web applications 
        using server_side technologies.
        </p>
        <div>
          <button className='text-white bg-[#0a192f] group border-0 px-6 py-3 my-2 flex items-center hover:bg-blue-600 border-0'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;