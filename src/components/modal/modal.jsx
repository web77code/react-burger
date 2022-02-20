import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ModalOverlay from '../modal-overlay/modal-overlay';
import styles from './modal.module.css';

const Modal = (props) => {

  const { header, children, closeModal } = props;

  React.useEffect(() => {
    const handleKeyDown = e => {
      if(e.code === "Escape") closeModal();
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    }
  }, [closeModal]);

  return ReactDOM.createPortal(
    (
    <div className={styles.modal}>
      <ModalOverlay closeModal={closeModal} />
      <div className={styles.container + " pt-10 pr-10 pb-15 pl-10"}>
        <div className={styles.modalHeader}>
          {header && <h2 className="text text_type_main-large">{header}</h2>}
          <button className={styles.closeButton} onClick={closeModal}></button>
        </div>
        {children}
      </div>
    </div>
    ),
    document.getElementById('react-modals')
  );
}

Modal.propTypes = {
  header: PropTypes.string,
  children: PropTypes.node.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
