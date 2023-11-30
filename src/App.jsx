import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Home from "./assets/component/Home";
import Questions from "./assets/component/Questions";
import Context from "./assets/component/Context";
import Result from "./assets/component/Result";

let number = 1;
function App() {
  const [count, setCount] = useState(0);
  const [questions, setQuestions] = useState([]);

  const loadQuestions = () => {
    const api = "https://opentdb.com/api.php?amount=10&type=boolean";

    if (number === 1) {
      fetch(api)
        .then((response) => response.json())
        .then((questions) => setQuestions(questions.results));
      number += 1;
    }
  };

  useEffect(() => {
    loadQuestions();
  }, []);

  return (
    <div className="App">
      <Context.Provider value={{ questions, count, setCount }}>
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/Questions/:id" element={<Questions />} />
            <Route path="/Result" element={<Result />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
