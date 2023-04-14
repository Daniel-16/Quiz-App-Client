import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Axios from "axios";

const CreateQuestions = () => {
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  const [questions, setQuestions] = useState([
    {
      id: uuidv4(),
      question: "",
      options: [{ id: uuidv4(), option: "" }],
      correctAnswer: "",
    },
  ]);

  // const handleTitleChange = (event) => {
  //   setTitle(event.target.value);
  // };

  // const handleDescriptionChange = (event) => {
  //   setDescription(event.target.value);
  // };

  const handleQuestionChange = (questionIndex, event) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].question = event.target.value;
    setQuestions(newQuestions);
  };

  const handleOptionChange = (questionIndex, optionIndex, event) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].options[optionIndex].option =
      event.target.value;
    setQuestions(newQuestions);
  };

  const handleCorrectAnswerChange = (questionIndex, event) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].correctAnswer = event.target.value;
    setQuestions(newQuestions);
  };

  const addQuestion = () => {
    const newQuestions = [...questions];
    newQuestions.push({
      id: uuidv4(),
      question: "",
      options: [{ id: uuidv4(), option: "" }],
      correctAnswer: "",
    });
    setQuestions(newQuestions);
  };

  const removeQuestion = (questionIndex) => {
    const newQuestions = [...questions];
    newQuestions.splice(questionIndex, 1);
    setQuestions(newQuestions);
  };

  const addOption = (questionIndex) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].options.push({ id: uuidv4(), option: "" });
    setQuestions(newQuestions);
  };

  const removeOption = (questionIndex, optionIndex) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].options.splice(optionIndex, 1);
    setQuestions(newQuestions);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(questions);
    const formQuestions = questions.map(
      ({ question, options, correctAnswer }) => ({
        prompt: question,
        options: options.map(({ option }) => option),
        answer: correctAnswer,
      })
    );
    console.log(questions.map((question) => question.options));
    // Axios.post(
    //   `https://quiz-app-server-jcyq.onrender.com/api/createQuestions/${localStorage.getItem(
    //     "quizId"
    //   )}`,
    //   {
    //     prompt: questions.map(question => question)
    //    }
    // )
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  };

  return (
    <div className="w-full max-w-3xl mx-auto my-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        {questions.map((question, questionIndex) => (
          <div key={question.id} className="mb-6">
            <div className="mb-4">
              <label
                htmlFor={`question-${questionIndex}`}
                className="block text-gray-700 font-bold mb-2"
              >
                Question {questionIndex + 1}
              </label>
              <input
                type="text"
                id={`question-${questionIndex}`}
                value={question.question}
                onChange={(event) => handleQuestionChange(questionIndex, event)}
                placeholder="Enter the question"
                className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            {question.options.map((option, optionIndex) => (
              <div key={option.id} className="mb-2">
                <label
                  htmlFor={`question-${questionIndex}-option-${optionIndex}`}
                  className="flex items-center"
                >
                  <input
                    type="radio"
                    id={`question-${questionIndex}-option-${optionIndex}`}
                    name={`question-${questionIndex}`}
                    value={option.option}
                    onChange={(event) =>
                      handleCorrectAnswerChange(questionIndex, event)
                    }
                    checked={question.correctAnswer === option.option}
                    className="mr-2"
                  />
                  <input
                    type="text"
                    id={`question-${questionIndex}-option-${optionIndex}`}
                    value={option.option}
                    onChange={(event) =>
                      handleOptionChange(questionIndex, optionIndex, event)
                    }
                    placeholder="Enter the option"
                    className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
                  />
                  {question.options.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeOption(questionIndex, optionIndex)}
                      className="ml-2 text-red-600 hover:text-red-900"
                    >
                      Remove
                    </button>
                  )}
                </label>
              </div>
            ))}
            {question.options.length < 6 && (
              <button
                type="button"
                onClick={() => addOption(questionIndex)}
                className="text-sm text-blue-600 hover:text-blue-900 underline mb-2"
              >
                Add option
              </button>
            )}
            {questions.length > 1 && (
              <button
                type="button"
                onClick={() => removeQuestion(questionIndex)}
                className="text-sm text-red-600 hover:text-red-900 underline mb-2 ml-2"
              >
                Remove question
              </button>
            )}
          </div>
        ))}
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={addQuestion}
            className="text-sm text-blue-600 hover:text-blue-900 underline"
          >
            Add question
          </button>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateQuestions;
