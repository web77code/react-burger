import PropTypes from 'prop-types';

import styles from "./orders-completed.module.css";

const OrdersCompleted = (props) => {
  const { period, count } = props;

  const title = `Выполнено за ${period === "today" ? "сегодня" : "все время"}:`;

  return (
    <div className={styles.container}>
      <h2 className="text text_type_main-medium">{title}</h2>
      <span className="text text_type_digits-large">{count}</span>
    </div>
  );
};

OrdersCompleted.propTypes = {
  period: PropTypes.string.isRequired, 
  count: PropTypes.number.isRequired,
};

export default OrdersCompleted;
