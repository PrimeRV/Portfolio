import React from 'react';

function About() {
    return (
        <div
            name="About"
            className="min-h-screen max-w-screen-2xl container mx-auto px-4 -mt-20 md:px-20 py-20 dark:bg-gray-900 transition-colors duration-300 dark:text-white"
        >
            <h1 className="text-4xl font-bold mb-8 text-center text-green-600">About Me</h1>

            <div className="space-y-8 text-gray-600 dark:text-gray-300">
                {/* Introduction */}
                <div>
                    <p className="text-lg leading-relaxed">
                        Hello, I'm a passionate web developer with a keen eye for MERN stack. 
                        With a background in IT, I strive to create impactful and visually stunning software solutions 
                        that leave a lasting impression. I thrive on transforming ideas into functional and visually 
                        appealing applications. Dedicated to delivering high-quality results that exceed expectations, 
                        I'm excited to contribute my skills to projects that push the boundaries of what's possible 
                        in the digital realm.
                    </p>
                </div>

                {/* Education & Training */}
                <div>
                    <h2 className="text-2xl font-semibold text-green-600 mb-4">Education & Training</h2>
                    <ul className="list-disc pl-5">
                        <li>BCA (Bachelor's of Computer Applications), Pune University, 2024</li>
                        <li>Full-Stack Web Development (MERN Stack), Udemy, 2024</li>
                    </ul>
                </div>

                {/* Skills & Expertise */}
                <div>
                    <h2 className="text-2xl font-semibold text-green-600 mb-4">Skills & Expertise</h2>
                    <ul className="list-disc pl-5">
                        <li>Proficient in JavaScript, React.js, Node.js, MongoDB, and Express.js</li>
                        <li>Experienced with version control tools like Git and platforms like GitHub</li>
                        <li>Strong grasp of design principles and responsive web design</li>
                        <li>Excellent problem-solving skills and a collaborative team player</li>
                    </ul>
                </div>

                {/* Professional Experience */}
                <div>
                    <h2 className="text-2xl font-semibold text-green-600 mb-4">Professional Experience</h2>
                    <ul className="list-disc pl-5">
                        <li>
                            [Job Title], [Company/Organization], [Dates]
                            <p className="text-sm mt-1">
                                [Brief description of responsibilities and achievements]
                            </p>
                        </li>
                        <li>
                            [Job Title], [Company/Organization], [Dates]
                            <p className="text-sm mt-1">
                                [Brief description of responsibilities and achievements]
                            </p>
                        </li>
                        <li>
                            [Freelance/Contract Work], [Client/Organization], [Dates]
                            <p className="text-sm mt-1">
                                [Brief description of projects and contributions]
                            </p>
                        </li>
                    </ul>
                </div>

                {/* Achievements & Awards */}
                <div>
                    <h2 className="text-2xl font-semibold text-green-600 mb-4">Achievements & Awards</h2>
                    <ul className="list-disc pl-5">
                        
                        <li> <strong>Best Innovative Project Award</strong>, Modern College Of Arts, Commerce & Science, Shivajinagar College Annual Tech Fest, 2023<br />
                        Recognized for developing an EV Charging Dashboard Website using Html,Css,Javascript,Node.js and MongoDB.</li>
                        
                        <li><strong>Top Performer</strong>, Udemy MERN Stack Development Course, 2024<br />
                        Completed the course with a distinction and received high praise from instructors for project quality</li>
                    </ul>
                </div>

                {/* Mission Statement */}
                <div>
                    <h2 className="text-2xl font-semibold text-green-600 mb-4">Mission Statement</h2>
                    <p className="text-lg leading-relaxed">
                        My mission is to leverage my skills and creativity to deliver 
                        innovative web development solutions that exceed client expectations 
                        and contribute positively to the digital landscape. I am committed to 
                        continuous learning and growth, always seeking new challenges and 
                        opportunities to expand my horizons.
                    </p>
                </div>
            </div>

            {/* Divider */}
            <div className="-mx-4 md:-mx-20">
                <hr className="my-10 border-t-2 border-gray-300 shadow-md w-full" />
            </div>
        </div>
    );
}

export default About;
