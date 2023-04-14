import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function FloatButton() {
  return (
    <div className="fixed bottom-0 right-0 z-10 p-4">
      <Link to={"/createQuiz"}>
        <button className="bg-blue-600 text-white rounded-full h-10 w-10">
          +
        </button>
      </Link>
    </div>
  );
}
