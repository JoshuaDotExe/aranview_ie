import React from 'react'
import { Link } from 'react-router-dom'

const NavbarLink = (d) => {
    return (
        <li>
            <Link to={d.link} class="block py-2 px-3 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0">{d.text}</Link>
        </li>
    )
}


const Navbar = () => {
    const navLinks = [
        {
            link : "/",
            text : "Home"
        },
        {
            link : "/sustainability",
            text : "Sustainability"
        },
        {
            link : "/geopark",
            text : "Geopark"
        },
        {
            link : "/about",
            text : "About"
        },
        {
            link : "/contact",
            text : "Contact"
        }
    ]
    return (
        <nav class="bg-green-600">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="https://aranview.ie/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Aran View Filling Station</span>
            </a>
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
                
                {navLinks.map(function(data) {
                    return NavbarLink(data)
                })}
                
            </ul>
            </div>
        </div>
        </nav>

    )
}

export default Navbar
