import React, { useCallback, useState } from "react";
import styled from "styled-components";
import Widget from "../Widget";
import Button from "../Button";

interface IAlternativeComponent {
  alternatives: string[];
  answer: number;
  questionID: string;
  setIndex(): void;
  setPontos(): void;
}

const AlternativeList: React.FC<IAlternativeComponent> = ({
  alternatives,
  questionID,
  answer,
  setIndex,
  setPontos,
}: IAlternativeComponent) => {
  let [indexSelecionado, setIndexSelecionado] = useState(-1);
  let submitHandler = useCallback(
    (event) => {
      event.preventDefault();
      console.log(indexSelecionado)
      console.log(answer)
      if (indexSelecionado === answer) {
        setPontos();
      }
      setIndex();
    },
    [questionID,indexSelecionado]
  );

  return (
    <form onSubmit={submitHandler}>
      {alternatives.map((alternative, index) => {
        let alternativeId = `alternative__${index}`;
        return (
          <Widget.Topic as="label" htmlFor={alternativeId} key={alternativeId}>
            <input
              id={alternativeId}
              name={questionID}
              type="radio"
              onChange={() => setIndexSelecionado(index)}
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
    </form>
  );
};

export default AlternativeList;
