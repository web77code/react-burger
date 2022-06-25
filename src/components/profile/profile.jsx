import { NavLink  } from 'react-router-dom';

import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from './profile.module.css';

const Profile = () => {
  return (
    <div className={"mt-30 " + styles.container}>
      <div className={"mr-15 " + styles.navigation}>
        <ul className={styles.linkList}>
          <li className={styles.listItem}>
            <NavLink className={styles.link + " text text_type_main-medium text_color_inactive"} to="/profile" activeClassName={styles.active}>Профиль</NavLink>
          </li>
          <li className={styles.listItem}>
            <NavLink className={styles.link + " text text_type_main-medium text_color_inactive"} to="/profile/orders">История заказов</NavLink>
          </li>
          <li className={styles.listItem}>
            <NavLink className={styles.link + " text text_type_main-medium text_color_inactive"} to="/logout">Выход</NavLink>
          </li>
        </ul>
        <p className="text text_type_main-default text_color_inactive">В этом разделе вы можете изменить свои персональные данные</p>
      </div>
      <form onSubmit={undefined} className={styles.form}>
        <div className={"mb-6 " + styles.input}>
          <Input
            type={"text"}
            placeholder={"Имя"}
            icon={"EditIcon"}
            onChange={undefined}
            value={"Марк"}
            error={false}
            errorText={"Ошибка"}
            name={"name"}
          />
        </div>
        <div className={"mb-6 " + styles.input}>
          <Input
            type={"email"}
            placeholder={"Логин"}
            icon={"EditIcon"}
            onChange={undefined}
            value={"mail@stellar.burgers"}
            error={false}
            errorText={"Ошибка"}
            name={"email"}
          />
        </div>
        <div className={"mb-6 " + styles.input}>
          <PasswordInput
            onChange={undefined}
            icon={"EditIcon"}
            value={undefined}
            name={"password"}
          />
        </div>
      </form>
    </div>
  );
}

export default Profile;
