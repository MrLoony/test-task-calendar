import styled from "styled-components";

export const TableWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  align-items: center;
  padding: 0;

  width: 1000px;
  height: 600px;

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

export const FirstRowWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

export const CellWrapper = styled.button`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px;
  gap: 8px;

  width: 143px;
  height: 120px;

  background: #ffffff;

  border: none;
  outline: 1px solid #292929;
`;

export const CellHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;

  width: 127px;
  height: 16px;

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

export const CellTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;

  width: 127px;
  height: 16px;

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

export const CellDescription = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;

  width: 127px;
  height: 56px;

  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 1;
`;
