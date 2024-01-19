import React, { useEffect, useState } from 'react';
import Logo from '../images/Logo.png'

const NavBar = (props) => {
    const [menu, setMenu] = useState(true);
    const [isSecondNavbarFixed, setIsSecondNavbarFixed] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY || window.pageYOffset;

            // Set a threshold value based on your design
            const threshold = 1;
            setIsSecondNavbarFixed(scrollY >= threshold);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <nav className={`bg-transparent ${isSecondNavbarFixed ? 'fixed' : 'absolute'} top-0 left-0 right-0 z-50`}>
                <div className={`mx-auto flex justify-between items-center text-black ${isSecondNavbarFixed ? 'bg-white drop-shadow-md w-full h-20' : ''} p-4`}>
                    <a href="/" className="flex items-center space-x-3">
                        <img src={Logo} className="h-10 w-44 md:h-12 md:w-56" alt="Flowbite Logo" />
                    </a>
                    <button onClick={() => setMenu(!menu)} data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className={`hidden w-full md:block md:w-auto`} id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  ">
                            <li>
                                <a href="/" className="block py-2 px-3  rounded  md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0 ">Home</a>
                            </li>
                            <li>
                                <a href="#event" className="block py-2 px-3  rounded  md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0 " aria-current="page">Event Overview</a>
                            </li>
                            <li>
                                <a href="#meeting" className="block py-2 px-3  rounded  md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0 ">Who You will Met</a>
                            </li>
                            <li>
                                <a href="#why_attend" className="block py-2 px-3  rounded  md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0 ">Why Attend</a>
                            </li>
                            <li>
                                <a href="#highligts​​" className="block py-2 px-3  rounded md:bg-transparent md:p-0 md:hover:text-gray-400  " >Topic Highligts​​</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={`${menu ? 'hidden' : ''} bg-stone-900 w-full md:hidden z-50 rounded-lg transition-all`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  rounded-lg text-white md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0  border md:border-0 ">
                        <li>
                            <a href="/" className="block py-2 px-3  rounded  md:hover:bg-transparent md:border-0 md:hover:text-gray-100 md:p-0 ">Home</a>
                        </li>
                        <li>
                            <a href="#event" className="block py-2 px-3  rounded  md:hover:bg-transparent md:border-0 md:hover:text-gray-100 md:p-0 " aria-current="page">Event Overview</a>
                        </li>
                        <li>
                            <a href="#meeting" className="block py-2 px-3  rounded  md:hover:bg-transparent md:border-0 md:hover:text-gray-100 md:p-0 ">Who You will Met</a>
                        </li>
                        <li>
                            <a href="#why_attend" className="block py-2 px-3  rounded  md:hover:bg-transparent md:border-0 md:hover:text-gray-100 md:p-0 ">Why Attend</a>
                        </li>
                        <li>
                            <a href="#highligts​​" className="block py-2 px-3  rounded md:bg-transparent md:p-0 md:hover:text-gray-100  " >Topic Highligts​​</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>

    );
};



export default NavBar;
