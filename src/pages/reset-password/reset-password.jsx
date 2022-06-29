import { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import { CONFIG } from '../../utils/constants';
import { checkResponse, logErrorToConsole } from '../../utils/utils';

import styles from './reset-password.module.css';;

const ResetPassword = () => {

  const [state, setState] = useState({
    password: '',
    token: '',
  });
  const [response, setResponse] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;

    setState(prev => ({...prev, [name]: value}));
  }

  const onSubmit = (e) => {
    e.preventDefault();

    fetch('https://norma.nomoreparties.space/api/password-reset/reset', {
      method: 'POST',
      headers: CONFIG.HEADERS,
      body: JSON.stringify({...state}),
    })
      .then(checkResponse)
      .then((res) => {
        if(res.success) setResponse(true);
      })
      .catch((err) => {
        logErrorToConsole(err);
      });
  }

  return (
    <>
      {
        response ? (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: '/reset-password' }
            }}
          />
          ) : (
          <div className={styles.container}>
            <h1 className="mb-6 text text_type_main-medium">Восстановление пароля</h1>
            <form className={'mb-20 ' + styles.form} onSubmit={onSubmit}>
              <div className={'mb-6 ' + styles.input}>
                <PasswordInput 
                  onChange={onChange} 
                  value={state.password} 
                  name={'password'} 
                />
              </div>
              <div className={'mb-6 ' + styles.input}>
                <Input
                  type={'text'}
                  placeholder={'Введите код из письма'}
                  onChange={onChange} 
                  value={state.token} 
                  error={false}
                  errorText={"Ошибка"}
                  name={'token'}
                  size={"default"}
                />
              </div>        
              <Button type="primary" size="medium">
                Сохранить
              </Button>
            </form>
            <p className="mb-4 text text_type_main-default text_color_inactive">
              Вспомнили пароль? <Link to="/login" className={styles.link}>Войти</Link>
            </p>
          </div>
        )
      }
    </>
    
  );
}

export default ResetPassword;
