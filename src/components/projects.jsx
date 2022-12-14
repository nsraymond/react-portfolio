import React from 'react'
import todo from '../assets/todo.png';
import calc from '../assets/calc.png';
import port from '../assets/port.png';

const Projects = () => {
  return (
    <div name='projects' className='w-full h-full  text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto pt-20 p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 text-center'>
          <p className='text-4xl font-bold inline text-gray-300'>Projects</p>
          <p className='py-6'>Check out some of my recent projects</p>
        </div>

        {/* container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 pb-20'>
        {/* <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4'> */}

          {/* grid item */}
          <div style={{backgroundImage: `url(${todo})`}} 
         className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                To-Do List Application
              </span>
              <div className='pt-8 text-center'>
                <a href="https://nsraymond-todo-app.netlify.app/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View App</button>
                </a>
                <a href="https://github.com/nsraymond/todo_app">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View Code</button>
                </a>
              </div>
            </div>
          </div>

          {/* grid item */}
          <div style={{backgroundImage: `url(${calc})`}} 
         className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Calculator Application
              </span>
              <div className='pt-8 text-center'>
                <a href="https://nsraymond-calc-app.netlify.app/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View App</button>
                </a>
                <a href="https://github.com/nsraymond/my_calculator">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View Code</button>
                </a>
              </div>
            </div>
          </div>

          {/* grid item */}
          <div style={{backgroundImage: `url(${port})`}} 
         className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Vanilla JS Portfolio
              </span>
              <div className='pt-8 text-center'>
                <a href="https://nsraymond-portfolio-site.netlify.app/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View App</button>
                </a>
                <a href="https://github.com/nsraymond/porfolio_site">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View Code</button>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Projects;