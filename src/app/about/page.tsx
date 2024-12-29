import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg">
            <Image src="https://www.shutterstock.com/image-vector/circle-connection-logo-260nw-367976510.jpg" alt="my-pic" width={192} height={192} />
          </div>
          <div className="mt-6 md:mt-0 md:ml-8 text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-800">About Me</h1>
            <p className="text-gray-600 mt-4">
              Hi there! I&apos;m a passionate Front-End Web Developer with a knack
              for crafting beautiful and functional user experiences. I love
              working with technologies like React, Next.js, and Tailwind CSS.
            </p>
            <p className="text-gray-600 mt-4">
              When I&apos;m not coding, I enjoy writing blogs about programming,
              exploring new tech trends, and contributing to open-source
              projects. Feel free to connect with me on social media!
            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800">Contact Me</h2>
          <p className="text-gray-600 mt-4">
            Want to collaborate or have any questions? Drop me a message at{" "}
            <a
              href="mailto:youremail@example.com"
              className="text-blue-500 hover:underline"
            >
              abc@gmail.com
            </a>
          </p>
          <div className="flex justify-center mt-6 space-x-4">
            {/* Replace these links with your social profiles */}
          </div>
        </div>
      </div>
    </div>
  );
}