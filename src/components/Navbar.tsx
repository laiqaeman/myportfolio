
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="container pt-0">
     
      <div className="flex justify-between items-center">
    
        <div className="text-xl font-medium font-serif italic">
  <Image 
    src="/logo4.png" 
    alt="Portfolio Logo" 
    width={100} 
    height={100} 
    className="w-auto h-auto" 
  />
</div>

      
<ul className="gap-10 lg:gap-16 hidden md:flex">
  <li className="text-white hover:text-blue-500 hover:shadow-lg hover:shadow-blue-500/100 transition-all">
    <Link href="#hero">Home</Link>
  </li>
  <li className="text-white hover:text-blue-500 hover:shadow-lg hover:shadow-blue-500/100 transition-all">
    <Link href="#about">About</Link>
  </li>
  <li className="text-white hover:text-blue-500 hover:shadow-lg hover:shadow-blue-500/100 transition-all">
    <Link href="#project">Project</Link>
  </li>
  <li className="text-white hover:text-blue-500 hover:shadow-lg hover:shadow-blue-500/100 transition-all">
    <Link href="#skills">Skills</Link>
  </li>
  <li className="text-white hover:text-blue-500 hover:shadow-lg hover:shadow-blue-500/100 transition-all">
    <Link href="#contact">Contact</Link>
  </li>
</ul>


        
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
      </div>

     
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-4 bg-blue-500 p-4 rounded-lg text-white">
          <Link href="#hero" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="#about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link href="#project" onClick={() => setMenuOpen(false)}>
            Project
          </Link>
          <Link href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </Link>
          <Link href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
