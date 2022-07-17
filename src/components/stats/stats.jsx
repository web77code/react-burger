import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import OrdersBoard from "../orders-board";
import OrdersCompleted from "../orders-completed";

import styles from "./stats.module.css";

const Stats = () => {
  const data = useSelector((store) => store.feed.data);

  const [completeOrders, setCompleteOrders] = useState([]);
  const [pendingOrders, setPendingOrders] = useState([]);

  useEffect(() => {
    if (data?.orders) {
      const completeOrders = data.orders.filter((item, index) => {
        return item.status === "done" && index < 20;
      });
      setCompleteOrders(completeOrders);

      const pendingOrders = data.orders.filter((item, index) => {
        return item.status === "pending" && index < 20;
      });
      setPendingOrders(pendingOrders);
    }
  }, [data]);

  return (
    <div className={styles.container}>
      <OrdersBoard
        completeOrders={completeOrders}
        pendingOrders={pendingOrders}
      />
      <OrdersCompleted period="ever" count={data?.total} />
      <OrdersCompleted period="today" count={data?.totalToday} />
    </div>
  );
};

export default Stats;
