import React, { useEffect, useState } from "react";
const Country = ({ name }) => {



  return (
    <div className="country">
      <li className="countryName">{name}</li>
    </div>
  );
};
export default Country;
