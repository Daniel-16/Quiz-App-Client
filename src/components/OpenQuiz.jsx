import React, { useState } from "react";
import Axios from "axios";

export default function OpenQuiz() {
  const [quizDetails, setQuizDetails] = useState("");
  Axios.get(
    `https://quiz-app-server-jcyq.onrender.com/api/getSingleQuiz/${localStorage.getItem(
      "openQuizID"
    )}`
  )
    .then((res) => {
      console.log(res.data.quiz);
      setQuizDetails(res.data.quiz);
    })
    .catch((err) => {
      console.error(err.message);
    });
  return (
    <div className="container p-4">
      <div className="max-w-lg mx-auto bg-white rounded-md md:overflow-hidden shadow-md mt-5 cursor-pointer mb-3">
        <div className="px-3 py-1">
          <h2 className="text-lg font-medium text-gray-800">
            {quizDetails.quizname}
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            {quizDetails.description}
          </p>
          <p className="text-md text-gray-400">
            Points: <small className="">{quizDetails.points}</small>
            <br />
            Time: <small>{quizDetails.timeLimit}</small>
          </p>
          <button className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-4 rounded-md mb-2">
            Create Questions
          </button>
        </div>
      </div>
    </div>
  );
}
