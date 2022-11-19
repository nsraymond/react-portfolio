import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#f0f3f8] text-[#0a192f]s'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='text-right sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-2xl font-bold'>
              <p>Hi. I'm Raymond, nice to meet you. Please take a look around</p>
            </div>
            <div>
              <p className='font-bold'>I am passionate about building excellent Fronted Applications that improve
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations using React.js and other relevant software technologies </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;