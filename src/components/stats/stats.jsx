import OrdersBoard from "../orders-board";
import OrdersCompleted from "../orders-completed";

import styles from "./stats.module.css";

const Stats = () => {
  return (
    <div className={styles.container}>
      <OrdersBoard />
      <OrdersCompleted period="ever" />
      <OrdersCompleted period="today" />
    </div>
  );
};

export default Stats;
