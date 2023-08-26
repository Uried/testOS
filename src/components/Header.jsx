import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed w-full bg-black">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <a href="#" className="text-white text-lg font-bold flex items-center">
          <img src="../logo.png" alt="Logo" className="h-14 w-16 mr-2" />
          Fongang Uried
        </a>
        <div className="lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <FaTimes size={24} />
            ) : (
              <FaBars size={24} />
            )}
          </button>
        </div>
        <div className="hidden lg:flex space-x-4">
          <Link to="about" smooth duration={600}><a href="#about" className="text-gray-300 hover:text-white hover:underline">About</a></Link>
          <Link to="skills" smooth duration={600}><a href="#skills" className="text-gray-300 hover:text-white hover:underline">Skills</a></Link>
          <Link to="works" smooth duration={600} ><a href="#works" className="text-gray-300 hover:text-white hover:underline">Works</a></Link>
          <Link to="contact" smooth duration={600}><a href="#contact" className="text-gray-300 hover:text-white hover:underline">Contact</a></Link>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className='lg:hidden absolute top-0 left-0 w-full bg-black py-4'>
          <button
            className="text-white absolute top-2 right-2 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <FaTimes size={24} />
          </button>
          <ul className="flex flex-col items-center space-y-4">
            <li>
            <Link to="about" smooth duration={600}> <a className='text-gray-300 hover:text-white hover:underline'>About</a></Link>
            </li>
            <li>
            <Link to="skills" smooth duration={600}> <a className='text-gray-300 hover:text-white hover:underline' href='/'>Skills</a></Link>
            </li>
            <li>
            <Link to="works" smooth duration={600}><a className='text-gray-300 hover:text-white hover:underline' href='/'>Works</a></Link>
            </li>
            <li>
            <Link to="contact" smooth duration={600}><a className='text-gray-300 hover:text-white hover:underline' href='/'>Contact</a></Link>
            </li>
          </ul>
        </div>
      )}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;