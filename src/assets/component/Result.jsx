import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "./Context";

function Result() {
  const { count } = useContext(Context);
  const countdown = 10 - count;

  return (
    <div>
      <div className="Result__container">
        <h1 className="Result__h1">Congratulation, you are done !!</h1>
        <p className="Result__p">10 Attempts  </p>
        <p className="Result__p">{countdown} /10 :Wrong Answers </p>
        <p className="Result__p"> {count}/10 :Right Answers <br /> <br />Your Score is not bad but you can do more !!!</p>
        <Link to="/" className="Result__btn">
          Play again!!
        </Link>
      </div>
    </div>
  );
}

export default Result;
