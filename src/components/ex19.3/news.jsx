import React from "react";

const News = ({ title, url = "#" }) => {
  return (
    <li>
      <a href={url} rel="noreferrer" target="_blank">
        {title}
      </a>
    </li>
  );
};
export default News;
