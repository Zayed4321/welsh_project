import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from "../../assets/Welsh_Logo.png";
import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { MdArrowRight, MdKeyboardArrowDown } from 'react-icons/md';
import { FaArrowRightLong } from 'react-icons/fa6';

const Navbar = () => {

    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    return (
        <div className="flex flex-row">
            <div className="justify-start w-[20%]">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li>
                            <a>About</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li>
                            <a>Services</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Projects</a></li>
                        <li><a>Careers</a></li>
                        <li><a>Safety</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
                <div>
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className='lg:flex flex-col hidden w-[80%]' >
                <div className='flex flex-row justify-between bg-[#161616] w-full py-4 pl-5' >
                    <div className='w-[50%]' >
                        <h1 className='text-white text-[18px]' > Don’t Wait! Call us today for a free quote!</h1>
                    </div>
                    <div className='w-[50%] flex space-x-10'>
                        <h1 className='text-white text-[18px]'> <span className='inline-block' > <CiPhone /> </span> 0408 706 612  </h1>
                        <h1 className='text-white text-[18px]'> <span className='inline-block' > <CiMail />  </span> contact@welshindustries.com.au </h1>
                    </div>
                </div>
                <div className='flex flex-row space-x-16 px-10' >
                    <Link className='hover:underline hover:underline-offset-4 text-[18px] font-extrabold hover:text-green-400 transition-all duration-500 ease-in-out my-5' > Home </Link>
                    <div className='relative hover:underline hover:underline-offset-4 hover:text-green-400 transition-all duration-500 ease-in-out my-5' >
                        <Link onClick={() => setIsAboutOpen(!isAboutOpen)}
                            className=" text-[18px] font-extrabold" >
                            About <span> <MdKeyboardArrowDown className='inline-block' /> </span>
                        </Link>
                        {isAboutOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
                                <a href="#about-us" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">About Us</a>
                                <a href="#team" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Our Team</a>
                                <a href="#careers" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Careers</a>
                            </div>
                        )}
                    </div>
                    <div className='relative hover:underline hover:underline-offset-4 hover:text-green-400 transition-all duration-500 ease-in-out my-5' >
                        <Link onClick={() => setIsServicesOpen(!isServicesOpen)}
                            className="text-[18px] font-extrabold" >
                            Services <span> <MdKeyboardArrowDown className='inline-block' /> </span>
                        </Link>
                        {isServicesOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
                                <a href="#web-design" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Web Design</a>
                                <a href="#seo" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">SEO</a>
                                <a href="#marketing" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Marketing</a>
                            </div>
                        )}
                    </div>

                    <Link className='hover:underline hover:underline-offset-4 text-[18px] font-extrabold hover:text-green-400 transition-all duration-500 ease-in-out my-5' > Projects </Link>
                    <Link className='hover:underline hover:underline-offset-4 text-[18px] font-extrabold hover:text-green-400 transition-all duration-500 ease-in-out my-5' > Careers </Link>
                    <Link className='hover:underline hover:underline-offset-4 text-[18px] font-extrabold hover:text-green-400 transition-all duration-500 ease-in-out my-5' > Contact </Link>

                    <div>
                        <Link className='py-2 px-5 bg-green-400 text-[18px] font-bold flex items-center my-3' > Get A Free Quote <span className='inline-block ml-3' > <FaArrowRightLong /> </span> </Link>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Navbar