import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { WS_URL } from "../../utils/constants";
import { WS_CONNECTION_START } from "../../services/actions/orders";

import AnimatedLoader from "../../components/animated-loader";
import ErrorNotification from "../../components/error-notification/error-notification";
import FeedList from "../../components/feed-list";
import Stats from "../../components/stats";

import styles from "./order-feed.module.css";

const OrderFeed = () => {
  const dispatch = useDispatch();

  const isFetching = useSelector((store) => store.feed.isFetching);
  const feed = useSelector((store) => store.feed);
  const fetchingFailed = feed.error;

  useEffect(() => {
    dispatch({ type: WS_CONNECTION_START, payload: WS_URL.feed });
  }, []);

  return (
    <>
      {isFetching && <AnimatedLoader />}
      {fetchingFailed && <ErrorNotification />}

      <div className={styles.section}>
        <h1 className={styles.title + " text text_type_main-large"}>
          Лента заказов
        </h1>
        <div className={styles.container}>
          {feed?.data?.success ? (
            <>
              <FeedList />
              <Stats />
            </>
          ) : (
            <p className="text text_type_main-default">Заказов не найдено. Попробуйте обновить страницу.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default OrderFeed;
