import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './registration.module.css';;

const Registration = () => {

  const [value, setValue] = useState('');
  const [pass, setPass] = useState('')

  const onChange = e => {
    setPass(e.target.value)
  }

  return (
    <div className={styles.container}>
      <h1 className="mb-6 text text_type_main-medium">Регистрация</h1>
      <form className={'mb-20 ' + styles.form}>
        <div className={'mb-6 ' + styles.input}>
          <Input
            type={'text'}
            placeholder={'Имя'}
            onChange={onChange} 
            value={value} 
            error={false}
            errorText={"Ошибка"}
            name={'name'}
            size={"default"}
          />
        </div>
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
          Зарегистрироваться
        </Button>
      </form>
      <p className="mb-4 text text_type_main-default text_color_inactive">Уже зарегистрировались? <Link to="/login">Войти</Link></p>
    </div>
  );
}

export default Registration;
