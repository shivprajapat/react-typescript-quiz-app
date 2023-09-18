import { ButtonWrapper } from "../styled";
import { QuestionProps } from "../types";

const QuestionCard = (props: QuestionProps) => {
  return (
    <div className="question-card">
      <h3 dangerouslySetInnerHTML={{ __html: props.question }} />
      
      <ul>
        {props.answers.map((answer) => (
          <ButtonWrapper
            key={answer}
            correct={props.userAnswer?.correctAnswer === answer}
            userClicked={props.userAnswer?.answer === answer}
          >
            <button
              disabled={props.userAnswer ? true : false}
              value={answer}
              onClick={props.callback}
            >
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </ButtonWrapper>
        ))}
      </ul>
    </div>
  );
};

export default QuestionCard;
