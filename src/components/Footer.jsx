import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
    return (
        <>
            <footer className="py-12 bg-gray-900 text-white">
                <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex space-x-6 mb-6">
                            {/* Add links to social media */}
                            <a href="https://github.com/PrimeRV" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors duration-300">
                                <FaGithub size={28} />
                            </a>
                            <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">
                                <FaTwitter size={28} />
                            </a>
                            <a href="https://www.instagram.com/vrohit072003_/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors duration-300">
                                <FaInstagram size={28} />
                            </a>
                            <a href="https://www.linkedin.com/in/rohit-verma-671a882a6/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors duration-300">
                                <FaLinkedin size={28} />
                            </a>
                        </div>
                        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
                            <p className="text-sm">
                                &copy; 2024 Rohit Verma. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
