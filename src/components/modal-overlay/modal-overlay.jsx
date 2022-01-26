import PropTypes from 'prop-types';
import styles from './modal-overlay.module.css';

const ModalOverlay = (props) => {

  ModalOverlay.propTypes = {
    closePopupWindow: PropTypes.func,
  };

  return (
    <div className={styles.overlay} onClick={props.closePopupWindow}></div>
  );
}

export default ModalOverlay;
