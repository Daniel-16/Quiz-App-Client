import React, { useState } from "react";
// import "./input.css";

export default function CreateQuiz() {
  const [selectedTime, setSelectedTime] = useState("");
  const handleSelectedTime = (e) => {
    setSelectedTime(e.target.value);
  };
  return (
    <div className="mt-4 container md:px-28 px-10">
      <h1 className="text-lg md:text-5xl font-bold md:px-4 text-center">
        Create a Quiz
      </h1>
      <div
        className="max-w-md mx-auto bg-white rounded-md md:overflow-hidden shadow-md mt-10"
        // style={{ width: "30rem" }}
      >
        {/* <img class="object-cover object-center w-full h-48" src="https://via.placeholder.com/640x360" alt="Card image"> */}
        <div className="px-4 py-2">
          <h2 className="text-lg font-medium text-gray-800 text-center">
            Card Title
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor.
          </p>
          <form>
            <div className="" style={{ textAlign: "center" }}>
              <input
                // style={{ width: "25.5rem" }}
                type="text"
                className="py-3 pl-3 border rounded-lg outline-none mt-2 w-full"
                placeholder="Title of Quiz"
                required
              />
              <br />
              <textarea
                // style={{ width: "25.5rem" }}
                type="text"
                className="py-3 pl-3 border rounded-lg outline-none mt-2 w-full"
                placeholder="Description of Quiz"
                required
              />
            </div>
            <div
              className="flex flex-row space-x-3"
              // style={{ width: "25.5rem" }}
            >
              <input
                type="number"
                className="py-3 pl-3 border rounded-lg outline-none mt-2 input w-full"
                placeholder="Points"
                required
              />
              <select
                value={selectedTime}
                onChange={handleSelectedTime}
                id="options"
                className="rounded-lg border outline-none text-gray-600 mt-2 w-full"
                placeholder="Time Limit"
                required
              >
                <option value="">--Time Limit--</option>
                <option value="30 minutes">30 minutes</option>
                <option value="45 minutes">45 minutes</option>
                <option value="1 hour">1 hour</option>
              </select>
            </div>
            <br />
            <button className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-4 rounded-md">
              Create Quiz
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
