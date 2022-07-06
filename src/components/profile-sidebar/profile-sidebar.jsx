import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";

import { sendLogoutRequest } from "../../services/actions/auth";

import styles from "./profile-sidebar.module.css";

const ProfileSidebar = ({ description }) => {

  const dispatch = useDispatch();

  const handleLogoutClick = (e) => {
    e.preventDefault();
    dispatch(sendLogoutRequest());
  };

  return (
    <div className={"mr-15 " + styles.navigation}>
      <ul className={styles.linkList}>
        <li className={styles.listItem}>
          <NavLink
            className={
              styles.link + " text text_type_main-medium text_color_inactive"
            }
            to="/profile"
            activeClassName={styles.active}
            exact
          >
            Профиль
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink
            className={
              styles.link + " text text_type_main-medium text_color_inactive"
            }
            to="/profile/orders"
            activeClassName={styles.active}
            exact
          >
            История заказов
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <Link
            className={
              styles.link + " text text_type_main-medium text_color_inactive"
            }
            onClick={handleLogoutClick}
            to="/logout"
          >
            Выход
          </Link>
        </li>
      </ul>
      <p className="text text_type_main-default text_color_inactive">
        {description}
      </p>
    </div>
  );
};

export default ProfileSidebar;
