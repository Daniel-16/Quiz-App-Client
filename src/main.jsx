import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateQuiz from "./components/CreateQuiz";
import Quizzes from "./components/Quizzes";
import OpenQuiz from "./components/OpenQuiz";
import CreateQuestions from "./components/CreateQuestions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/createQuiz",
    element: <CreateQuiz />,
  },
  {
    path: "/quizzes",
    element: <Quizzes />,
  },
  {
    path: "/quiz",
    element: <OpenQuiz />,
  },
  {
    path: "/createQuestions",
    element: <CreateQuestions />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
