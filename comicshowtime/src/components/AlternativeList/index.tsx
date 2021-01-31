import React, { useCallback, useState, createRef } from "react";
import styled from "styled-components";
import Widget from "../Widget";
import Button from "../Button";
import AlternativesForm from "../AlternativesForm";

interface IAlternativeComponent {
  alternatives: string[];
  answer: number;
  questionID: string;
  setIndex(): void;
  setAcertos(index: boolean): void;
}

const AlternativeList: React.FC<IAlternativeComponent> = ({
  alternatives,
  questionID,
  answer,
  setIndex,
  setAcertos,
}: IAlternativeComponent) => {
  let [indexSelecionado, setIndexSelecionado] = useState(-1);
  const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false);
  let submitHandler = useCallback(
    (event) => {
      event.preventDefault();
      setIsQuestionSubmited(true);

      setTimeout(() => {
        setIsQuestionSubmited(false);
        setAcertos(indexSelecionado === answer);
        setIndexSelecionado(-1);
        setIndex();
      }, 3 * 1000);
    },
    [questionID, indexSelecionado]
  );

  return (
    <AlternativesForm onSubmit={submitHandler}>
      {alternatives.map((alternative, index) => {
        let alternativeId = `alternative__${index}`;
        let alternativeStatus =
          indexSelecionado === answer ? "SUCCESS" : "ERROR";
        return (
          <Widget.Topic
            as="label"
            htmlFor={alternativeId}
            key={alternativeId}
            data-selected={indexSelecionado === index}
            data-status={isQuestionSubmited && alternativeStatus}
          >
            <input
              id={alternativeId}
              name={questionID}
              type="radio"
              onChange={() => {
                setIndexSelecionado(index);
              }}
            />
            {alternative}
          </Widget.Topic>
        );
      })}
      <Button
        text="Confirmar"
        type="submit"
        disabled={indexSelecionado === -1}
      />
    </AlternativesForm>
  );
};

export default AlternativeList;
