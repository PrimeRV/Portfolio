import React from "react";
import express from "../../public/express.png";
import mongoDB from "../../public/mongodb.jpg";
import nodejs from "../../public/node.png";
import reactjs from "../../public/reactjs.png";

function PortFolio() {
    const cardItem = [
        {
        id: 1,
        logo: mongoDB,
        name: "MongoDB",
        letter: "M"
        },
        {
        id: 2,
        logo: express,
        name: "Express",
        letter: "E"
        },
        {
        id: 3,
        logo: reactjs,
        name: "ReactJS",
        letter: "R"
        },
        {
        id: 4,
        logo: nodejs,
        name: "NodeJS",
        letter: "N"
        },
    ];
    return (
        <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-6 md:px-20  mt-10 dark:bg-gray-900 transition-colors duration-300 dark:text-white">
            <div>
                <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
                <span className=" underline font-semibold">Featured Projects</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-5">
                {cardItem.map(({ id, logo, name, letter }) => (
                    <div className="flex flex-col items-center justify-center bg-white border-2 border-gray-200 rounded-lg shadow-xl p-10 hover:scale-105 transform transition-all duration-300" key={id}>
                        <img
                            src={logo}
                            className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                            alt=""
                        />
                        <div className="flex flex-col items-center justify-center text-center text-gray-800 dark:text-white mt-4">
                            <div className="px-2 font-bold text-xl mb-2 text-gray-800 dark:text-gray-900">{name}</div>
                            <p className="px-2 text-gray-700 justify-center">{letter}</p>
                        </div>
                        <div className=" px-6 py-4 space-x-3 justify-around">
                            <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                                Source code
                            </button>
                        </div>
                    </div>
                ))}
                </div>
            </div>
             {/* This is the important part: The negative margin */}
            <div className="-mx-4 md:-mx-20">
                <br/>
                <br/>
                <br/>
                <hr className="my-10 border-t-2 border-gray-300 shadow-md w-full" />
            </div>
        </div>
    );
}
export default PortFolio;
