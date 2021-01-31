import { useState, useEffect, useCallback } from "react";
import QuizBackground from "../src/components/QuizBackground";
import GitHubCorner from "../src/components/GitHubCorner";

import Button from "../src/components/Button";
import QuizContainer from "../src/components/QuizContainer";
import LoadingWidget from "../src/components/LoadingWidget";

import QuestionWidget from "../src/components/QuestionWidget";
import ResultWidget from "../src/components/ResultWidget";
import Footer from "../src/components/Footer";
import Global from "../style/global";
import db from "../db.json";

let screenStates = {
  Loading: "Loading",
  Result: "Result",
  Quiz: "Quiz",
};

export default function Quizes() {
  let [screenState, setScreenState] = useState(screenStates.Loading);
  let [acertos, setAcertos] = useState([] as boolean[]);
  let totalQuestions = db.questions.length;
  let [index, setIndex] = useState(0);
  let question = db.questions[index];

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.Quiz);
    }, 2 * 1000);
  }, []);

  let handleIndex = useCallback(() => {
    let nextQuestion = index + 1;

    if (nextQuestion < totalQuestions) {
      setIndex(nextQuestion);
    } else {
      setScreenState(screenStates.Result);
    }
  }, [index]);

  let handleAcertos = useCallback(
    (index) => {
      setAcertos([...acertos, index]);
    },
    [acertos]
  );


  return (
    <Global>
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          {screenState === screenStates.Loading && <LoadingWidget />}
          {screenState === screenStates.Quiz && (
            <QuestionWidget
              question={question}
              questionsCount={totalQuestions}
              questionIndex={index}
              setIndex={handleIndex}
              setAcertos={handleAcertos}
            />
          )}
          {screenState === screenStates.Result && (
            <ResultWidget acertos={acertos} />
          )}
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/RafaelMuniz94" />
        <Footer />
      </QuizBackground>
    </Global>
  );
}
