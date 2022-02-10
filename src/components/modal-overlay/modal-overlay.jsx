import PropTypes from 'prop-types';
import styles from './modal-overlay.module.css';

const ModalOverlay = (props) => {

  return (
    <div className={styles.overlay} onClick={props.closePopupWindow}></div>
  );
}

ModalOverlay.propTypes = {
  closePopupWindow: PropTypes.func,
};

export default ModalOverlay;
