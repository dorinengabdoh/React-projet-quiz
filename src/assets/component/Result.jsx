import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from './Context';

function Result() {
  const { count } = useContext(Context);
  const countdown = 10 - count;
  return (
    <div>
      <div className="Result__container">
        <h1 className="Result__h1">Congratulation, Quizz Completed.</h1>
        <p className="Result__p">Attempts: 10</p>
        <p className="Result__p">Wrong Answers: {countdown} </p>
        <p className="Result__p">Right Answers: {count}</p>
        <Link to="/" className="Result__btn">
          Play again!!
        </Link>
      </div>
    </div>
  );
}

export default Result;