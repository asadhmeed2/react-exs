import React from "react";

const SearchText = ({ value, onChange }) => {
  const onInputChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <div className="searchText">
      <input type="text" value={value} onChange={onInputChange} />
    </div>
  );
};
export default SearchText;
