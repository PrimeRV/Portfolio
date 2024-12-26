import axios from 'axios';
import Lottie from 'lottie-react';
import React, { useEffect, useState } from 'react';
import { FaSpinner } from 'react-icons/fa'; // Importing a loading spinner icon
import Swal from 'sweetalert2';
import contact from "../assets/contact.json";
import Notification from './Notification';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [showNotification, setShowNotification] = useState(false); // Added state for Notification
    const [loading, setLoading] = useState(false); // State to track loading status

    //load form data from localstorage on component mount
    useEffect(() => {
        const savedFormData = localStorage.getItem('contactformData');
        if (savedFormData) {
            setFormData(JSON.parse(savedFormData));
        }
    }, []);

    //Save form data to localStorage whenever it changes
    useEffect(() => {
        if(formData.name || formData.email || formData.message){                //******** IMP ********** *//
            localStorage.setItem('contactformData', JSON.stringify(formData));
        }
    }, [formData]);


    // Handle input change
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    // Validation function
    const validate = () => {
        let tempErrors = {};
        if (!formData.name.trim()) tempErrors.name = "Name is required.";
        if (!formData.email.trim()) tempErrors.email = "Email is required.";
        else if (!/\S+@\S+\.\S+/.test(formData.email))
            tempErrors.email = "Email is invalid.";
        if (!formData.message.trim()) tempErrors.message = "Message is required.";

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0; // Returns true if no errors
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setLoading(true); // Start loading before making the request
            // POST request to the backend
            axios.post('http://localhost:5000/send-email', formData)
            .then(() => {
            // Show success notification
                Swal.fire({
                    title: 'Success!',
                    text: 'Your form has been submitted successfully!',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#3085d6',
                    showConfirmButton: true,
                    backdrop: 'static',
                    allowEscapeKey: false,
                    allowOutsideClick: false,
                }).then(() => {
                     // Reset form data and errors after submission
                    setFormData({ name: '', email: '', message: '' });
                    setErrors({});
                    localStorage.removeItem('contactformData'); //clear saved data
                });
            })
            .catch((error) => {
                // Handle error if the request fails
                console.error('Error submitting form:', error);
                Swal.fire({
                    title: 'Error!',
                    text: 'Something went wrong while submitting your form. Please try again.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#d33',
                });
            }).finally(() => {
                setLoading(false); // End loading after the request completes
            });
        }
    };

    return (
        <section
            name="Contact"
            id="contact"
            className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 dark:bg-gray-900 transition-colors duration-300 dark:text-white"
        >
            <div className="mb-16 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="md:w-1/2 mb-8 ml-2 md:mb-0">
                        <h1 className="text-3xl font-bold mb-3 text-red-500">Get in Touch</h1>
                        <p>I'm always open to new opportunities and collaboration. Feel free to reach &nbsp;
                        <span className="text-red-500 font-bold text-lg md:text-xl">out!</span>
                        </p>
                        <Lottie animationData={contact} className="w-[350px] mx-auto lg:w-[500px]" />
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className="w-full md:w-1/2 bg-gray-100 rounded-lg border border-red-300 shadow-lg shadow-red-500 p-10"
                        style={{ marginTop: '150px' }}
                    >
                        <h1 className="text-gray-900 text-4xl font-bold mb-7 text-center">Contact Me</h1>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                className={`mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring-indigo-200 focus:ring-opacity-50 ${errors.name ? 'border-red-500' : ''} text-black`}
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className={`mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring-indigo-200 focus:ring-opacity-50 ${errors.email ? 'border-red-500' : ''} text-black`}
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Enter your message"
                                className={`mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring-indigo-200 focus:ring-opacity-50 ${errors.message ? 'border-red-500' : ''} text-black`}
                            />
                            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                        </div>
                        <button
                            type="submit"
                            className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 duration-300 mx-auto block"
                            disabled={loading} // Disable button while loading
                        >
                            {loading ? (
                                <FaSpinner className="animate-spin mr-2" /> // Loading spinner icon
                            ) : (
                                'Send Message'
                            )}
                        </button>
                    </form>

                    {/* Show notification when `showNotification` is true */}
                    {showNotification && (
                        <Notification
                            message="Form submitted successfully!"
                            onClose={closeNotification}
                        />
                    )}
                </div>
            </div>
        </section>
    );
}

export default Contact;
