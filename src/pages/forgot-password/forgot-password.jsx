import { useState } from 'react';
import { Redirect, Link, useHistory } from 'react-router-dom';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import { resetPasswordRequest } from '../../utils/api';
import { logErrorToConsole } from '../../utils/utils';

import styles from './forgot-password.module.css';;

const ForgotPassword = () => {

  const history = useHistory();

  const [email, setEmail] = useState('');
  const [response, setResponse] = useState(false);

  const onChange = (e) => {
    setEmail(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    resetPasswordRequest(email)
      .then((res) => {
        if(res.success) 
          setResponse(true);
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
              pathname: '/reset-password',
              state: { from: history.location.pathname }
            }}
          />
          ) : (
          <div className={styles.container}>
            <h1 className="mb-6 text text_type_main-medium">Восстановление пароля</h1>
            <form className={'mb-20 ' + styles.form} onSubmit={onSubmit}>
              <div className={'mb-6 ' + styles.input}>
                <Input
                  type={'text'}
                  placeholder={'Укажите email'}
                  onChange={onChange} 
                  value={email} 
                  error={false}
                  errorText={"Ошибка"}
                  name={'name'}
                  size={"default"}
                />
              </div>        
              <Button type="primary" size="medium">
                Восстановить
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

export default ForgotPassword;
