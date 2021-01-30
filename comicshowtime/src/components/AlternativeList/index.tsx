import React, { useCallback } from "react";
import styled from "styled-components";
import Widget from "../Widget";
import Button from "../Button";

interface IAlternativeComponent {
  alternatives: string[];
  questionID: string;
  setIndex(): void;
}

const AlternativeList: React.FC<IAlternativeComponent> = ({
  alternatives,
  questionID,
  setIndex,
}: IAlternativeComponent) => {
  let submitHandler = useCallback(
    (event) => {
      event.preventDefault();
      setIndex();
    },
    [questionID]
  );
  return (
    <form onSubmit={submitHandler}>
      {alternatives.map((alternative, index) => {
        let alternativeId = `alternative__${index}`;
        return (
          <Widget.Topic as="label" htmlFor={alternativeId} key={alternativeId}>
            <input id={alternativeId} name={questionID} type="radio" />
            {alternative}
          </Widget.Topic>
        );
      })}
      <Button text="Confirmar" type="submit" />
    </form>
  );
};

export default AlternativeList;
