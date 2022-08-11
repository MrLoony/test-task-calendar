import React from 'react';
import { v4 as uuid } from 'uuid';
import {
  CellDescription,
  CellHeader,
  CellTitle,
  CellWrapper,
  FirstRowWrapper,
  TableWrapper,
} from '../UI/CalendarGrid';

function CalendarGrid({ startDay, openModalHandler }) {
  const day = startDay.clone().subtract(1, 'day');
  const daysArray = [...Array(42)].map(() => day.add(1, 'day').clone());
  const firstWeekArray = daysArray.splice(0, 7);

  return (
    <>
      <FirstRowWrapper>
        {firstWeekArray.map((dayItem) => (
          <CellWrapper key={uuid()} onDoubleClick={openModalHandler}>
            <CellHeader>{dayItem.format('dddd, D')}</CellHeader>
            <CellTitle />
            <CellDescription />
          </CellWrapper>
        ))}
      </FirstRowWrapper>
      <TableWrapper>
        {daysArray.map((dayItem) => (
          <CellWrapper key={uuid()} onDoubleClick={openModalHandler}>
            <CellHeader>{dayItem.format('D')}</CellHeader>
            <CellTitle />
            <CellDescription />
          </CellWrapper>
        ))}
      </TableWrapper>
    </>
  );
}

export default CalendarGrid;
