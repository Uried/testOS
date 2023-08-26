/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import node from "../assets/node.png";
import js from "../assets/js.png";
import Github from "../assets/github.png";
import sass from "../assets/sass.png";
import react from "../assets/react.png";
import php from "../assets/php.png";
import sql from "../assets/sql.png";
import miro from "../assets/miro.png";

const Skills = () => {
  return (
    <div name="skills" className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className=' w-full flex justify-center items-center flex-col mb-7'>
              <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center mt-10 '>Skills</p>
              <p className='py-4 text-2xl'>I enjoy diving into and learning new things. Here's a list of technologies I've worked with</p>
          </div> 

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
  <div className="shadow-md shadow-cyan-500 hover:scale-110 duration-500">
    <img src={node} alt="Logo NodeJS" className="mx-auto w-md h-20" />
    <p className="my-5">NodeJS</p>
  </div>
  <div className="shadow-md shadow-cyan-500 hover:scale-110 duration-500">
    <img src={react} alt="Logo NodeJS" className="mx-auto w-md h-20" />
    <p className="my-5">React JS</p>
  </div>
  <div className="shadow-md shadow-cyan-500 hover:scale-110 duration-500">
    <img src={php} alt="Logo NodeJS" className="mx-auto w-md h-20" />
    <p className="my-5">PHP</p>
  </div>
  <div className="shadow-md shadow-cyan-500 hover:scale-110 duration-500">
    <img src={sql} alt="Logo NodeJS" className="mx-auto w-md h-20" />
    <p className="my-5">SQL</p>
  </div>
  <div className="shadow-md shadow-cyan-500 hover:scale-110 duration-500">
    <img src={sass} alt="Logo NodeJS" className="mx-auto w-md h-20" />
    <p className="my-5">Sass</p>
  </div>
  <div className="shadow-md shadow-cyan-500 hover:scale-110 duration-500">
    <img src={miro} alt="Logo NodeJS" className="mx-auto w-md h-20" />
    <p className="my-5">Miro</p>
  </div>
  <div className="shadow-md shadow-cyan-500 hover:scale-110 duration-500">
    <img src={Github} alt="Logo NodeJS" className="mx-auto w-md h-20" />
    <p className="my-5">Github</p>
  </div>
  <div className="shadow-md shadow-cyan-500 hover:scale-110 duration-500">
    <img src={js} alt="Logo NodeJS" className="mx-auto w-md h-20" />
    <p className="my-5">JavaScript</p>
  </div>
</div>
      </div>
  );
};
export default Skills;
