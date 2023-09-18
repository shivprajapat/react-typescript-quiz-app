import React, { MouseEvent, useState } from "react";
import QuestionCard from "./components/QuestionCard";
import { AnswerObject, Difficulty, QuestionState } from "./types";
import { fetchQuestions } from "./utils/Api";

// https://opentdb.com/api.php?amount=10

const TOTAL_QUESTION = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [useranswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameover, setGameover] = useState(true);

  const startTrivia = async () => {
    setLoading(true);
    setGameover(false);
    const newQuestion = await fetchQuestions(TOTAL_QUESTION, Difficulty.EASY);
    setQuestions(newQuestion);
    setScore(0);
    setUserAnswers([]);
    setLoading(false);
  };

  const checkAnswer = (e: MouseEvent<HTMLButtonElement>) => {
    if (!gameover) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;

      if (correct) setScore((prev) => prev + 1);

      const answerobject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerobject]);
    }
  };

  const nextQuestion = () => {
    const nextquestion = number + 1;

    if (nextquestion === TOTAL_QUESTION) {
      setGameover(true);
    } else {
      setNumber(nextquestion);
    }
  };

  return (
    <div>
      <h1>Quiz App</h1>
      {gameover || useranswers.length === TOTAL_QUESTION ? (
        <button onClick={startTrivia}>start</button>
      ) : null}

      {!gameover ? <button>score {score}</button> : null}
      {loading && <p>loading...</p>}

      {!loading && !gameover && (
        <QuestionCard
          questionNr={number + 1}
          totalQuestions={TOTAL_QUESTION}
          question={questions[number].question}
          answers={questions[number].answers}
          useranswer={useranswers ? useranswers[number] : undefined}
          callback={checkAnswer}
        />
      )}

      {!gameover &&
      !loading &&
      useranswers.length === number + 1 &&
      number !== TOTAL_QUESTION - 1 ? (
        <button onClick={nextQuestion}>next</button>
      ) : null}
    </div>
  );
};
export default App;
