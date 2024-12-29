import React from "react";
import AuthoreCard from "./AuthoreCard";

export default function Feature() {
  return (
    <div>
      <section className="py-8 bg-neutral-50 mb-40">
      <div className="flex justify-center items-center">
  <h2
    className="text-center text-3xl font-bold md:text-5xl lg:text-left animate-fade-in-up transition-all duration-500 ease-in-out transform hover:translate-y-[-5px] hover:text-black text-red-600"
  >
    Muhammad Owais: I am Front-End-Web-Developer
  </h2>
</div>
        <p className="text-center m-4 mt-4 text-sm text-slate-600 sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100 cursor-pointer">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt sit
          eius, iure velit,<br/> in ut quo quis tempora excepturi laboriosam at atque
          impedit facere voluptates nostrum <br></br>possimus totam, reprehenderit esse
          iste quasi molestiae. Quam aperiam aliquam optio placeat dignissimos
          voluptatum eum dicta quas fugiat et.
        </p>
        <div className="mx-auto max-w-7xl px-5 ">
          <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change">
            Exploring Our Categories
          </h1>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100">
            {["Front-End Development", "Back-End Development", "Full-Stack Development", "DevOps", "Data Science", "Mobile Development"].map((category, index) => (
              <div
                key={index}
                className="relative group p-6 bg-white rounded-lg shadow-lg hover:bg-green-300 hover:text-black transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center text-slate-600"
              >
                <p className="text-center text-lg font-semibold">{category}</p>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white rounded-lg transition duration-300 ease-in-out gap-2"></div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-center text-sm md:text-base  text-slate-350 mb-6 px-4 animate-fade-in-down delay-100 mt-10 cursor-pointer">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          recusandae velit<br/> quasi sit debitis quos exercitationem aspernatur
          facere nesciunt, dicta eum atque molestiae <br/>alias architecto
          consectetur quisquam nisi sunt molestias! Vitae deserunt maxime cum
          suscipit iure officia atque amet perspiciatis voluptatem, possimus
          esse? Eaque, molestias!
        </p>
      </section>
      <AuthoreCard/>
    </div>
  );
}
