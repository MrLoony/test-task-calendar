import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { CalendarGrid } from './CalendarGrid';
import { BottomRow } from './BottomRow';
import { Header } from './Header';
import { AddModal } from './AddModal';
import { Container, HeaderWrapper, MainWrapper, ScreenWrapper } from '../UI/App';

function App() {
  useEffect(() => {
    moment.updateLocale('eu', {
      months: [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
      ],
      weekdays: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
      week: { dow: 1 },
    });
  }, []);

  const [currentMonth, setCurrentMonth] = useState(moment());
  const startDay = currentMonth.clone().startOf('month').startOf('week');

  const prevMonthHandler = () => {
    setCurrentMonth((prev) => prev.clone().subtract(1, 'month'));
  };
  const nextMonthHandler = () => {
    setCurrentMonth((prev) => prev.clone().add(1, 'month'));
  };
  const currentMonthHandler = () => setCurrentMonth(moment());

  const [isShowModal, setShowModal] = useState(false);

  const openModalHandler = () => {
    setShowModal(true);
  };

  return (
    <>
      {isShowModal ? <AddModal /> : null}
      <ScreenWrapper>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <MainWrapper>
          <Container>
            <BottomRow
              currentMonth={currentMonth}
              prevMonthHandler={prevMonthHandler}
              nextMonthHandler={nextMonthHandler}
              currentMonthHandler={currentMonthHandler}
            />
            <CalendarGrid startDay={startDay} openModalHandler={openModalHandler} />
          </Container>
        </MainWrapper>
      </ScreenWrapper>
    </>
  );
}

export default App;
