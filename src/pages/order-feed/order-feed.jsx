import FeedList from "../../components/feed-list";
import Stats from "../../components/stats";

import styles from "./order-feed.module.css";

const OrderFeed = () => {
  return (
    <div className={styles.section}>
      <h1 className={styles.title + ' text text_type_main-large'}>Лента заказов</h1>
      <div className={styles.container}>
        <FeedList />
        <Stats />
      </div>
    </div>
  );
};

export default OrderFeed;
