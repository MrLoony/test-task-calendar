import React from 'react';
import { BsSearch } from 'react-icons/bs';
import {Container} from "../UI/App";
import {
  ControlButtons,
  ControlButtonsWrapper,
  ControlWrapper,
  IconWrapper,
  InputArea,
  InputWrapper
} from "../UI/Header";

const Header = () => (
  <Container>
    <ControlWrapper>
      <ControlButtonsWrapper>
        <ControlButtons>Добавить</ControlButtons>
        <ControlButtons>Обновить</ControlButtons>
      </ControlButtonsWrapper>
      <InputWrapper>
        <IconWrapper>
          <BsSearch />
        </IconWrapper>
        <InputArea type="text" />
      </InputWrapper>
    </ControlWrapper>
  </Container>
);

export { Header };
