import styled from "styled-components";

export const DivWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 0;
  gap: 10px;

  width: 1000px;
  height: 48px;
`;

export const MonthControl = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  gap: 10px;

  width: 220px;
  height: 24px;
`;

export const ButtonWrapper = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px 6px;

  width: 32px;
  height: 24px;

  background: #ffffff;

  box-shadow: inset 0 0 1px 1px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;

  width: 125px;
  height: 21px;

  font-family: 'Roboto', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  color: #292929;
`;

export const ExtraButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px 6px;

  width: 59px;
  height: 18px;

  background: #ffffff;

  box-shadow: inset 0 0 1px 1px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;
