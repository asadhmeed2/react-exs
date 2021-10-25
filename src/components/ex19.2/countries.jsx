import React, { useEffect, useState } from "react";
import SearchText from "./searchInput";
import Country from "./country";
const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCoutries, setFilteredCounteries] = useState([]);
  const [searchedText, setSearchedText] = useState("");

  useEffect(async () => {
    let data = await (await fetch(" https://restcountries.com/v2/all")).json();
    setCountries(Array.from(data));
  }, []);
  const onInputChange = (value) => {
    setSearchedText(value);
    let filteredData = countries.filter((country) =>
      country.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCounteries(filteredData);
  };
  return (
    <div className="countries">
      <SearchText value={searchedText} onChange={onInputChange} />
      <ul>
        {filteredCoutries.map((country) => {
          return <Country key={country.numericCode} name={country.name} />;
        })}
      </ul>
    </div>
  );
};
export default Countries;
