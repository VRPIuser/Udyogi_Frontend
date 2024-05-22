import {
  ValueUndefinedValidations,
  fullNameValidation,
} from "@/components/InputValidations/InputValidations";
import Button from "@/components/UI/Button/Button";
import useInput from "@/hooks/use-Input";

const ChatInput = ({ onSendMessage }) => {
  const chatInput = useInput({
    validateValue: (value) => {
      return value !== "";
    },
  });

  const handleMessageSubmit = () => {
    if (chatInput.isValid) {
      if (chatInput.value === "") {
        return;
      } else {
        onSendMessage(chatInput.value);
        chatInput.reset();
      }
    }
  };

  return (
    <div className="flex items-center px-4 py-2 bg-white border-t">
      <input
        className="flex-1 bg-gray-50 hover:bg-gray-100 focus:bg-gray-200 px-4 py-2 rounded-md outline-none transition-all"
        placeholder="Type Something..."
        value={chatInput.value}
        onChange={chatInput.valueChangeHandler}
      />
      <Button
        className="ml-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg"
        onClick={handleMessageSubmit}
        disabled={!chatInput.isValid}
        style={{ backgroundColor: !chatInput.isValid && "#ccc" }}
        doNotScrollToTop={true}
      >
        Send
      </Button>
    </div>
  );
};

export default ChatInput;
