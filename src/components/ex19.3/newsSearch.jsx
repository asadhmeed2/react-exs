import React, { useEffect, useState } from "react";
import SearchText from "./searchInput";
import News from "./news";
import Button from "./button";
const NewsSearch = () => {
  const [userSearchedData, setUserSearchedData] = useState([]);

  const [searchedText, setSearchedText] = useState("");

  useEffect(async () => {
    try {
      let data = await (
        await fetch(" http://hn.algolia.com/api/v1/search?query=programing")
      ).json();
      setUserSearchedData(Array.from(data.hits));
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }, []);
  const onInputChange = (value) => {
    setSearchedText(value);
  };
  const onBtnSearchClick = async () => {
    try {

      let data = await (
        await fetch(`http://hn.algolia.com/api/v1/search?query=${searchedText}`)
      ).json();
      setUserSearchedData(Array.from(data.hits));
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="countries">
      <h1>Algolia search</h1>
      <SearchText value={searchedText} onChange={onInputChange} />
      <Button onClick={onBtnSearchClick} />
      <ul>
        {userSearchedData.map((article) => {
          return (
            <News
              key={article.objectID}
              title={article.title}
              url={article.url}
            />
          );
        })}
      </ul>
    </div>
  );
};
export default NewsSearch;
