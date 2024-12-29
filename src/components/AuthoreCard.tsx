import React from "react";
import Image from 'next/image';

export default function AuthoreCard() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-12">
      <div className="flex items-center animation-fadeIn">
        <Image
          className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-red-500"
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/coding-design-template-7fdcbfed1fb311be96a282920fba8515_screen.jpg?ts=1599184512"
          alt="author pic"
          width={64}
          height={64}
        />
        <div>
          <h3 className="text-xl font-bold">Muhammad Owais</h3>
          <p className="text-slate-500">Front-End-Web-Developer</p>
        </div>
      </div>

      <p className="mt-4 text-blue-600 leading-relaxed">
        Hi, I&apos;m Owais. I&apos;m a passionate front-end web developer with a knack for
        creating visually appealing and user-friendly websites.
      </p>
      <p className="mt-4 text-blue-600 leading-relaxed">
        With a strong foundation in HTML, CSS, and JavaScript, I specialize in building
        responsive and interactive web applications. I enjoy working with modern
        frameworks like React to bring designs to life.
      </p>
      <p className="mt-4 text-blue-600 leading-relaxed">
        My goal is to continuously improve my skills and stay updated with the latest industry
        trends. I believe in writing clean, maintainable code and am always
        eager to take on new challenges. Let&apos;s build something amazing together!
      </p>
      <div className="mt-4 flex space-x-3">
        <a
          href="https://twitter.com"
          className="px-4 py-2 text-slate-100 bg-blue-500 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Twitter
        </a>
      </div>
    </div>
  );
}