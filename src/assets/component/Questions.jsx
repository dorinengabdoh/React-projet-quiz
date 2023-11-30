import React, { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Context from './Context';

function Question() {
  const { questions, count, setCount } = useContext(Context);

  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();

  const handleInput = (e) => {
    const val = e.target.value;

    if (id >= 9) {
      navigate('/Result');
    } else {
      navigate(`/Questions/${+id + 1}`);
    }

    if (val === questions[id].correct_answer) {
      setCount(count + 1);
    }
  };

  console.log(questions,"i'm question");


  useEffect(() => {
    if (!questions[id]) {
      navigate('/');
    }
  }, []);

  return (
    questions.length > 0 && (
      <div>
        <div className="Question__container">
          <div className="header">
            <p className="header__p">Question {id} out of 10</p>
            <p className="header__p">Score: {count}/10 </p>
          </div>
          <div className="Question__question">
            <p className="Question__p1">The category is {questions[id].category}</p>
            <p className="Question__p2">
              {questions[id].question.replace(/[^\w\s]/gi, '')}
            </p>
            <div className="Question__btn">
              <button
                className="Question__btn1"
                value="True"
                onClick={(e) => handleInput(e, 'val')}
                type="button"
              >
                True
              </button>

              <button
                className="Question__btn2"
                type="button"
                value="False"
                onClick={(e) => handleInput(e, 'val')}
              >
                False
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Question;