import React from "react";
import { ReactTyped } from "react-typed";
import '../Styles/CardsAnimation.css';
const css = "/css.jpg";
const Golang = "/Golang.png";
const html = "/html.png";
const java = "/java.png";
const javascript = "/javascript.png";
const mongodb = "/mongodb.jpg";
const mysql = "/MySQL.png";
const node = "/nodeJs.png";
const postgresql = "/postgresql.png";
const python = "/python.png";
const react = "/react.png";
const tailwind = "/tailwind.png";

function Skills() {
    const cardItem = [
        {
        id: 1,
        logo: html,
        name: "HTML",
        },
        {
        id: 2,
        logo: css,
        name: "CSS",
        },
        {
        id: 3,
        logo: javascript,
        name: "Javascript",
        },
        {
        id: 4,
        logo: java,
        name: "Java",
        },
        {
        id: 5,
        logo: python,
        name: "Python"
        },
        {
        id: 6,
        logo: react,
        name: "React"
        },
        {
        id: 7,
        logo: node,
        name: "Node.JS",
        },
        {
        id: 8,
        logo: tailwind,
        name: "Tailwind",
        },
        {
        id: 9,
        logo: Golang,
        name: "Golang",
        },
        {
        id: 10,
        logo: mongodb,
        name: "MongoDB",
        },
        {
        id: 11,
        logo: postgresql,
        name: "postgresql",
        },
        {
        id: 12,
        logo: mysql,
        name: "MySQL",
        },
    ];
    return (
        <div name="Skills" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 p-8 dark:bg-gray-900 transition-colors duration-300 dark:text-white">
            <div>
                <h1 className="text-3xl font-bold mb-5">Skills</h1>
                <p>Core Skills And &nbsp;
                <ReactTyped
                    className="text-red-500 font-bold text-lg md:text-xl"
                    strings={["Technologies"]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                />
                </p>
                
                <br/>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 my-5">
                    {cardItem.map(({ id, logo, name }) => (
                        <div className="flex flex-col items-center justify-center bg-white shadow-md transform hover:scale-105 transition-transform duration-300 p-4 border border-gray-200 rounded-lg" key={id}>
                        <img
                        src={logo}
                        className="w-[70px] h-[70px] mb-3 rounded-full border border-gray-300 shadow-sm"
                        alt={name}
                />
                <div className="text-center mt-2">
                    <h3 className="text-md font-semibold text-gray-900">{name}</h3>
                </div>
                </div>
                ))}
            </div>
            </div>
            <div className="-mx-4 md:-mx-20">
                <br />
                <br />
                <br />
                <hr className="my-10 border-t-2 border-gray-300 shadow-md w-full" />
            </div>
        </div>
    );
}

export default Skills;
