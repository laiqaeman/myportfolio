import React from 'react';

const Skill = () => {
  return (
    <div id="skills" className="container pt-32 px-4">
 
      <div className="flex flex-col items-center mt-8 relative">
        <h2 className="text-4xl sm:text-5xl text-center pb-2 mx-auto relative -top-6 border-b-4 w-max "data-aos="zoom-in-right">
          Technologies I Work With
        </h2>
      </div>

   
      <div className="border-2 border-sky-500 p-8 rounded-lg">
       
        <div className="mt-8 flex justify-center">
        <p className="text-gray-500 text-base sm:text-lg md:text-xl leading-relaxed text-center ">
  As a passionate and driven learner with a deep enthusiasm for
  technology, I am continuously exploring the realms of web
  development, artificial intelligence, and the metaverse. My skills
  include crafting responsive and dynamic web applications using tools
  like React, Next.js, and TypeScript, complemented by my expertise
  in Tailwind CSS for clean, professional designs. Alongside my
  technical prowess, I have a creative side reflected in my love for
  design, whether it&apos;s perfecting the art of contouring or creating
  visually appealing resumes. With a natural flair for learning and
  adapting, I aim to merge innovation with functionality in every
  project I undertake, embodying a commitment to growth and excellence
  in all aspects of my work.
</p>

        </div>

     
        <div className="mt-8 flex justify-center">
          <div className="grid grid-cols-2 gap-72 text-blue-500 text-3xl sm:text-4xl">
         
            <div className="space-y-6 sm:space-y-12 text-center">
              <h2 data-aos="zoom-out-up">TypeScript</h2>
              <h2 data-aos="zoom-out-up">React.js</h2>
              <h2 data-aos="zoom-out-up">Next.js</h2>
            </div>

           
            <div className="space-y-6 sm:space-y-12 text-center">
              <h2 data-aos="zoom-out-up">Tailwind</h2>
              <h2 data-aos="zoom-out-up">CSS</h2>
              <h2 data-aos="zoom-out-up">HTML</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
