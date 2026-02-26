import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { link: "/", text: "Home" },
        { link: "/sustainability", text: "Sustainability" },
        { link: "/geopark", text: "Geopark" },
        { link: "/about", text: "About" },
        { link: "/contact", text: "Contact" },
    ];

    return (
        <nav className="bg-green-600 relative">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto px-4 h-16">
                <Link to="/" className="flex items-center space-x-3">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                        Aran View Filling Station
                    </span>
                </Link>

                {/* Hamburger button — visible on mobile only */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-white rounded-lg md:hidden hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300"
                    aria-controls="navbar-menu"
                    aria-expanded={isOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    {isOpen ? (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14" xmlns="http://www.w3.org/2000/svg">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    )}
                </button>

                {/* Desktop links — inline, hidden on mobile */}
                <div className="hidden md:block">
                    <ul className="font-medium flex flex-row space-x-8">
                        {navLinks.map((data) => (
                            <li key={data.link}>
                                <Link
                                    to={data.link}
                                    className="block text-gray-100 hover:text-gray-300"
                                >
                                    {data.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Mobile dropdown — sits below the navbar bar */}
            {isOpen && (
                <div className="md:hidden absolute left-0 right-0 z-50 bg-green-700 border-t border-green-500 shadow-lg">
                    <ul className="font-medium flex flex-col p-4">
                        {navLinks.map((data) => (
                            <li key={data.link}>
                                <Link
                                    to={data.link}
                                    onClick={() => setIsOpen(false)}
                                    className="block py-2 px-3 text-gray-100 rounded hover:bg-green-800"
                                >
                                    {data.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar
