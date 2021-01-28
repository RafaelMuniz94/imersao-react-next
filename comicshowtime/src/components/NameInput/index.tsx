import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const Form = styled.form`
  max-width: 281px;
  width: 281px;
  height: 80px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  align-content: center;
  display: inline-grid;
`;
const Input = styled.input`
  height: 38px;
  position: absolute;
  max-width: 281px;
  width: 281px;
  font-family: "Lato" sans-serif;
  font-weight: 700;
  padding: 7px 82px 7px 15px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.mainBg};
  color: ${({ theme }) => theme.colors.contrastText};

  &::focus {
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
  }
`;
const Button = styled.button`
  top: 35px;
  position: relative;
  max-width: 279px;
  width: 279px;
  border-radius: 4px;
  text-overflow: ellipsis;
  overflow: hidden;
  height: 36px;
  max-height: 36px;
  padding: 10px 16px 10px 16px;
  font-family: "Lato" sans-serif;
  font-weight: 700;

  &:enabled {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.contrastText};
  }
`;

export default function NameInput() {
  let router = useRouter();
  let [name, setName] = useState("");
  let inputMax = 25;
  let submitHandler = useCallback(
    (event) => {
      event.preventDefault();
      router.push(`/quiz?name=${name}`);
    },
    [router, name]
  );
  let inputHandler = useCallback(
    (event) => {
      setName(event.target.value);
    },
    [name]
  );
  return (
    <Form onSubmit={submitHandler}>
      <Input
        placeholder="Diz ai seu nome!"
        onChange={inputHandler}
        maxLength={inputMax}
      />
      <Button type="submit" disabled={!name}>
        Jogar {name}
      </Button>
    </Form>
  );
}
