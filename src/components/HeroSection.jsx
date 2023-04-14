import React from "react";
import testImg from "../assets/testImg2.jpg";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="flex md:flex-row items-center flex-col mt-20 lg:px-20">
      <div className="container md:w-1/2">
        <div className="md:px-7 px-2">
          <h1 className="font-bold text-4xl mb-3">
            Landing Page Title or Caption Goes Here
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Laudantium, eaque?Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Neque veniam itaque
          </p>
          <div className="py-4">
            <Link to="/createQuiz">
              <button className="bg-orange-500 px-4 py-2 text-white rounded-md transition ease-in-out delay-150">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="px-2 md:w-1/2 md:px-10">
        <img src={testImg} alt="" className="w-75 rounded-xl" />
      </div>
    </div>
  );
}
