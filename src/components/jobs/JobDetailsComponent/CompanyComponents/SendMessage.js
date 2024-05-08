import { useEffect, useRef, useState } from "react";
import { fullNameValidation } from "@/components/InputValidations/InputValidations";
import InputWithInvalidText from "@/components/UI/Input/InputWithInvalidText";
import useInput from "@/hooks/use-Input";
import CustomImage from "@/components/UI/Image/Image";

const questionsData = [
  {
    question: "How many years of experience do you have?",
    // Validation function for the first question
  },
  {
    question: "What is your salary expectations (in lakhs)?",
    // Validation function for the second question
  },
  {
    question: "What is your notice period?",
    // Validation function for the third question
  },
  {
    question: "Email address",
    // Validation function for the fourth question
  },
];

const SendMessage = ({ onCloseOverlay, showQuestions }) => {
  // State to store the questions and answers
  const [inputs, setInputs] = useState(
    questionsData.map((question) => ({
      question: question.question,
      answer: "",
    }))
  );

  const [formIsValid, setFormIsValid] = useState(false);

  const containerRef = useRef(null);

  //   useEffect(() => {
  //     const handleClickOutside = (event) => {
  //       if (
  //         showQuestions &&
  //         containerRef.current &&
  //         !containerRef.current.contains(event.target)
  //       ) {
  //         onCloseOverlay();
  //       }
  //     };

  //     document.body.addEventListener("click", handleClickOutside);

  //     return () => {
  //       document.body.removeEventListener("click", handleClickOutside);
  //     };
  //   }, [onCloseOverlay]);

  useEffect(() => {
    setFormIsValid(inputs.every(({ answer }) => fullNameValidation(answer)));
  }, [inputs]);

  // Function to update the answer for a specific question
  const handleAnswerChange = (index, value) => {
    const updatedInputs = [...inputs];
    updatedInputs[index].answer = value;
    setInputs(updatedInputs);
  };

  const HandleSubmit = () => {
    console.log(inputs);
  };

  return (
    <div className="fixed top-0 left-0 z-10 w-full h-full bg-opacity-20 bg-black">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit mx-auto bg-white rounded-lg p-8 h-96 overflow-y-scroll scroll-smooth"
        ref={containerRef}
      >
        <div className="flex gap-2 justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-center">
            Apply for this Job
          </h1>
          <div
            className="hover:bg-zinc-200 rounded-full p-2"
            onClick={onCloseOverlay}
          >
            <CustomImage
              src="/assets/icons/close.png"
              width={20}
              height={20}
              alt="Close"
              className="text-2xl  transition-all"
            />
          </div>
        </div>
        {inputs.map((input, index) => {
          const isValid = fullNameValidation(input.answer);
          return (
            <div className="" key={index}>
              <h2 className=" my-4">{input.question}</h2>
              <input
                value={input.answer}
                onChange={(e) => handleAnswerChange(index, e.target.value)}
                placeholder="Enter your Answer"
                valid={isValid}
                className="rounded-2xl w-full border-zinc-400 p-2 border"
              />
            </div>
          );
        })}
        <button
          className={`${
            formIsValid
              ? "bg-blue-500 hover:bg-blue-700 transition-all"
              : "bg-zinc-400"
          }  text-white font-bold py-2 px-4 rounded-2xl mt-8 w-full`}
          onClick={HandleSubmit}
          disabled={!formIsValid}
        >
          {formIsValid ? "Apply for the job" : "Please Fill the Answers"}
        </button>
      </div>
    </div>
  );
};

export default SendMessage;
