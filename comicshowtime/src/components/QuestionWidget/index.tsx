import React, { useState } from "react";
import styled from "styled-components";
import Widget from "../Widget";
import AlternativeList from "../AlternativeList";
import ImageContainer from "../ImageContainer";

interface Question {
  image: string;
  image_title: string;
  title: string;
  description: string;
  answer: number;
  alternatives: string[];
}

interface IWidget {
  question: Question;
  questionsCount: number;
  questionIndex: number;
  setIndex(): void;
  setAcertos(index:boolean): void;
}

const QuestionWidget: React.FC<IWidget> = ({
  question,
  questionsCount,
  questionIndex,
  setIndex,
  setAcertos,
}: IWidget) => {
  let questionID = `question__${questionIndex}`;
  return (
    <Widget>
      <Widget.Header>
        <h3>{`Pergunta ${questionIndex + 1} de ${questionsCount}`}</h3>
      </Widget.Header>
      <ImageContainer
        image={question.image}
        image_title={question.image_title}
      />
      <Widget.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>
        <AlternativeList
          alternatives={question.alternatives}
          questionID={questionID}
          setIndex={setIndex}
          setAcertos={setAcertos}
          answer={question.answer}
        />
      </Widget.Content>
    </Widget>
  );
};

export default QuestionWidget;
