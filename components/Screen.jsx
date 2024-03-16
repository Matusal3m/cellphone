"use client"
import { useState } from "react";
import Button from "./Button";

const Screen = () => {
  const [displayContent, setDisplayContent] = useState("");

  const buttonContents = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "/", "0"];

  const handleButtonClick = (content) => {
    setDisplayContent(prevContent => prevContent + content);
  };

  const handleClearClick = () => {
    setDisplayContent("");
  };

  return (
    <>
      <div className="grid grid-cols-3 bg-slate-500 gap-3 p-2 rounded-2xl">
        {buttonContents.map(content => (
          <Button key={content} content={content} changeContent={handleButtonClick} />
        ))}
        <Button key="clear" content="Clear" changeContent={handleClearClick} />
      </div>

      <input
        id="display"
        type="text"
        placeholder="99 99999 9999"
        className="bg-black px-4 py-2 rounded-xl w-3/2 border border-white text-3xl text-white"
        value={displayContent}
      />
    </>
  );
};

export default Screen;
