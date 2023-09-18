import { MouseEvent, useState } from "react";
import QuestionCard from "./components/QuestionCard";
import { AnswerObject, Difficulty, QuestionState } from "./types";
import { fetchQuestions } from "./utils/Api";
import { Spinner } from "./styled";

const TOTAL_QUESTION = 10;

const QuizScreen = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestion = await fetchQuestions(TOTAL_QUESTION, Difficulty.EASY);
    setQuestions(newQuestion);
    setScore(0);
    setUserAnswers([]);
    setLoading(false);
  };

  const checkAnswer = (e: MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;

      if (correct) setScore((prev) => prev + 1);

      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTION) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };
  return (
    <div className="wrapper">
      <div className="head">
        <h1>Quiz App</h1>
        <button className="number">
          Total Question /<b>{TOTAL_QUESTION}</b>
        </button>
        {gameOver || userAnswers.length === TOTAL_QUESTION ? (
          <button onClick={startTrivia} className="score">Start</button>
        ) : null}
        {!gameOver ? <button className="score">score {score}</button> : null}
      </div>
      {loading && <Spinner />}
      {!loading && !gameOver && (
        <QuestionCard
          questionNr={number + 1}
          totalQuestions={TOTAL_QUESTION}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
      )}

      <div className="footer">
        {!gameOver &&
        !loading &&
        userAnswers.length === number + 1 &&
        number !== TOTAL_QUESTION - 1 ? (
          <button onClick={nextQuestion}>Next</button>
        ) : null}
      </div>
    </div>
  );
};

export default QuizScreen;
