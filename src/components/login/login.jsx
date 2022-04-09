import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './login.module.css';;

const Login = () => {

  const [value, setValue] = useState('');
  const [pass, setPass] = useState('')

  const onChange = e => {
    setPass(e.target.value)
  }

  return (
    <div className={styles.container}>
      <h1 className="mb-6 text text_type_main-medium">Вход</h1>
      <form className={'mb-20 ' + styles.form}>
        <div className={'mb-6 ' + styles.input}>
          <Input
            type={'email'}
            placeholder={'E-mail'}
            onChange={onChange} 
            value={value} 
            error={false}
            errorText={"Ошибка"}
            name={'name'}
            size={"default"}
          />
        </div>
        <div className={'mb-6 ' + styles.input}>
          <PasswordInput 
            onChange={onChange} 
            value={pass} 
            name={'password'} 
          />
        </div>
        <Button type="primary" size="medium">
          Войти
        </Button>
      </form>
      <p className="mb-4 text text_type_main-default text_color_inactive">
        Вы — новый пользователь? <Link to="/register" className={styles.link}>Зарегистрироваться</Link>
      </p>
      <p className="text text_type_main-default text_color_inactive">
        Забыли пароль? <Link to="/forgot-password" className={styles.link}>Восстановить пароль</Link>
      </p>
    </div>
  );
}

export default Login;
