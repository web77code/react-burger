import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./profile-form.module.css";

const ProfileForm = () => {

  const { data } = useSelector((store) => store.user);
  const [state, setState] = useState({});

  useEffect(() => {
    if (data) {
      const { name, email } = data;

      setState({
        name,
        email,
      });
    }
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  return (
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
  );
};

export default ProfileForm;
