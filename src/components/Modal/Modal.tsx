import { FC, ReactNode } from 'react';
import ReactDOM from 'react-dom';

const modalNode = document.getElementById('modal');

interface ModalProps {
  children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ children }) => {
  if (modalNode) {
    return ReactDOM.createPortal(children, modalNode);
  }
  return null;
};
