import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { sendLoginRequest } from "../../services/actions/auth";

import styles from "./login.module.css";

const Login = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendLoginRequest(state));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.container}>
      <h1 className="mb-6 text text_type_main-medium">Вход</h1>
      <form onSubmit={handleSubmit} className={"mb-20 " + styles.form}>
        <div className={"mb-6 " + styles.input}>
          <Input
            type={"email"}
            placeholder={"E-mail"}
            onChange={handleChange}
            value={state.email}
            error={false}
            errorText={"Ошибка"}
            name={"email"}
          />
        </div>
        <div className={"mb-6 " + styles.input}>
          <PasswordInput
            onChange={handleChange}
            value={state.password}
            name={"password"}
          />
        </div>
        <Button type="primary" size="medium">
          Войти
        </Button>
      </form>
      <p className="mb-4 text text_type_main-default text_color_inactive">
        Вы — новый пользователь?{" "}
        <Link to="/register" className={styles.link}>
          Зарегистрироваться
        </Link>
      </p>
      <p className="text text_type_main-default text_color_inactive">
        Забыли пароль?{" "}
        <Link to="/forgot-password" className={styles.link}>
          Восстановить пароль
        </Link>
      </p>
    </div>
  );
};

export default Login;
