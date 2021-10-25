import React, { useEffect } from "react";
import './textHider.css'
const TextHider = ({ text, length }) => {
  const [textObj] = React.useState({ text: text, length: length });
  const [isTextLengthSmallerThanLength, setIsTextLengthSmallerThanLength] =
    React.useState(true);
  const textToSubText = () => {
    setIsTextLengthSmallerThanLength(true);
  };
  const subTextToText = () => {
    setIsTextLengthSmallerThanLength(false);
  };
  return (
    <div className="textContainer">
      {textObj.length !== 0 && textObj.text.length < textObj.length ? (
        <div>{textObj.text}</div>
      ) : isTextLengthSmallerThanLength ? (
        <div>
          {textObj.text.slice(0, textObj.length - 1)}...
          <span className="showHide" onClick={subTextToText}>
            read more
          </span>
        </div>
      ) : (
        <div>
          {`${text} `}
          <span className="showHide" onClick={textToSubText}>
            show less
          </span>
        </div>
      )}
    </div>
  );
};
export default TextHider;
