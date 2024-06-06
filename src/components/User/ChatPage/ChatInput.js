import Button from "@/components/UI/Button/Button";
import useInput from "@/hooks/use-Input";
import React from "react";

const ChatInput = ({ onSendMessage, loading }) => {
  const chatInput = useInput({
    validateValue: (value) => {
      return value.trim() !== "";
    },
  });

  const handleMessageSubmit = () => {
    if (chatInput.isValid) {
      onSendMessage(chatInput.value.trim());
      chatInput.reset();
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleMessageSubmit();
    }
  };

  return (
    <div className="flex items-center p-2 bg-white border-t">
      <input
        className="flex-1 bg-gray-50 hover:bg-gray-100 focus:bg-gray-200 px-4 py-2 rounded-md outline-none transition-all md:w-full w-36"
        placeholder="Type Something..."
        value={chatInput.value}
        onChange={chatInput.valueChangeHandler}
        onKeyPress={handleKeyPress}
      />
      <Button
        className="ml-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-2 rounded-lg"
        onClick={handleMessageSubmit}
        disabled={!chatInput.isValid}
        style={{ backgroundColor: !chatInput.isValid ? "#ccc" : undefined }}
        doNotScrollToTop={true}
      >
        {loading ? "Loading" : "send"}
      </Button>
    </div>
  );
};

export default ChatInput;
