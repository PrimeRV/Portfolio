import React, { useEffect, useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { BsMoon, BsSun } from "react-icons/bs";
import { IoCloseSharp } from 'react-icons/io5';
import { Link } from "react-scroll";
import pic from "../../public/CoderRV.jpeg";

function Navbar() {
    const [menu,setMenu] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const navItems =
    [
        {
            id:1,
            text:"Home"
        },
        {
            id:2,
            text:"About"
        },
        {
            id:3,
            text:"Portfolio"
        },
        {
            id:4,
            text:"Skills"
        },
        {
            id:5,
            text:"Contact"
        }
    ]

// Initialize theme from localStorage
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if(storedTheme === "dark"){
            setDarkMode(true);
            document.documentElement.classList.add("dark");
        }
    }, []);

// Toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if(!darkMode){
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }else{
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    return (
        <>
            <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 transition-colors duration-300">
                <div className="flex justify-between items-center h-16">
                    <div className="flex space-x-2 items-center">
                        <img src={pic} className="h-12 w-12 rounded-full  transition-transform duration-300 hover:scale-110" alt="logo"  />
                        <h1 className="text-xl font-semibold cursor-pointer dark:text-white">Rohi<span className="text-red-500 text-2xl">t</span> <p className="text-sm">Web Developer</p></h1>
                    </div>
                    {/*desktop navbar*/}
                    <div className="flex items-center">
                    <ul className="flex gap-6 dark:text-white">
                        {navItems.map((item) => (
                            <li
                                key={item.id}
                                className="cursor-pointer hover:scale-105 duration-200 relative group"
                            >
                                <Link
                                    to={item.text}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    activeClass="active"
                                    className="px-4 py-2 block relative z-10 group-hover:shadow-[0_4px_10px_rgb(35,141,202)] transition-shadow duration-300 rounded-md"
                                >
                                    {item.text}
                                </Link>
                                {/* <span className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></span> */}
                            </li>
                        ))}
                    </ul>

                        <button onClick={toggleDarkMode} className="p-2 ml-4 rounded-full hover:bg-gray-200 dark:hover:bg-gray950 transition-colors">
                            {darkMode ? <BsSun size={24} /> : <BsMoon size={24} />}
                        </button>

                        <div onClick={()=>setMenu(!menu)} className="md:hidden">
                            {menu?<IoCloseSharp size={24} />:< AiOutlineMenu size={24} />}
                        </div>
                    </div>
                </div>
                {/*Mobile navbar*/}
                {
                    menu && (
                        <div className="bg-white">
                            <ul className="md:hidden flex flex-col items-center h-screen justify-center space-y-3 text-xl dark:bg-gray-900 dark:text-white">
                                {
                                    navItems.map((item)=>(
                                    <li key={item.id} className="cursor-pointer hover:scale-105 font-semibold duration-200">
                                        <Link
                                        onClick={()=>setMenu(!menu)}
                                        to={item.text}
                                        smooth={true}
                                        duration={500}
                                        offset={-70}
                                        activeClass="active"
                                    >
                                        {item.text}
                                        </Link>
                                    </li>
                                    ))
                                }
                            </ul>
                        </div>
                    )}
            </div>
        </>
    )
}

export default Navbar
