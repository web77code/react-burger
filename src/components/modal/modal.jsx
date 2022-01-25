import styles from './modal.module.css';

const Modal = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.container}>
        <button className={styles.closeButton}></button>
        {props.children}
      </div>
      
    </div>
  );
}

export default Modal;