import { GlobalStyle } from "./styled";
import QuizScreen from "./QuizScreen";

// https://opentdb.com/api.php?amount=10

const App = () => {
  return (
    <>
      <GlobalStyle />
      <QuizScreen />
    </>
  );
};
export default App;
