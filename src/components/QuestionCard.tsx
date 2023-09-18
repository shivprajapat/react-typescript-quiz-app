import React from "react";
import { QuestionProps } from "../types";

const QuestionCard = (props: QuestionProps) => {
  return (
    <div>
      <button className="number">
        Question {props.question}/{props.totalQuestions}
      </button>
      <p dangerouslySetInnerHTML={{ __html: props.question }} />
      <div>
        {props.answers.map((answer) => (
          <div key={answer}>
            <button
              disabled={props.useranswer ? true : false}
              value={answer}
              onClick={props.callback}
            >
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
