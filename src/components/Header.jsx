import React from 'react';
import { BsSearch } from 'react-icons/bs';
import {Container} from "../styledComponents/App";
import {
  ControlButtons,
  ControlButtonsWrapper,
  ControlWrapper,
  IconWrapper,
  InputArea,
  InputWrapper
} from "../styledComponents/Header";

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
