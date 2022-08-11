import React, { useEffect, useState } from 'react';
import moment from 'moment';
import CalendarGrid from './CalendarGrid';
import { BottomRow } from './BottomRow';
import { Header } from './Header';
import { Container, HeaderWrapper, MainWrapper, ScreenWrapper } from '../UI/App';
import Modal from './Modal';

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

  const [modalActive, setModalActive] = useState(false);

  const openModalHandler = () => {
    setModalActive(true);
  };

  const closeModalHandler = () => {
    setModalActive(false);
  };

  return (
    <>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        closeModalHandler={closeModalHandler}
      />
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
