import React, { useState } from "react";
import Axios from "axios";
import FloatButton from "./Button";
import { useNavigate } from "react-router-dom";

export default function Quizzes() {
  const [quiz, setQuiz] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  Axios.get(`https://quiz-app-server-jcyq.onrender.com/api/getQuizzes`)
    .then((res) => {
      console.log(res.data);
      // const { questions } = res.data;
      setQuiz(res.data.quiz);
      setLoading(false);
    })
    .catch((err) => {
      console.error(err);
      setLoading(false);
      setError(true);
    });
  if (loading) {
    return (
      // <svg
      //   className="h-6 w-6 inline-block animate-spin transform origin-center text-blue-500"
      //   viewBox="0 0 24 24"
      // >
      //   <path
      //     fill="currentColor"
      //     d="M12 2a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1z"
      //   />
      // </svg>
      <h1 className="font-bold text-5xl text-center mt-20">Loading...</h1>
    );
  } else if (error) {
    return (
      <div className="flex justify-center items-center mt-10">
        <h1 className="font-bold text-4xl">An error occured</h1>
      </div>
    );
  } else {
    return (
      <div>
        {quiz.map((quizzes) => (
          <div
            key={quizzes._id}
            onClick={() => {
              localStorage.setItem("openQuizID", quizzes._id);
              navigate("/quiz");
            }}
            className="max-w-lg mx-auto bg-white rounded-md md:overflow-hidden shadow-md mt-5 cursor-pointer mb-3"
          >
            <div className="px-3 py-1">
              <h2 className="text-lg font-medium text-gray-800">
                {quizzes.quizname}
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                {quizzes.description}
              </p>
              <p className="text-md text-gray-400">
                Points: <small className="">{quizzes.points}</small>
                <br />
                Time: <small>{quizzes.timeLimit}</small>
              </p>
            </div>
          </div>
        ))}
        <FloatButton />
      </div>
    );
  }
}
