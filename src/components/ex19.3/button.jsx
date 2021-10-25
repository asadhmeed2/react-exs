import React from "react";

const SearchText = ({ value, onClick }) => {
  const onButtonClick = () => {
    onClick();
  };
  return (
    <div className="searchBtn">
      <input type="button" value={"search"} onClick={onButtonClick} />
    </div>
  );
};
export default SearchText;
