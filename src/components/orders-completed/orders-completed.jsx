import styles from "./orders-completed.module.css";

const OrdersCompleted = ({ period }) => {
  const title = `Выполнено за ${period === "today" ? "сегодня" : "все время"}:`;

  return (
    <div className={styles.container}>
      <h2 className="text text_type_main-medium">{title}</h2>
      <span className="text text_type_digits-large">28 752</span>
    </div>
  );
};

export default OrdersCompleted;
