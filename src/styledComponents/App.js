import styled from 'styled-components';

export const ScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;

  position: relative;
  width: 1440px;
  height: 800px;

  background: #ffffff;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;

  width: 1440px;
  height: 100px;

  background: #f4f4f4;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;

  width: 1440px;
  height: 700px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 12px;

  width: 1024px;
  height: 700px;
`;
