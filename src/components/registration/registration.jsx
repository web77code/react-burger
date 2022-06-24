import { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import { sendRegistrationRequest } from '../../services/actions/auth';

import styles from './registration.module.css';

const Registration = () => {

  const dispatch = useDispatch();
  const isAuth = useSelector(store => store.user.isAuth);

  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendRegistrationRequest(state));
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState(prev => ({ ...prev, [name]: value }));
  }

  return (
    <>
      {
        isAuth ? (
          <Redirect
            to={{
              pathname: '/',
              state: { from: '/registration' }
            }}
          />
        ) : (
          <div className={styles.container}>
            <h1 className="mb-6 text text_type_main-medium">Регистрация</h1>
            <form onSubmit={handleSubmit} className={'mb-20 ' + styles.form}>
              <div className={'mb-6 ' + styles.input}>
                <Input
                  type={'text'}
                  placeholder={'Имя'}
                  onChange={handleChange} 
                  value={state.name} 
                  error={false}
                  errorText={"Ошибка"}
                  name={'name'}
                />
              </div>
              <div className={'mb-6 ' + styles.input}>
                <Input
                  type={'email'}
                  placeholder={'E-mail'}
                  onChange={handleChange} 
                  value={state.email} 
                  error={false}
                  errorText={"Ошибка"}
                  name={'email'}
                />
              </div>
              <div className={'mb-6 ' + styles.input}>
                <PasswordInput 
                  onChange={handleChange} 
                  value={state.password} 
                  name={'password'} 
                />
              </div>
              <Button type="primary" size="medium">
                Зарегистрироваться
              </Button>
            </form>
            <p className="mb-4 text text_type_main-default text_color_inactive">
              Уже зарегистрировались? <Link to="/login" className={styles.link}>Войти</Link>
            </p>
          </div>
        )
      }
    </>
  );
}

export default Registration;
