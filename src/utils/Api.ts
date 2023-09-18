import { Difficulty, Question } from "../types";
import { shuffleArray } from "./utils";

export const fetchQuestions = async (
  amount: number,
  difficulty: Difficulty
) => {
  const response = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const data = await (await fetch(response)).json();
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
