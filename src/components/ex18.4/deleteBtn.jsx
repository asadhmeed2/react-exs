import React from "react"



const DeleteBtn = ({ onBtnClick,text }) => {
  return (
    <input type="button" value={text} onClick={onBtnClick} />
  );
};
export default DeleteBtn;