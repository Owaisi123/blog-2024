'use client'
import React from "react";
import dynamic from "next/dynamic";
import Swal from 'sweetalert2';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Map = dynamic(() => import("@/components/map/page"), { ssr: false });

export default function Contact() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    // For example, you can send the form data to an API or show a success message
    Swal.fire({
      title: 'Success!',
      text: 'Form submitted successfully!',
      icon: 'success',
      confirmButtonText: 'OK'
    }).then(() => {
      // Optionally, you can refresh the page
      window.location.reload();
    });
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="absolute inset-0 bg-gray-300">
        <Map />
      </div>
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact Us</h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Have any Question?
          </p>
          <form onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button type="submit" className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
              Submit
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-3">
            Thank you for reaching out! We will get back to you as soon as possible.
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
              <FaTwitter size={30} />
            </a>
            <a href="https://www.linkedin.com/in/muhammad-owais-902976322/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
              <FaLinkedin size={30} />
            </a>
            <a href="https://github.com/owaisi123" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-900">
              <FaGithub size={30} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}