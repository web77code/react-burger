import ProfileSidebar from "../../components/profile-sidebar";

import styles from "./orders.module.css";

const Orders = () => {

  return (
    <div className={"mt-30 " + styles.container}>
      <ProfileSidebar description="В этом разделе вы можете посмотреть свою историю заказов" />
      <h2 className="text text_type_main-medium">История заказов</h2>
    </div>
  );
};

export default Orders;
