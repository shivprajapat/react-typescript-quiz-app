import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    font-family: sans-serif;
    padding: 0;
    margin: 0;
    display: grid;
    place-items: center;
    min-height: 100vh;
    width: 100%;
    background-color: #1F1515;
    color: #fff;
    .head{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    .score{
        background-color: #5c5454;
    }
    button{
      padding: 10px 20px;
    background-color: #DD3C9C;
    color: #fff;
}
}

button {
    border-radius: 4px;
    border-radius: 5px;
    font-size: 20px;
    padding: 8px 10px;
    border: none;
    cursor: pointer;
}

li {
    list-style: none;
}

ul,
h1 {
    padding: 0;
    margin: 0;
    text-align: center
}

button {
    border: none;
}

.wrapper {
    background-color: #281e1e;
    max-width: 95%;
    width: 600px;
    padding: 25px;
    border-radius: 10px;
    h3{
        font-size: 25px;
    margin: 20px 0;
}
}

.question-card {
    .number {

        b{
            color: #DD3C9C;
}
    }

ul {
    li{  
    margin-block: 10px;
    button{
    border-radius: 4px;
    width: 100%;
}}
}
}

.footer {
    border-top: 1px solid #ddd;
    padding-top: 20px;
    margin-top: 20px;
    text-align: right;
    button{
        padding: 10px 30px;
        background-color: #5c5454;
        color: #fff;
}
}}
`;
export const Spinner = styled.div`
  border: 4px solid pink;
  border-top: 4px deeppink solid;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  margin: 0 auto;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

type ButtonWrapperProps = { correct: boolean; userClicked: boolean };

export const ButtonWrapper = styled.li<ButtonWrapperProps>`
  button {
    background: ${({ correct, userClicked }) =>
      correct ? "#0f860f" : !correct && userClicked ? "#df0303" : "#5c5454"};
    color: #fff;
  }
`;
