import React, { useState } from "react";

export default function CreateQuestions() {
  const [questions, setQuestions] = useState([
    { question: "", options: [""], correctAnswer: "" },
  ]);

  const addQuestion = () => {
    setQuestions([
      ...questions,
      { question: "", options: [""], correctAnswer: "" },
    ]);
  };

  const removeQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
  };

  const addOption = (questionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options.push("");
    setQuestions(updatedQuestions);
  };

  const removeOption = (questionIndex, optionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options.splice(optionIndex, 1);
    setQuestions(updatedQuestions);
  };

  const handleQuestionChange = (index, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].question = value;
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (questionIndex, optionIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex] = value;
    setQuestions(updatedQuestions);
  };

  const handleCorrectAnswerChange = (questionIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].correctAnswer = value;
    setQuestions(updatedQuestions);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(questions);
  };

  return (
    <form onSubmit={handleSubmit} className="p-10">
      {questions.map((question, questionIndex) => (
        <div key={questionIndex} className="mb-4">
          <label
            htmlFor={`question-${questionIndex}`}
            className="block mb-2 font-bold text-gray-700"
          >
            Question {questionIndex + 1}
          </label>
          <input
            type="text"
            id={`question-${questionIndex}`}
            value={question.question}
            onChange={(event) =>
              handleQuestionChange(questionIndex, event.target.value)
            }
            placeholder="Enter your question here"
            className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
          />
          <div className="mb-4">
            <label
              htmlFor={`correctAnswer-${questionIndex}`}
              className="block mb-2 font-bold text-gray-700"
            >
              Correct Answer
            </label>
            <input
              type="text"
              id={`correctAnswer-${questionIndex}`}
              value={question.correctAnswer}
              onChange={(event) =>
                handleCorrectAnswerChange(questionIndex, event.target.value)
              }
              placeholder="Enter the correct answer here"
              className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor={`options-${questionIndex}`}
              className="block mb-2 font-bold text-gray-700"
            >
              Options
            </label>
            <div className="flex flex-col gap-2">
              {question.options.map((option, optionIndex) => (
                <div key={optionIndex} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name={`option-${questionIndex}`}
                    value={option}
                    onChange={() =>
                      handleOptionChange(questionIndex, optionIndex, option)
                    }
                    className="text-blue-500"
                  />
                  <input
                    type="text"
                    value={option}
                    onChange={(event) =>
                      handleOptionChange(
                        questionIndex,
                        optionIndex,
                        event.target.value
                      )
                    }
                    placeholder={`Option ${optionIndex + 1}`}
                    className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
                  />
                  <button
                    type="button"
                    onClick={() => removeOption(questionIndex, optionIndex)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md focus:outline-none"
                  >
                    x
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => addOption(questionIndex)}
                className="bg-green-500 hover:bg-green-600 w-32 text-white px-2 py-1 rounded-md focus:outline-none"
              >
                + Add Option
              </button>
            </div>
          </div>
          <button
            type="button"
            onClick={() => removeQuestion(questionIndex)}
            className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-md focus:outline-none"
          >
            Remove Question
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={addQuestion}
        className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded-md focus:outline-none mr-2"
      >
        Add Question
      </button>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-md focus:outline-none"
      >
        Submit
      </button>
    </form>
  );
}
