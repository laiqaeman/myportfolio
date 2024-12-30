
import Image from 'next/image';
import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div id="hero" className="relative min-h-screen flex flex-col">
     
      <Navbar />

     
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-center h-full">
       
        <div className="text-center lg:text-left lg:w-1/2 space-y-4 mt-6 lg:mt-0">
        <h1
  className="text-4xl sm:text-5xl lg:text-8xl font-bold leading-tight"
  data-aos="zoom-in-left"
>
  Hello! <br />
  I&apos;m <br /><span className="text-blue-500">Laiqa Eman</span>
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
