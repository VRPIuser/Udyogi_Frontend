import { ValueUndefinedValidations } from "@/components/InputValidations/InputValidations";
import Button from "@/components/UI/Button/Button";
import InputWithInvalidText from "@/components/UI/Input/InputWithInvalidText";
import useInput from "@/hooks/use-Input";
import { useState } from "react";
import { colorTheme } from "../../../../../../constants";
import LoadingButton from "@/components/UI/LoadingButton/LoadingButton";
import CustomImage from "@/components/UI/Image/Image";

const JobPostScreeningQuestions = () => {
  const screeningQuestionsInput = useInput({
    validateValue: ValueUndefinedValidations,
  });

  const [questions, setQuestions] = useState([]);
  const [add, setAdd] = useState(false);

  const HandleInputQuestions = () => {
    setQuestions([...questions, screeningQuestionsInput.value]);
    setAdd(false);
    screeningQuestionsInput.reset();
  };

  const SubmitHandler = () => {
    console.log(questions);
  };

  return (
    <div className="pl-16">
      <h1 className="mb-8 font-bold text-orange-500">Screening Questions</h1>
      <ul className="flex flex-col gap-0 mb-8">
        {questions.map((question, index) => (
          <div key={index} className="flex gap-4 items-center">
            <li key={index}>
              {index + 1 + ". "}
              {question}
            </li>
            <CustomImage
              src={`/assets/icons/delete.png`}
              alt="delete"
              width={20}
              height={20}
              onClick={() => {
                setQuestions(
                  questions.filter((item, i) => {
                    return i !== index;
                  })
                );
              }}
              className=" bg-zinc-100 rounded-md "
              classForDiv={
                "w-8 h-8 p-2 cursor-pointer hover:bg-zinc-200 transition-all rounded-full"
              }
            >
              remove
            </CustomImage>
          </div>
        ))}
      </ul>

      {add ? (
        <div className="flex gap-4">
          <InputWithInvalidText
            inputFields={screeningQuestionsInput}
            placeholder={"Enter your Question"}
            // ErrorMessage={"Invalid value"}
            colorTheme={colorTheme.input}
            styles={{
              maxWidth: "500px",
            }}
          />
          <div className="grid grid-cols-2 gap-4">
            <Button
              className={""}
              onClick={HandleInputQuestions}
              disabled={screeningQuestionsInput.value.length < 2}
            >
              Add
            </Button>
            <button
              className={
                "bg-white border border-orange-500 rounded-sm px-6 py-2 hover:bg-zinc-100 transition-all"
              }
              onClick={() => {
                setAdd(false);
              }}
            >
              cancel
            </button>
          </div>
        </div>
      ) : (
        <span
          onClick={() => {
            setAdd(true);
          }}
          className="border border-orange-500 rounded-sm px-2 py-1 text-orange-500 bg-white cursor-pointer font-semibold text-sm hover:bg-zinc-100 transition-all"
        >
          Add new question
        </span>
      )}
      <div className="flex items-center justify-center py-8">
        <LoadingButton
          onClick={SubmitHandler}
          disabled={questions.length < 0}
          isLoading={false}
          text={"Submit"}
        />
      </div>
    </div>
  );
};

export default JobPostScreeningQuestions;
