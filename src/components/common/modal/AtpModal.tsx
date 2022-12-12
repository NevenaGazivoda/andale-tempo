import React, { FC } from 'react';
import './AtpModal.scss';
import Modal from 'react-modal';
import { VscClose } from 'react-icons/vsc';

if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root');

type Props = {
  isModalOpen: boolean;
  toggleModal: () => void;
  content: { url: string; title: string }[];
};

export const AtpModal: FC<Props> = ({ isModalOpen, toggleModal, content }) => {
  return (
    <Modal
      overlayClassName="modal-overlay"
      className="modal-content"
      isOpen={isModalOpen}
      onRequestClose={toggleModal}
      contentLabel="My dialog"
    >
      <p onClick={toggleModal} className="close-modal">
        <VscClose className="close-modal__icon" />
      </p>
      <div>
        {content.map((image, imageIndex) => (
          <img key={imageIndex} src={image.url} alt={image.title} className="modal-photo" />
        ))}
      </div>
    </Modal>
  );
};

export default AtpModal;
