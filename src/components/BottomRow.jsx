import React from 'react';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import {ButtonWrapper, DivWrapper, MonthControl, TextWrapper, ExtraButton} from '../UI/BottomRow';

const BottomRow = ({ currentMonth, prevMonthHandler, nextMonthHandler, currentMonthHandler }) => (
  <DivWrapper>
    <MonthControl>
      <ButtonWrapper onClick={prevMonthHandler}>
        <BiLeftArrow />
      </ButtonWrapper>
      <TextWrapper>{currentMonth.format('MMMM YYYY')}</TextWrapper>
      <ButtonWrapper onClick={nextMonthHandler}>
        <BiRightArrow />
      </ButtonWrapper>
    </MonthControl>
    <ExtraButton onClick={currentMonthHandler}>Сегодня</ExtraButton>
  </DivWrapper>
);
export { BottomRow };
