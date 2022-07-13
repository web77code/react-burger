import FeedUnit from "../feed-unit";

import styles from "./feed-list.module.css";

const FeedList = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <FeedUnit />
        <FeedUnit />
        <FeedUnit />
        <FeedUnit />
        <FeedUnit />
        <FeedUnit />
        <FeedUnit />
        <FeedUnit />
      </ul>
    </div>
  );
};

export default FeedList;
