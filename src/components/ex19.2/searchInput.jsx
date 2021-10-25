import React, { useEffect, useState } from "react";

const SearchText = ({ value, onChange }) => {
  const [searchText, setSearchText] = useState(value);

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
