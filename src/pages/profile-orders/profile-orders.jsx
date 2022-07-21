import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getCookie } from "../../utils/cookies";

import { WS_URL } from "../../utils/constants";
import { WS_CONNECTION_START } from "../../services/actions/orders";

import ProfileSidebar from "../../components/profile-sidebar";
import ProfileFeed from "../../components/profile-feed";
import AnimatedLoader from "../../components/animated-loader";

import styles from "./profile-orders.module.css";

const ProfileOrders = () => {
  const dispatch = useDispatch();

  const orders = useSelector((store) => store.feed.orders);
  const { sendRequest } = useSelector((store) => store.user);

  useEffect(() => {
    const accessToken = getCookie("token");
    const wsUrl = `${WS_URL.personalFeed}?token=${accessToken}`;

    dispatch({ type: WS_CONNECTION_START, payload: wsUrl });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {sendRequest && <AnimatedLoader />}

      <div className={"mt-30 " + styles.container}>
        <ProfileSidebar description="В этом разделе вы можете посмотреть свою историю заказов" />
        {orders.length > 0 && <ProfileFeed />}
      </div>
    </>
  );
};

export default ProfileOrders;
