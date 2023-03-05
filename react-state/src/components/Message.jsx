import { useState } from "react";

const Message = () => {
  const [message, setMessage] = useState("click button to change this message");

  const handleClick = (e) => {
    setMessage("clicked");
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <p className="heading">{message}</p>
    </div>
  );
};

export default Message;
