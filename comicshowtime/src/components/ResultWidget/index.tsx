import React, { useEffect, useState } from "react";
import Widget from "../../components/Widget";

interface IResult {
  acertos: boolean[];
  name: string;
}

let ResultWidget: React.FC<IResult> = ({ acertos,name }) => {
  let [qtdAcertos, setQuantidadeAcertos] = useState(0);

  useEffect(() => {
    // setQuantidadeAcertos(
    //   acertos.reduce((somatoriaAtual, resultAtual) => {
    //     return resultAtual ? somatoriaAtual + 1 : somatoriaAtual;
    //   }, 0)
    // );
    setQuantidadeAcertos(acertos.filter((x) => x).length);
  }, [acertos]);

  return (
    <Widget>
      <Widget.Header>Resultados de {name}</Widget.Header>
      <Widget.Content>
        <p>{`${qtdAcertos} acertos de ${acertos.length} questões`}</p>
        <ul>
          {acertos.map((acerto, index) => (
            <li key={index}>{`Questão ${index + 1}: ${
              acerto ? `✅` : `❌`
            }`}</li>
          ))}
        </ul>
      </Widget.Content>
    </Widget>
  );
};

export default ResultWidget;
