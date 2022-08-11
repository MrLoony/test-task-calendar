import React from 'react';
import { GrFormClose } from 'react-icons/gr';
import {
  AddModalWrapper,
  CloseButton,
  ExtraButton,
  InputDate,
  InputDescription,
  InputMembers,
  InputTitle,
  ModalFrame1,
  ModalFrame2,
  ModalFrame3,
  ModalFrame4,
  ModalFrame5,
  ModalFrame6,
} from '../UI/AddModal';

function AddModal(closeModalHandler, item, newItem, changeEventHandler) {
  return (
    <AddModalWrapper>
      <ModalFrame1>
        <CloseButton onClick={closeModalHandler}>
          <GrFormClose />
        </CloseButton>
      </ModalFrame1>

      <ModalFrame2>
        <InputTitle
          type="text"
          placeholder="Событие"
          value={item.title}
          onChange={(e) => changeEventHandler(e.target.value, 'title')}
        />
      </ModalFrame2>

      <ModalFrame3>
        <InputDate
          type="date"
          placeholder="День, месяц, год"
          value={item.date}
          onChange={(e) => changeEventHandler(e.target.value, 'date')}
        />
      </ModalFrame3>

      <ModalFrame4>
        <InputMembers
          type="text"
          placeholder="Имена участников"
          value={item.members}
          onChange={(e) => changeEventHandler(e.target.value, 'members')}
        />
      </ModalFrame4>

      <ModalFrame5>
        <InputDescription
          placeholder="Описание"
          value={item.description}
          onChange={(e) => changeEventHandler(e.target.value, 'description')}
        />
      </ModalFrame5>

      <ModalFrame6>
        <ExtraButton onClick={newItem}>Готово</ExtraButton>
        <ExtraButton>Удалить</ExtraButton>
      </ModalFrame6>
    </AddModalWrapper>
  );
}

export default AddModal;
