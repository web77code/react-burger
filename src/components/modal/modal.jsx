import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ModalOverlay from '../modal-overlay/modal-overlay';
import styles from './modal.module.css';

const Modal = (props) => {

  Modal.propTypes = {
    closePopupWindow: PropTypes.func,
  };

  React.useEffect(()=>{
    document.addEventListener("keydown", props.closePopupWindow);

    return () => {
      document.removeEventListener("keydown", props.closePopupWindow);
    }
  }, []);

  return ReactDOM.createPortal(
    (
    <div className={styles.modal}>
      <ModalOverlay closePopupWindow={props.closePopupWindow} />
      <div className={styles.container}>
          <button className={styles.closeButton} onClick={props.closePopupWindow}></button>
          {props.children}
        </div>
    </div>
    ),
    document.getElementById('react-modals')
  );
}

export default Modal;
