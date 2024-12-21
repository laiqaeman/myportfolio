/*import Image from 'next/image'
import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
   <div id="hero"> 
    <Navbar/>
    <Image src="/avatar.jpg" className=" min-h-screen bg-no-repeat bg-left lg:bg-[15%]" data-aos="zoom-in-right" width={600} height={300} alt="hero" />
    <div className="  container  grid lg:grid-cols-2 h-[calc(100vh-60px)]">
        <div className="hidden lg:block"></div>
        <div className="text-[80px] sm:text-[80px] font-bold leading-tight flex justify-center items-center top-0 left-0">
            <div className="absolute top-48">
                <p data-aos="zoom-in-left" px-2>Hello!</p>
                <p data-aos="zoom-in-left">I'am</p>
                <p data-aos="zoom-in-left">Laiqa eman</p>
                <div className="text-[20px] font-serif mt-5 font-semibold"><p data-aos="zoom-in-left"> I am Front End Developer</p></div>
              
            </div>
        </div>
    </div>
     </div>
      
    
  )
}

export default Hero*/
import Image from 'next/image';
import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div id="hero" className="relative min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-center h-full">
        {/* Left Content */}
        <div className="text-center lg:text-left lg:w-1/2 space-y-4 mt-6 lg:mt-0">
          <h1
            className="text-4xl sm:text-5xl lg:text-8xl font-bold leading-tight"
            data-aos="zoom-in-left"
          >
            Hello! <br />
            I'm <br/><span className="text-blue-500 ">Laiqa Eman</span>
          </h1>
          <p
            className="text-lg sm:text-xl font-serif font-medium text-gray-500"
            data-aos="zoom-in-left"
          >
            I am a Front-End Developer.
          </p>
        </div>

        {/* Right Image */}
        <div
          className="relative w-full lg:w-1/2 flex justify-center"
          data-aos="zoom-in-right"
        >
          <Image
            src="/avatar.jpg"
            className="rounded-full object-cover shadow-lg"
            width={600}
            height={600}
            alt="hero"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
