import React from "react";

const About = () => { 
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-none text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-none flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Hi. I'm Fongang Uried, nice to meet you. Please take a
                look around.
              </p>
            </div>
            <div>
              <p>
                {" "}
                A software developer, I can build Responsive and
                Scalable Web apps. 
                In addition to software development, I also have design skills.If you're looking for a creative and skilled web developer, I'd be delighted to work with you on your project.




              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;