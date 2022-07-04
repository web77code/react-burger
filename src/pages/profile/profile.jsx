import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";

import { sendLogoutRequest } from "../../services/actions/auth";

import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./profile.module.css";

const Profile = () => {

  const dispatch = useDispatch();

  const { data } = useSelector((store) => store.user);
  const [ state, setState ] = useState({});

  useEffect(() => {
    if(data) {
      const { name, email } = data;

      setState({ 
        name, 
        email,
      });
    }
  }, [data]);

  const handleLogoutClick = (e) => {
    e.preventDefault();
    dispatch(sendLogoutRequest());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={"mt-30 " + styles.container}>
      <div className={"mr-15 " + styles.navigation}>
        <ul className={styles.linkList}>
          <li className={styles.listItem}>
            <NavLink
              className={
                styles.link + " text text_type_main-medium text_color_inactive"
              }
              to="/profile"
              activeClassName={styles.active}
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
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <form onSubmit={undefined} className={styles.form}>
        <div className={"mb-6 " + styles.input}>
          <Input
            type={"text"}
            placeholder={"Имя"}
            icon={"EditIcon"}
            onChange={handleChange}
            value={state ? state.name : ""}
            error={false}
            errorText={"Ошибка"}
            name={"name"}
            disabled
          />
        </div>
        <div className={"mb-6 " + styles.input}>
          <Input
            type={"email"}
            placeholder={"Логин"}
            icon={"EditIcon"}
            onChange={handleChange}
            value={state ? state.email : ""}
            error={false}
            errorText={"Ошибка"}
            name={"email"}
          />
        </div>
        <div className={"mb-6 " + styles.input}>
          <PasswordInput
            icon={"EditIcon"}
            value={"123456"}
            name={"password"}
            onChange={handleChange}
          />
        </div>
        <fieldset className={styles.formControls}>
          <input
            type="button"
            value="Отмена"
            className={"text text_type_main-default " + styles.cancelButton}
          />
          <Button type="primary" size="medium">
            Сохранить
          </Button>
        </fieldset>
      </form>
    </div>
  );
};

export default Profile;
