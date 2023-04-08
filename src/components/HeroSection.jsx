import React from "react";
import testImg from "../assets/testImg.png";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="flex lg:flex-row items-center flex-col-reverse">
      <div className="md:w-1/2">
        <img src={testImg} alt="" className="h-50 w-50" />
      </div>
      <div className="container">
        <div className="px-7 mr-4">
          <h1 className="font-bold text-4xl mb-3">Lorem Ipsum Dolor</h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Laudantium, eaque?Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Neque veniam itaque voluptates illum reprehenderit
            unde facilis tempore ex pariatur deleniti?
          </p>
          <div className="py-4">
            <Link to="/createQuiz">
              <button className="bg-gray-700 px-4 py-2 text-white rounded-md">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
