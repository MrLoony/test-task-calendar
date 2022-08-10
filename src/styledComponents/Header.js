import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 0 12px;
  gap: 10px;

  width: 1024px;
  height: 100px;
`;

export const ControlWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 20px;
  gap: 10px;

  width: 1000px;
  height: 48px;
`;

export const ControlButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  gap: 10px;

  width: 169px;
  height: 26px;
`;

export const ControlButtons = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 12px;

  width: 80px;
  height: 26px;

  background: #0271c7;

  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  border-radius: 2px;

  font-family: 'Roboto', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;

  color: #ffffff;

  text-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  gap: 20px;

  width: 250px;
  height: 28px;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;

  width: 20px;
  height: 20px;
`;

export const InputArea = styled.input`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 12px;

  width: 210px;
  height: 28px;

  background: #ffffff;

  border: 1px solid #cfcfcf;

  box-shadow: inset 0 0 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;
