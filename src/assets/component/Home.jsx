import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "./Context";

function Home() {
  const { setCount } = useContext(Context);
  setCount(0);
  return (
    <div>
      <div className="heading">
        <div>
          <h1>Quiz App</h1>
          <p className="heading__p1">
            A simple quiz application coded in React.js
          </p>
        </div>
        <div>
          <h1>Instructions</h1>
          <p className="heading__p2">
             You will answer either True or
            False to all the 10 questions.
          </p>
        </div>
        <Link to="/Questions/1" className="btn">
          Start the Game!
        </Link>
      </div>
    </div>
  );
}

export default Home;
