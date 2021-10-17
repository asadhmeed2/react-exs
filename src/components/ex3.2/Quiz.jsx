import react from "react";
import Q2 from "./Q2";
import Q1 from "./Q1";
import QuizTitle from "./QuizTitle";
import "./box.css";

const Quiz = () => {
  return (
    <div className="Quiz">
      <QuizTitle />
      <Q1 />
      <Q2 />
    </div>
  );
};

export default Quiz;
