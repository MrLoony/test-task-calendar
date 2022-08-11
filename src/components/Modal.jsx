import React from 'react';
import styled from 'styled-components';
import AddModal from './AddModal';

const ModalWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: 0.5s;
`;

const ActiveModalWrapper = styled(ModalWrapper)`
  opacity: 1;
  pointer-events: all;
`;

const ModalContent = styled.div`
  padding: 20px;
  border-radius: 12px;
  background-color: white;
`;

function Modal({ active, setActive, children }) {
  return active ? (
    <ActiveModalWrapper>
      <ModalContent children={children}>
        <AddModal />
      </ModalContent>
    </ActiveModalWrapper>
  ) : (
    <ModalWrapper>
      <ModalContent children={children}>
        <AddModal />
      </ModalContent>
    </ModalWrapper>
  );
}

export default Modal;
