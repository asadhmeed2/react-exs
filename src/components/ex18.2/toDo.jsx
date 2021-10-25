import React from "react";
import "./toDo.css";
const ToDoContainer = () => {
  const [data, setData] = React.useState([
    { name: "CSS", completed: true },
    { name: "JavaScript", completed: true },
    { name: "Learn React", completed: false },
    { name: "Learn mongoDB", completed: false },
    { name: "Learn Node JS", completed: false },
  ]);

  const handleCompleted = (e) => {
    const tempData = [...data];
    tempData[parseInt(e.target.id)].completed =
      !tempData[parseInt(e.target.id)].completed;
    setData(tempData);
  };

  return (
    <div className="toDoContainer">
      {data.map((note, i) => {
        return (
          <div key={i} className="note">
            <div
              className=""
              style={{
                textDecoration: data[i].completed ? "line-through" : "",
              }}
            >
              {data[i].name}
            </div>
            <span id={i} className="cross" onClick={handleCompleted}>
              {data[i].completed ? "x" : "o"}
            </span>
          </div>
        );
      })}
    </div>
  );
};
export default ToDoContainer;
