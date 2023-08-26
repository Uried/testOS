import React from "react";
import code from '../assets/code2.png';

const Works = () => {
    return(
        <div name='works' className="w-full md:h-screen text-gray-300 bg-[#0a1922f]"> 
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8 w-full flex justify-center items-center flex-col">
                    <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500">
                        Works
                    </p>
                    <p className="py-6 text-2xl">Check out some of my most recent work</p>
                </div>
                {/* Container */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {/* Grid Item */}
                    <div style={{ backgroundImage: `url(${code})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        {/* Hover effects */}
                        <div className="opacity-0 group-hover:opacity-100 shadow-md flex justify-center items-center flex-col">
                            <span className="text-lg font-bold text-white tracking-wider">
                                {/* CBT Application */}
                                <p className='text-center'>description</p>
                            </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${code})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='shadow-md opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                Name of project
              </span>
              <p className='text-center'>description</p>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${code})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='shadow-md opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
            <span className=' text-lg font-bold text-white tracking-wider'>
                Name of project
              </span>
              <p className='text-center'>description</p>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${code})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='shadow-md opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
            <span className=' text-lg font-bold text-white tracking-wider'>
                Name of project
              </span>
              <p className='text-center'>description</p>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${code})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='shadow-md opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
            <span className=' text-lg font-bold text-white tracking-wider'>
                Name of project
              </span>
              <p className='text-center'>description</p>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div style={{ backgroundImage: `url(${code})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        {/* Hover effects */}
                        <div className="opacity-0 group-hover:opacity-100 shadow-md flex justify-center items-center flex-col">
                            <span className="text-lg font-bold text-white tracking-wider">
                                {/* CBT Application */}
                                <p className='text-center'>description</p>
                            </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};
export default Works;