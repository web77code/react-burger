import styles from './orders-board.module.css';

const OrdersBoard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <h2 className="text text_type_main-medium mb-6">Готовы:</h2>
        <ul className={`${styles.column__list} ${styles.column_type_done}`}>
          <li className="text text_type_digits-default">034533</li>
          <li className="text text_type_digits-default">034532</li>
          <li className="text text_type_digits-default">034530</li>
          <li className="text text_type_digits-default">034527</li>
          <li className="text text_type_digits-default">034525</li>
        </ul>
      </div>
      <div className={styles.column}>
        <h2 className="text text_type_main-medium mb-6">В работе:</h2>
        <ul className={styles.column__list}>
          <li className="text text_type_digits-default">034538</li>
          <li className="text text_type_digits-default">034541</li>
          <li className="text text_type_digits-default">034542</li>
        </ul>
      </div>
    </div>
  );
}

export default OrdersBoard;
