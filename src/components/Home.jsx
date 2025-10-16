import React from "react";
import { FaGithub, FaLinkedin, FaNodeJs, FaReact, FaSquareFacebook } from "react-icons/fa6";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
import { ReactTyped } from "react-typed";
const pic = "/CoderRV.jpeg";
import "../Styles/glowingButton.css";

function Home() {
    return (
        <div
        name="Home"
        className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8 transition-colors duration-300 dark:text-white"
        >
        <div className="max-w-screen-2xl mx-auto px-4 md:px-20 py-20">
            <div className="flex flex-col md:flex-row items-center md:items-start">
            {/* Left Section */}
            <div className="md:w-1/2 space-y-6 order-2 md:order-1 text-center md:text-left">
                <span className="text-xl font-semibold">Welcome In My Feed</span>
                <div className="flex items-center justify-center md:justify-start space-x-2 text-2xl md:text-4xl">
                <h1>Hello, I'm a</h1>
                <ReactTyped
                    className="text-red-700 font-bold"
                    strings={["Developer", "Coder", "Designer"]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                />
                </div>
                <p className="text-sm md:text-md leading-relaxed">
                I am a passionate Full Stack Web Developer with a wealth of experience
                in designing and building dynamic web applications. Proficient
                in JavaScript, React.js, Node.js, Express, and MongoDB, I also specialize
                in developing cross-platform mobile applications using Android Studio
                and React Native. I thrive on solving complex challenges, excelling in
                collaborative team environments, and staying at the forefront of
                emerging technologies and innovative methodologies.
                </p>

                {/* Buttons */}
                <div className="flex items-center gap-4 mt-2 space-x-16">
                    <a href="/MyResume.pdf" download="My_Resume" className="btn">Download CV</a>
                    <a href="#contact" className="btn">Hire Me!</a>
                </div>

                {/* Social Media & Skills */}
                <div className="flex flex-col md:flex-row justify-between mt-8 space-y-8 md:space-y-0">
                {/* Social Media Icons */}
                <div className="text-center md:text-left">
                    <h1 className="font-bold ">Available on</h1>
                    <ul className="flex justify-center md:justify-start space-x-5">
                    <li>
                        <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:scale-110 transition-transform duration-200"
                        >
                        <FaSquareFacebook className="text-3xl text-blue-600" />
                        </a>
                    </li>
                    <li>
                        <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:scale-110 transition-transform duration-200"
                        >
                        <FaLinkedin className="text-3xl text-blue-700" />
                        </a>
                    </li>
                    <li>
                        <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:scale-110 transition-transform duration-200"
                        >
                        <FaGithub className="text-3xl text-gray-800" />
                        </a>
                    </li>
                    </ul>
                </div>

                {/* Current Skills */}
                <div className="text-center md:text-left">
                    <h1 className="font-bold ">Currently working on</h1>
                    <div className="flex justify-center md:justify-start space-x-5">
                    <SiMongodb className="text-3xl text-green-600 hover:scale-110 transition-transform duration-200" />
                    <SiExpress className="text-3xl text-gray-600 hover:scale-110 transition-transform duration-200" />
                    <FaReact className="text-3xl text-blue-500 hover:scale-110 transition-transform duration-200" />
                    <FaNodeJs className="text-3xl text-green-500 hover:scale-110 transition-transform duration-200" />
                    <SiTailwindcss className="text-3xl text-blue-400 hover:scale-110 transition-transform duration-200" />
                    </div>
                </div>
                </div>
            </div>

            {/* Right Section - Image */}
            <div className="md:w-1/2 flex justify-center md:justify-end mt-12 md:mt-0 order-1 md:order-2">
                <img
                src={pic}
                alt="Profile"
                className="rounded-full w-60 h-60 md:w-[450px] md:h-[450px] shadow-lg shadow-gray-500"
                />
            </div>
            </div>

            {/* Divider */}
            <div className="-mx-4 md:-mx-20">
                <br/>
                <hr className="my-10 border-t-2 border-gray-300 shadow-md w-full" />
            </div>
        </div>
        </div>
    );
}

export default Home;
