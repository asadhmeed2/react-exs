import React from "react";
import { Data } from "./data";
import DeleteBtn from "./deleteBtn";
const CheckBox = () => {
  const [data, setData] = React.useState(Data);
  const [checkedData, setCheckData] = React.useState([]);

  const onDeleteBtnClick = (e) => {
    let tempData2 = [...data];
    checkedData.map((checked) => {
      tempData2 = tempData2.filter((el) => el !== checked);
    return tempData2;
    });
    setData(tempData2);
  };
  const onResetBtnClick = () => {
    setData(Data);
    setCheckData([]);
  };
  const onCheckboxChecked = (e) => {
    let tempcheckedData = [...checkedData];
    if (e.target.checked) {
      tempcheckedData = [...tempcheckedData, e.target.name];
    } else {
      tempcheckedData = tempcheckedData.filter(
        (el) => el.name !== e.target.name
      );
    }
    setCheckData(tempcheckedData);
  };
  return (
    <div className="checkBoxContainer">
      <DeleteBtn onBtnClick={onDeleteBtnClick} text="Delete" />
      <DeleteBtn onBtnClick={onResetBtnClick} text="Reset" />
      {data.map((text, i) => {
        return (
          <div key={i} className="checkBox">
            <label>
              <input
                type="checkbox"
                name={text}
                checked={checkedData.includes(text)}
                id={text}
                onClick={onCheckboxChecked}
              />
              {text}
            </label>
          </div>
        );
      })}
    </div>
  );
};
export default CheckBox;
