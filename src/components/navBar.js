import React from 'react';
import Logo from '../images/Logo.png'

const NavBar = () => {
    const imageUrl = 'https://via.placeholder.com/1920x400'; // Replace with your actual image URL

    return (
        <nav className="bg-transparent absolute top-0 left-0 right-0 p-4">
            <div className="container mx-auto flex justify-between items-center text-white">
                <a href="/" className="flex items-center space-x-3">
                    <img src={Logo} className="h-10 w-44 md:h-12 md:w-56" alt="Flowbite Logo" />
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  ">
                        <li>
                            <a href="#section1" className="block py-2 px-3  rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 " aria-current="page">Event Overview</a>
                        </li>
                        <li>
                            <a href="#section2" className="block py-2 px-3  rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Industries Covered</a>
                        </li>
                        <li>
                            <a href="#section3" className="block py-2 px-3  rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Who You will Met</a>
                        </li>
                        <li>
                            <a href="#section4" className="block py-2 px-3  rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Why Attend</a>
                        </li>
                        <li>
                            <a href="#section5" className="block py-2 px-3  bg-blue-700 rounded md:bg-transparent md:p-0 md:hover:text-blue-700  " >Topic Highligts​​</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


        // <nav className="bg-transparent absolute top-0 left-0 right-0 p-4">
        //     <div className="container mx-auto flex justify-between items-center text-white">
        //         <div className="flex items-center">
        //             <img src={Logo} alt="Logo" className="h-10 w-25 mr-2" />
        //         </div>
        //         <div className="flex space-x-4">
        //             <a href="#" className="hover:text-gray-300">Home</a>
        //             <a href="#" className="hover:text-gray-300">About</a>
        //             <a href="#" className="hover:text-gray-300">Services</a>
        //             <a href="#" className="hover:text-gray-300">Contact</a>
        //         </div>
        //     </div>
        // </nav>
    );
};



export default NavBar;
